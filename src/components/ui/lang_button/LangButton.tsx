import { Children } from "react";
import styles from "./LangButton.module.scss";

export default function LangButton({
  children,
  lang,
  active,
  handleChangeLang,
}: {
  children: React.ReactNode;
  lang: string;
  active: boolean;
  handleChangeLang: (lang: string) => void;
}) {
  return (
    <button
      className={`${styles.lang_button} ${active ? styles.active : ""}`}
      onClick={() => handleChangeLang(lang)}
    >
      {children}
    </button>
  );
}
