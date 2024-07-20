"use client";

import Technologies from "@/components/technologies/Technologies";
import styles from "./page.module.css";
import About from "@/components/about/About";
import Contact from "@/components/contact/Contact";

export default function Home() {
  return (
    <main className={styles.main}>
      <About />
      <Technologies />
      <Contact />
    </main>
  );
}
