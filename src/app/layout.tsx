import type { Metadata } from "next";
import "./globals.css";



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
      </body>
    </html>
  );
}
