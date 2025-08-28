import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next"



export const metadata: Metadata = {
  title: "Geronimo Tortosa",
  description: "Bienvenido a mi portafolio",
  icons:{
    icon: "/buhoport.svg"
  },
  openGraph: {
    title: "Geronimo Tortosa | Full Stack Developer",
    description: "Mira mis proyectos y conoceme mejor 🚀",
    url: "https://geronimotortosa.com",
    siteName: "Geronimo Tortosa Portfolio",
    images: [
      {
        url: "https://www.geronimotortosa.com/preview.png",
        width: 1200,
        height: 630,
        alt: "Preview del portafolio de Geronimo Tortosa",
      },
    ],
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Geronimo Tortosa | Full Stack Developer",
    description: "Mira mis proyectos y conoceme mejor 🚀",
    images: ["https://www.geronimotortosa.com/preview.png"],
  },
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
