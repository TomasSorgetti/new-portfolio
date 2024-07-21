"use client";
import { getAllProjects } from "@/services/projectService";
import Image from "next/image";
import { useEffect, useState } from "react";

interface Project {
  id: number;
  name: string;
  description: string;
  image: string;
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
    <div>
      <h2>Projects</h2>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {projects.map((project: Project) => (
            <li key={project.id}>
              <h3>{project.name}</h3>
              <p>{project.description}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Projects;
