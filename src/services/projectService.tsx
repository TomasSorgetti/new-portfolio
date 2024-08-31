import learningspark from "images/learningspark.png";
import smalltribes from "images/smalltribesshop.png";
import backend from "images/backend.png";
interface Project {
  id: number;
  name: string;
  description: JSX.Element;
  technologies: string[];
  image?: any;
  link: string;
}

export const getAllProjects = async (): Promise<Project[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(projectMocks);
    }, 600);
  });
};

export const projectMocks = [
  {
    id: 1,
    name: "Learning Spark",
    description: (
      <p>
        Learning spark comenzó siendo una <strong>Landing Page</strong>, pero al
        tener intenciones de escalar, decidí utilizar <strong>React</strong>{" "}
        para desarrollarla. Trabajé a la par de una <strong>Diseñadora</strong>{" "}
        para desarrollar el sitio <strong>completamente responsive.</strong>
      </p>
    ),
    link: "https://www.learning-spark.com",
    github: "https://www.github.com/TomasSorgetti",
    technologies: ["react", "tailwind"],
    image: "/images/learningspark.png",
  },
  {
    id: 2,
    name: "Small Tribes Shop",
    description: (
      <p>
        Small Tribes Shop es un <strong>ecommerce</strong> desarrollado en{" "}
        <strong>wordpress y woocommerce</strong> en el que colaboré, el cual
        pretende ofrecer <strong>productos digitales</strong> para un juego
        online llamado ARK.
      </p>
    ),
    link: "https://www.smalltribesshop.com",
    github: "https://www.github.com/TomasSorgetti",
    technologies: ["wordpress", "woocommerce"],
    image: "/images/smalltribesshop.png",
  },
  {
    id: 3,
    name: "Backend con Node",
    description: (
      <p>
        API REST con node, donde se aplicó jwt para la{" "}
        <strong>autenticación</strong>, manejo de errores, validaciones,{" "}
        <strong>carga de imágenes y envio de mails</strong>.
      </p>
    ),
    link: "https://github.com/TomasSorgetti?tab=repositories",
    github: "https://www.github.com/TomasSorgetti",
    technologies: ["node", "express", "sequelize", "postgres"],
    image: "/images/backend.png",
  },
];
