"use client";

import { useEffect, useState } from "react";
import styles from "./Technologies.module.css";
import { getAllTechnologies } from "@/services/technologiesService";

const Technologies = () => {
  const [technologies, setTechnologies] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchTechnologies = async (): Promise<void> => {
      try {
        const data: string[] = await getAllTechnologies();
        setTechnologies(data);
      } catch (error) {
        console.error("Error fetching technologies:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchTechnologies();
  }, []);

  const chunkArray = (array: string[], size: number): string[][] => {
    const result: string[][] = [];
    for (let i = 0; i < array.length; i += size) {
      result.push(array.slice(i, i + size));
    }
    return result;
  };

  const technologyChunks = chunkArray(
    technologies,
    Math.ceil(technologies.length / 3)
  );

  return (
    <section id="technologies" className={styles.technologies_cont}>
      <h2>Tecnologías</h2>
      {isLoading ? (
        <p>Searching for technologies...</p>
      ) : (
        <div>
          {technologyChunks.map((chunk, chunkIndex) => (
            <ul
              key={chunkIndex}
              className={`${styles[`arr${chunkIndex + 1}`]}`}
            >
              {chunk.map((tech, index) => (
                <li key={tech} style={{ "--pos": index + 1 }}>
                  <h3>{tech}</h3>
                </li>
              ))}
            </ul>
          ))}
        </div>
      )}
    </section>
  );
};

export default Technologies;
