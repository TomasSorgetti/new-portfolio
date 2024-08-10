import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Hero from "@/components/hero/Hero";
import Footer from "@/components/footer/Footer";
import {ReduxProvider} from "@/redux/providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tomás Sorgetti - FullStack Developer",
  description: "Portfolio de Tomás Sorgetti, un FullStack Developer",
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
        className={`${inter.className} main_body`}
        
      >
        <ReduxProvider>
        <Hero />

        {children}

        <Footer />
        </ReduxProvider>
      </body>
    </html>
  );
}
