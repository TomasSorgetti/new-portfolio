import Image from "next/image";
import styles from "./CopySelected.module.scss";

interface Props {
  label: string;
  icon: string;
}
export default function CopySelected({ label, icon }: Props) {
  const handleClick = () => {
    navigator.clipboard.writeText(label);
    // toast.success("Copiado al portapapeles");
  };

  return (
    <div className={styles.copy_selected}>
      <div>
        <Image src={icon} alt="copy" width={32} height={32} />
        <span>{label}</span>
      </div>
      <button onClick={handleClick}>
        <Image src="/images/copy_icon.png" alt="copy" width={32} height={32} />
      </button>
    </div>
  );
}
