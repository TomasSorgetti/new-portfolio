"use client";
import { useState } from "react";
import styles from "./Hero.module.css";
import Image from "next/image";
const Hero = () => {
  const [active, setActive] = useState(false);

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
              href="#about"
            >
              Sobre mí
            </a>
          </li>
          <li>
            <a
              onClick={() => {
                setActive(false);
              }}
              href="#proyectos"
            >
              Proyectos
            </a>
          </li>
          <li>
            <a
              onClick={() => {
                setActive(false);
              }}
              href="#contacto"
            >
              Contacto
            </a>
          </li>
        </ul>
      </nav>
      <section>
        <span id="title_name">Tomás Sorgetti</span>
        <h1 id="title_job">
          Diseñador & <br /> Desarrollador{" "}
          <span className={styles.fullstack}>Full Stack</span>
        </h1>
        <Image
          src="/hero.png"
          alt="tomas sorgetti looking to a side"
          width={"606"}
          height={606}
          priority
        />
        <a className={styles.button} href="#contacto">
          Contactáme
        </a>
      </section>
    </header>
  );
};

export default Hero;
