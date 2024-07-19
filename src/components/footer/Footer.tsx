import styles from "./Footer.module.css";
const Footer = () => {
  return (
    <footer className={styles.footer_cont}>
      <span id="footer_name">Tomas Sorgetti</span>
      <ul>
        <li className={`${styles.icon} ${styles.linkedin}`}>
          <a
            href="https://www.linkedin.com/in/tomas-sorgetti/"
            className={styles.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className={styles.srOnly}>LinkedIn</span>
          </a>
        </li>
        <li className={`${styles.icon} ${styles.behance}`}>
          <a
            className={styles.link}
            href="https://www.behance.net/tomassorgetti"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className={styles.srOnly}>GitHub</span>
          </a>
        </li>
        <li className={`${styles.icon} ${styles.github}`}>
          <a
            href="https://github.com/TomasSorgetti"
            className={styles.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className={styles.srOnly}>Behance</span>
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
