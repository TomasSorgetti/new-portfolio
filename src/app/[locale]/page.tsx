
import styles from "./page.module.scss";
import Technologies from "../../components/layout/technologies/Technologies";
import About from "../../components/layout/about/About";
import Contact from "../../components/layout/contact/Contact";
import Projects from "../../components/layout/projects/Projects";
import Hero from "@/components/layout/hero/Hero";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.wrapper}>
        <Hero />
        <Projects />
        <About />
        <Technologies />
        <Contact />
      </div>
    </main>
  );
}
