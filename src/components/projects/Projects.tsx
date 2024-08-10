"use client";
import { getAllProjects } from "@/services/projectService";
import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "./Projects.module.css";
interface Project {
  id: number;
  name: string;
  description: JSX.Element;
  technologies: string[];
  image?: string;
  link: string;
}

const Projects = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  useEffect(() => {
    const getData = async (): Promise<void> => {
      setIsLoading(true);
      try {
        const projectList: Project[] = await getAllProjects();
        setProjects(projectList);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    getData();
  }, []);

  return (
    <section id="proyectos" className={styles.projects_container}>
      <h2>Projects</h2>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <ul className={styles.projects_list}>
          {projects.map((project: Project) => (
            <li className={styles.projects_list_item} key={project.id}>
              <a href={project.link} target="_blank">
                <Image
                  src={project.image}
                  alt="project image"
                  width={"445"}
                  height={270}
                />
                <div className={styles.projects_text_container}>
                  <div className={styles.projects_text}>
                    <h3>{project.name}</h3>
                    {project.description}
                  </div>
                  <ul className={styles.technologies_list}>
                    {project.technologies?.map((technology: string) => (
                      <li
                        className={styles.technologies_list_item}
                        key={technology}
                      >
                        {technology}
                      </li>
                    ))}
                  </ul>
                </div>
              </a>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default Projects;
