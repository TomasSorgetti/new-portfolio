import { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { LocaleProvider } from "../../providers/LocaleProvider";
import "./globals.scss";
import Hero from "../../components/layout/hero/Hero";
import Footer from "../../components/layout/footer/Footer";

export const metadata: Metadata = {
  title: "Tomás Sorgetti - Web Developer",
  description: "Diseñador y desarrollador web con experiencia como luthier",
  keywords:
    "diseñador, desarrollador web, frontend, fullstack, backend, software, developer, software developer, jr, junior, software engineer, web developer, react, node, figma, react developer",
};

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider messages={messages}>
          <LocaleProvider>
            <Hero />
            {children}
            <Footer />
          </LocaleProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
