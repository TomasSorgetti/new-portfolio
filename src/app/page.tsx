"use client";

import Technologies from "@/components/technologies/Technologies";
import styles from "./page.module.css";
import About from "@/components/about/About";
import Contact from "@/components/contact/Contact";
import Projects from "@/components/projects/Projects";

export default function Home() {
  return (
    <main className={styles.main} onContextMenu={(e) => e.preventDefault()}>
      <About />
      <Projects />
      <Technologies />
      <Contact />
    </main>
  );
}
