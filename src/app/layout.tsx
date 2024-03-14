import type { Metadata } from "next";
import { Inter,Source_Serif_4 } from "next/font/google";
import "./globals.css";
import HomeLayout from "@/components/layoutComponents/HomeLayout/HomeLayout";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ReduxProvider from "@/redux/Provider";
import { auth } from "@/backend/auth/auth";
import {SessionProvider} from "next-auth/react"
const inter = Inter({ subsets: ["latin"] });
export const source_serif_4 = Source_Serif_4({
  subsets: ['latin'],
  variable: '--source_serif_4',
})
export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();

  return (
    <html lang="en">
      <body className={`${inter.className} ${source_serif_4.variable}`}>
      <SessionProvider session={session}>
        <ReduxProvider>
          <HomeLayout>
            {children}
          </HomeLayout>
        </ReduxProvider>
        <ToastContainer
          position="top-right"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
          />
    </SessionProvider>
      </body>
    </html>
  );
}
