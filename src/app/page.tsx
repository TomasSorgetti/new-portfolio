"use client";

import styles from "./page.module.css";
import Technologies from "@/components/technologies/Technologies";
import About from "@/components/about/About";
import Contact from "@/components/contact/Contact";
import Projects from "@/components/projects/Projects";
// import ChatbotComponent from "@/components/chatbot/Chatbot";

export default function Home() {
  return (
    <main className={styles.main} onContextMenu={(e) => e.preventDefault()}>
      {/* <ChatbotComponent /> */}
      <About />
      <Projects />
      <Technologies />
      <Contact />
    </main>
  );
}
