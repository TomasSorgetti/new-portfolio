import Image from "next/image";
import styles from "./ProjectCard.module.scss";
import LinkedButton from "../linked_button/linkedButton";

interface Props {
  id: number;
  name: string;
  description: JSX.Element;
  image: string;
  link: string;
  github: string;
  technologies: string[];
}

export default function ProjectCard({
  name,
  description,
  image,
  link,
  github,
  technologies,
}: Props) {
  return (
    <div className={styles.project_card}>
      <Image src={image} alt={name} width={360} height={218} />
      <div className={styles.info}>
        <div>
          <h3>{name}</h3>
          {description}
        </div>

        <div className={styles.buttons}>
          <LinkedButton href={github} blank={true} stroked={true} small={true}>
            GitHub
          </LinkedButton>
          <LinkedButton href={link} blank={true} stroked={false} small={true}>
            Ver más
          </LinkedButton>
        </div>
      </div>
    </div>
  );
}
