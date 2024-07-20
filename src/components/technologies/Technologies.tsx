import styles from "./Technologies.module.css";

const Technologies = () => {
  const technologies = [
    "figma",
    "photoshop",
    "html",
    "css",
    "javascript",
    "sass",
    "talwind",
    "react",
    "astro",
    "wordpress",
    "next.js",
    "node",
    "express",
    "sequelize",
    "postgres",
    "mysql",
  ];
  const tamaño = Math.ceil(technologies.length / 3);

  const array1 = technologies.slice(0, tamaño);
  const array2 = technologies.slice(tamaño, tamaño * 2);
  const array3 = technologies.slice(tamaño * 2);

  return (
    <section id="technologies" className={styles.technologies_cont}>
      <h2>Tecnologías</h2>
      <ul className={styles.arr1}>
        {array1?.map((el, index) => (
          <li key={el} style={{ "--pos": index + 1 }}>
            <h3>{el}</h3>
          </li>
        ))}
      </ul>
      <ul className={styles.arr2}>
        {array2?.map((el, index) => (
          <li key={el} style={{ "--pos": index + 1 }}>
            <h3>{el}</h3>
          </li>
        ))}
      </ul>
      <ul className={styles.arr3}>
        {array3?.map((el, index) => (
          <li key={el} style={{ "--pos": index + 1 }}>
            <h3>{el}</h3>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Technologies;
