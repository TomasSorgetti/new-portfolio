"use client";
import { projectMocks } from "@/services/projectService";
import styles from "./Projects.module.scss";
import ProjectCard from "@/components/ui/project_card/ProjectCard";
import LinkedButton from "@/components/ui/linked_button/linkedButton";
interface Project {
  id: number;
  name: string;
  description: JSX.Element;
  image: string;
  link: string;
  github: string;
  technologies: string[];
}

const Projects = () => {
  return (
    <section id="proyectos" className={styles.projects_container}>
      <div className={styles.title_cont}>
        <h2>Projects</h2>
        <p>
          Estos son algunos de <strong>mis proyectos</strong>, para ver más
          puedes visitar mi
          <strong>GitHub.</strong>
        </p>
      </div>
      <div className={styles.projects_list_container}>
        {projectMocks.map((project: Project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
      <div>
        <LinkedButton
          href="https://github.com/TomasSorgetti"
          stroked={true}
          medium={true}
          blank={true}
        >
          GitHub
        </LinkedButton>
      </div>
    </section>
  );
};

export default Projects;
