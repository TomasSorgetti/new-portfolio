import Image from "next/image";
import styles from "./About.module.css";
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
            <Image
              src="/images/pc.png"
              alt="pc logo"
              width={46}
              height={46}
              priority
            />
            <span>Windows & aprendiendo Linux</span>
          </li>
          <li>
            <Image
              src="/images/ide.png"
              alt="ide logo"
              width={46}
              height={46}
              priority
            />
            <span>VSCode & aprendiendo NVIM</span>
          </li>
          <li>
            <Image
              src="/images/hobby.png"
              alt="hobby logo"
              width={46}
              height={46}
              priority
            />
            <span>Cats, Music & VideoGames</span>
          </li>
          <li>
            <Image
              src="/images/music.png"
              alt="music logo"
              width={46}
              height={46}
              priority
            />
            <span>Rock, Jazz, Blues, Classical</span>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default About;
