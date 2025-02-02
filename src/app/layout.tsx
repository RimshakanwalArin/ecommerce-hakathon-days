import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Providers from "./Providers";
import {
  ClerkProvider,
  SignInButton,
  SignUpButton, // ✅ Sign Up Button Import
  SignedIn,
  SignedOut,
  UserButton
} from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Suad perfume bottle",
  description: "Beautyfull perfume bottle ",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <Providers>
            <Header />

            {/* ✅ Authentication Section */}
            <div className="auth-container flex gap-4 p-4">
              <SignedOut>
                <SignInButton mode="modal" />
                <SignUpButton mode="modal" /> ✅ Sign Up Button Added
              </SignedOut>
              <SignedIn>
                <UserButton />
              </SignedIn>
            </div>

            {/* Main Content */}
            <main>{children}</main>

            <Footer />
          </Providers>
        </body>
      </html>
     </ClerkProvider>
  );
}
