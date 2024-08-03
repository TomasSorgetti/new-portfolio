"use client";

import { useEffect, useState } from "react";
import styles from "./Technologies.module.css";
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
  const [technologies, setTechnologies] = useState<Data[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchTechnologies = async (): Promise<void> => {
      try {
        const response: Data = await getAllTechnologies(); 
        console.log(response.technologies);        
        setTechnologies(response.technologies);
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
        <div className={styles.technologies_list_cont}>
          {technologyChunks.map((chunk, chunkIndex) => (
            <div key={chunkIndex} className={`${styles.technologies_list} ${styles[`technologies_list_${chunkIndex}`]}`}>
              <ul
              >
                {chunk.map((tech, index) => (
                  <li key={tech.id}>
                    <h3>{tech.name}</h3>
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
