import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  const technologies = [
  "html",
  "css",
  "tailwind",
  "javascript",
  "react",
  "redux",
  "node",
  "express",
  "sequelize",
];
  return (
    <main className={styles.main}>
      <div
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
      </div>
    </main>
  );
}
