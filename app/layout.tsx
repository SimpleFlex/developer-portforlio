import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Okonkwo Makuochukwu Elijah | Full Stack Developer & Filmmaker",
  description:
    "Full Stack Web Developer, React Native Engineer, Videographer & Photo Editor based in Nigeria. 4 years building products people love.",
  keywords: [
    "Full Stack Developer Nigeria",
    "React Developer",
    "MERN Stack",
    "PERN Stack",
    "React Native Developer",
    "Videographer Nigeria",
    "Photo Editor",
    "Next.js Developer",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap"
        />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
