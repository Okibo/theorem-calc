import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TheoremCalc",
  description: "Educational calculator portal for students and professionals",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {children}
    </>
  );
}
