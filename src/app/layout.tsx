import "./globals.css";
import type { Metadata } from "next";
import { Inter, Raleway, Comfortaa } from "next/font/google";
import { Providers } from "./providers";
import Link from "next/link";
import Nav from "@/Components/navbar";
import Nav2 from "@/Components/nav2";

const inter = Raleway({ subsets: ["latin"], weight: ["400", "600", "700"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <Providers>
          <Nav2 />
          <main>{children}</main>
          <footer>footer</footer>
        </Providers>
      </body>
    </html>
  );
}
