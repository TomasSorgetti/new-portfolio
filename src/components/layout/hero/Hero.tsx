"use client";
import { useState, useTransition } from "react";
import styles from "./Hero.module.css";
import Image from "next/image";
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
    <header className={styles.header} onContextMenu={(e) => e.preventDefault()}>
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
            <LinkedButton href="#" blank={true} stroked={true}>
              Descargar CV
            </LinkedButton>
          </li>
          <li>
            <LangButton
              lang="en"
              active={false}
              handleChangeLang={handleChangeLang}
            >
              EN
            </LangButton>
            -
            <LangButton
              lang="es"
              active={true}
              handleChangeLang={handleChangeLang}
            >
              ES
            </LangButton>
          </li>
        </ul>
      </nav>

      <section>
        <div>
          <h1 id="title_job">
            {t("title")}{" "}
            <span className={styles.fullstack}>{t("title_strong")}</span>
          </h1>
          <p>
            <span className={styles.fullstack}>{t("description1")}</span>{" "}
            {t("description2")}{" "}
            <span className={styles.fullstack}>{t("description3")}</span>{" "}
            {t("description4")}
          </p>
          <div className={styles.buttons}>
            <LinkedButton
              href="https://github.com/tomassorgetti"
              blank={true}
              stroked={true}
            >
              GitHub
            </LinkedButton>
            <LinkedButton href="/#contacto" blank={true} stroked={false}>
              Contactar
            </LinkedButton>
          </div>
        </div>
        <Image
          src="/images/hero.png"
          alt="tomas sorgetti looking to a side"
          width={"606"}
          height={606}
          priority
        />
      </section>
    </header>
  );
};

export default Hero;
