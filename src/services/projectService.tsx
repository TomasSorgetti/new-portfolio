import learningspark from "../assets/learningspark.png";
import smalltribes from "../assets/smalltribesshop.png";
import backend from "../assets/backend.png";
interface Project {
  id: number;
  name: string;
  description: JSX.Element;
  technologies: string[];
  image?: string;
  link: string;
}

export const getAllProjects = async (): Promise<Project[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(projectMocks);
    }, 600);
  });
};

const projectMocks = [
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
    link: "#",
    technologies: ["react", "tailwind"],
    image: learningspark,
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
    link: "#",
    technologies: ["wordpress", "woocommerce"],
    image: smalltribes,
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
    link: "#",
    technologies: ["node", "express", "sequelize", "postgres"],
    image: backend,
  },
];
