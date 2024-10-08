import type { Metadata } from "next";
import Head from "next/head";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS\
import Navbar from "../components/Navbar";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const title = "Book Sharing";
  return (
    <html lang="en">
      <body>
        <Head>{title}</Head>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
