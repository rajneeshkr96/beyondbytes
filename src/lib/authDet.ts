import { auth } from "@/backend/auth/auth";

export const currentUser = async () => {
  const session = await auth();

  return session?.user;
};

export const currentRole = async () => {
  const session = await auth();

  return session?.user?.role;
};
export const currentUserId = async () => {
  const session = await auth();

  return session?.user?.userId as string;
}
