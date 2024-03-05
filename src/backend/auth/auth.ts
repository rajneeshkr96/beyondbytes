import NextAuth from "next-auth";
import authConfig from "./auth.config";
import { dataBasePrisma } from "../../../prisma/databasePrisma";
import { UserRole } from "@prisma/client";

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  callbacks: {
    async session({ token, session }) {
      if (token.sub && session.user) {
        session.user.id = token.sub;
      }

      if (token.role && session.user) {
        session.user.role = token.role as UserRole;
      }

      if (session.user) {
        session.user.name = token.name;
        session.user.email = token.email as string;
        session.user.isOAuth = token.isOAuth as boolean;
      }

      return session;
    },
    async jwt({ token }) {
      try {
        dataBasePrisma.$connect();
        if (!token.sub) return token;
        const existingUser = await dataBasePrisma.user.findUnique({
          where: { email: token.email as string},
        });
        var newUser;

        if (!existingUser) {
          newUser = await dataBasePrisma.user.create({
            data: {
              email: token.email,
              name: token.name,
              role: UserRole.USER,
              image: token.picture,
            },
          });
          token.role = newUser.role;
          token.name = newUser.name;
          token.email = newUser.email;

          return token;
        }
        token.name = existingUser.name;
        token.email = existingUser.email;
        token.role = existingUser.role;
        token.image = existingUser.image;

        return token;
      } finally {
        await dataBasePrisma.$disconnect();
      }
    },
  },

  session: { strategy: "jwt" },

  ...authConfig,
});


