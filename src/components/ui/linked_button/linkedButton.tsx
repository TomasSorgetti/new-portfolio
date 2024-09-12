import styles from "./linkedButton.module.scss";

export default function LinkedButton({
  href,
  stroked,
  blank,
  children,
  small,
  medium,
  large,
  download,
}: {
  href: string;
  blank: boolean;
  stroked: boolean;
  children: React.ReactNode;
  small?: boolean;
  medium?: boolean;
  large?: boolean;
  download?: boolean;
}) {
  return (
    <a
      href={href}
      target={blank ? "_blank" : "_self"}
      className={`${
        stroked ? styles.linked_button_stroked : styles.linked_button
      }`}
      style={{
        fontSize: small
          ? "1.2rem"
          : medium
          ? "1.4rem"
          : large
          ? "1.6rem"
          : "1.25rem",
      }}
      download={download ? "" : undefined}
    >
      {children}
    </a>
  );
}
