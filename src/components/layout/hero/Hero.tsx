"use client";

import styles from "./Hero.module.scss";
import Image from "next/image";
import { useTranslations } from "next-intl";
import LinkedButton from "@/components/ui/linked_button/linkedButton";

const Hero = () => {
  const t = useTranslations("Hero");

  return (
    <section className={styles.banner}>
      <div>
        <h1 className={styles.title} id="title_job">
          {t("title")}{" "}
          <strong className={styles.fullstack}>{t("title_strong")}</strong>
        </h1>
        <p>
          <strong className={styles.fullstack}>{t("description1")}</strong>{" "}
          {t("description2")}{" "}
          <strong className={styles.fullstack}>{t("description3")}</strong>{" "}
          {t("description4")}
        </p>
        <div className={styles.buttons}>
          <LinkedButton
            href="https://github.com/tomassorgetti"
            blank={true}
            stroked={true}
            medium={true}
          >
            GitHub
          </LinkedButton>
          <LinkedButton
            href="#contacto"
            blank={false}
            stroked={false}
            medium={true}
          >
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
  );
};

export default Hero;
