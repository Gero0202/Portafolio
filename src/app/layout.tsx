import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next"



export const metadata: Metadata = {
  title: "Geronimo Tortosa",
  description: "Bienvenido a mi portafolio",
  icons:{
    icon: "/buhoport.svg"
  }
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
        <Analytics/>
      </body>
    </html>
  );
}
