import styles from "./linkedButton.module.scss";

export default function LinkedButton({
  href,
  stroked,
  blank,
  children,
}: {
  href: string;
  blank: boolean;
  stroked: boolean;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target={blank ? "_blank" : "_self"}
      className={`${
        stroked ? styles.linked_button_stroked : styles.linked_button
      }`}
    >
      {children}
    </a>
  );
}
