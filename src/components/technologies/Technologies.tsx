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

  return (
    <section id="technologies" className={styles.technologies_cont}>
      <h2>Tecnologías</h2>
      <ul>
        {technologies?.map((el) => (
          <li>
            <h3>{el}</h3>
          </li>
        ))}
      </ul>
      {/* <div
        className="py-10 inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)] w-[250px] mx-[calc((100%-250px)/2)] md:w-[750px] md:mx-[calc((100%-750px)/2)]"
      >
        <ul
          className="flex items-center justify-center md:justify-start xl:[&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll"
        >
          {
            technologies?.map((el) => (
              <li
                className="text-4xl text-white font-bold uppercase mx-2"
                style="text-shadow: 0px 3px 8px rgb(132, 57, 249)"
              >
                {el}
              </li>
            ))
          }
        </ul>
      </div> */}
    </section>
  );
};

export default Technologies;
