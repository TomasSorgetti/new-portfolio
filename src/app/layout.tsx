import type { Metadata } from "next";

import "./globals.css";
import Hero from "@/components/hero/Hero";
import Footer from "@/components/footer/Footer";



export const metadata: Metadata = {
  title: "Tomás Sorgetti - Web Developer",
  description: "Diseñador y desarrollador web con experiencia como luthier",
  keywords:"diseñador, desarrollador web, frontend, fullstack, backend, software, developer, software developer, jr, junior, software engineer, web developer, react, node, figma, react developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <link rel="shortcut icon" href="icon.png" type="image/x-icon" />
      </head>
      <body
        className={`main_body`}
        
      >
        <Hero />

        {children}

        <Footer />
      </body>
    </html>
  );
}
