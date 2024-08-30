"use client";

import styles from "./page.module.scss";
import Technologies from "../../components/layout/technologies/Technologies";
import About from "../../components/layout/about/About";
import Contact from "../../components/layout/contact/Contact";
import Projects from "../../components/layout/projects/Projects";
import Hero from "@/components/layout/hero/Hero";
// import ChatbotComponent from "@/components/chatbot/Chatbot";

export default function Home() {
  return (
    <main className={styles.main} onContextMenu={(e) => e.preventDefault()}>
      {/* <ChatbotComponent /> */}
      <Hero />
      <Projects />
      <About />
      <Technologies />
      <Contact />
    </main>
  );
}
