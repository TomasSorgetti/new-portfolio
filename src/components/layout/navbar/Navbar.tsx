"use client";
import { useState, useTransition } from "react";
import styles from "./Navbar.module.scss";
import { useLocale, useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import LinkedButton from "@/components/ui/linked_button/linkedButton";
import LangButton from "@/components/ui/lang_button/LangButton";

const Hero = () => {
  const t = useTranslations("Hero");
  const router = useRouter();
  const locale = useLocale();
  const [isPending, startTransition] = useTransition();
  const [active, setActive] = useState(false);

  const handleChangeLang = (lang: string) => {
    localStorage.setItem("language", lang);
    const path = window.location.pathname.split("/")[2]
      ? window.location.pathname.split("/")[2]
      : "";
    startTransition(() => router.replace(`/${lang}/${path}`));
  };

  return (
    <header className={styles.header}>
      <nav>
        <span>Tomas Sorgetti</span>
        <div
          onClick={() => setActive(!active)}
          className={`${styles.hamburger} ${active ? styles.active : ""}`}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul className={`${styles.menu} ${active ? styles.active : ""}`}>
          <li>
            <a
              onClick={() => {
                setActive(false);
              }}
              href="#projects"
            >
              {t("projects")}
            </a>
          </li>
          <li>
            <a
              onClick={() => {
                setActive(false);
              }}
              href="#about"
            >
              {t("about")}
            </a>
          </li>
          <li>
            <a
              onClick={() => {
                setActive(false);
              }}
              href="#contacto"
            >
              {t("contact")}
            </a>
          </li>
          <li>
            <LinkedButton
              href="/TomasSorgetti_WebDesigner_English.pdf"
              blank={true}
              stroked={true}
              download={true}
            >
              Descargar CV
            </LinkedButton>
          </li>
          <li>
            <LangButton
              lang="en"
              active={locale === "en"}
              handleChangeLang={handleChangeLang}
            >
              EN
            </LangButton>
            -
            <LangButton
              lang="es"
              active={locale === "es"}
              handleChangeLang={handleChangeLang}
            >
              ES
            </LangButton>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Hero;
