import styles from "./About.module.css"
const About = () => {
  return (
    <section id="about" className={styles.container}>
      <div className={styles.title_container}>
        <h2>Sobre mí</h2>
        <span>Buenos Aires, Argentina</span>
      </div>
      <div className={styles.about_text_container}>
        <div className={styles.text_container}>
          <p>
            <strong className={styles.stronger}>
              Diseñador y Desarrollador FullStack
            </strong>{" "}
            con una formación técnica en electromecánica y{" "}
            <span className={styles.stronger}>experiencia como luthier</span> de
            instrumentos de cuerda.{" "}
          </p>
          <p>
            Mi interés por el{" "}
            <strong className={styles.stronger}>Desarrollo FrontEnd</strong> me
            llevó a completar varios cursos, centrándome en tecnologías como{" "}
            <strong className={styles.stronger}>HTML, CSS y JavaScript</strong>,
            para luego interesarme por el{" "}
            <strong className={styles.stronger}>Desarrollo FullStack</strong>{" "}
            con tecnologías como{" "}
            <strong className={styles.stronger}>React y Node.</strong>
          </p>
        </div>
        <ul>
          <li>
            {" "}
            <span className={`${styles.icon} ${styles.pc}`}></span>{" "}
            <span>Windows & aprendiendo Linux</span>
          </li>
          <li>
            <span className={`${styles.icon} ${styles.ide}`}></span>
            <span>VSCode & aprendiendo NVIM</span>
          </li>
          <li>
            <span className={`${styles.icon} ${styles.hobby}`}></span>
            <span>Cats, Music & VideoGames</span>
          </li>
          <li>
            <span className={`${styles.icon} ${styles.music}`}></span>
            <span>Rock, Jazz, Blues, Classical</span>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default About
