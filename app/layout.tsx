import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Scott Lennartz",
  description: "Technology and product executive with 20+ years of experience scaling organizations.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
