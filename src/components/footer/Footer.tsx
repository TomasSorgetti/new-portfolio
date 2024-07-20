import styles from "./Footer.module.css";
import { TbBrandGithub } from "react-icons/tb";
import { RiLinkedinBoxLine } from "react-icons/ri";
import { FaBehance } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className={styles.footer_cont}>
      <span id="footer_name">Tomas Sorgetti</span>
      <ul>
        <li className={`${styles.icon}`}>
          <a
            href="https://www.linkedin.com/in/tomas-sorgetti/"
            className={styles.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <RiLinkedinBoxLine />
          </a>
        </li>
        <li className={`${styles.icon}`}>
          <a
            className={styles.link}
            href="https://www.behance.net/tomassorgetti"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaBehance />
          </a>
        </li>
        <li className={`${styles.icon}`}>
          <a
            href="https://github.com/TomasSorgetti"
            className={styles.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <TbBrandGithub />
          </a>
        </li>
      </ul>

      <nav>
        <ul>
          <li>
            <a href="#about">Sobre mi</a>
          </li>
          <li>
            <a href="#proyectos">Proyectos</a>
          </li>
          <li>
            <a href="#contacto">Contacto</a>
          </li>
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;
