"use client";
import { useEffect, useState } from "react";
import ChatBot from "react-simple-chatbot";
import { ThemeProvider } from "styled-components";
import styles from "./Chatbot.module.css";
import { steps } from "./ChatbotSteps";

const theme = {
  background: "#080516",
  fontFamily: "Bai Jamjuree",
  headerBgColor: "#FE0072",
  headerFontColor: "#fff",
  headerFontSize: "15px",
  botBubbleColor: "#191432",
  botFontColor: "#ffff",
  userBubbleColor: "#2c273f",
  userFontColor: "#ffffff",
};

const ChatbotComponent = () => {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    const openChat = () => {
      setTimeout(() => {
        setIsOpen(true);
      }, 500);
    };
    openChat();
  }, []);

  return (
    <div>
      <button className={styles.button} onClick={() => setIsOpen(!isOpen)}>
        Chat
      </button>
      <ThemeProvider theme={theme}>
        <ChatBot
          className={`${styles.chatbot} ${isOpen ? styles.open : ""}`}
          steps={steps}
          headerTitle="Chatbot"
          hideUserAvatar={true}
          hideBotAvatar={true}
          recognitionEnable={true}
          recognitionLang="es-ES"
          placeholder="Escribe tu mensaje..."
          customDelay={100}
        />
      </ThemeProvider>
    </div>
  );
};

export default ChatbotComponent;
