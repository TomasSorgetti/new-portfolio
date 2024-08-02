interface Project {
  id: number;
  name: string;
  description: JSX.Element;
  technologies: string[];
  image: string;
  link: string;
}

export const getAllProjects = async (): Promise<Project[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(projectMocks);
    }, 1000);
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
    image:
      "https://png.pngtree.com/thumb_back/fh260/background/20230611/pngtree-wolf-animals-images-wallpaper-for-pc-384x480-image_2916211.jpg",
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
    image:
      "https://png.pngtree.com/thumb_back/fh260/background/20230611/pngtree-wolf-animals-images-wallpaper-for-pc-384x480-image_2916211.jpg",
  },
  {
    id: 3,
    name: "Backend con Node",
    description: (
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem maxime
        molestiae placeat deserunt omnis suscipit eos illo, nostrum tempora est
        aperiam ipsum fugit fuga nisi itaque cupiditate rem nihil quia.
      </p>
    ),
    link: "#",
    technologies: ["node", "express", "sequelize", "postgres"],
    image:
      "https://png.pngtree.com/thumb_back/fh260/background/20230611/pngtree-wolf-animals-images-wallpaper-for-pc-384x480-image_2916211.jpg",
  },
];
