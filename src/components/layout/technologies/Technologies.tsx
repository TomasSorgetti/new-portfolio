"use client";
import { useEffect, useState } from "react";
import styles from "./Technologies.module.scss";
import { getAllTechnologies } from "@/services/technologiesService";

interface Technology {
  id: number;
  name: string;
  createdAt?: string;
  updatedAt?: string;
}

interface Data {
  error: boolean;
  message: string;
  technologies: Technology[];
}
const Technologies = () => {
  const [technologies, setTechnologies] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchTechnologies = async (): Promise<void> => {
      try {
        const response: string[] = await getAllTechnologies();
        setTechnologies(response);
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
      <p>
        Mi <strong>stack tecnológico</strong> se centra en{" "}
        <strong>React / Node</strong>, aunque me encanta aprender sobre otras
        tecnologías y estoy <strong>constantemente aprendiendo.</strong>
      </p>
      {isLoading ? (
        <p>Searching for technologies...</p>
      ) : (
        <div className={styles.technologies_list_cont}>
          {technologies.length > 0 &&
            technologyChunks.map((chunk, chunkIndex) => (
              <div
                key={chunkIndex}
                className={`${styles.technologies_list} ${
                  styles[`technologies_list_${chunkIndex}`]
                }`}
              >
                <ul>
                  {chunk.map((tech, index) => (
                    <li key={index}>
                      <h3>{tech}</h3>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
        </div>
      )}
    </section>
  );
};

export default Technologies;
