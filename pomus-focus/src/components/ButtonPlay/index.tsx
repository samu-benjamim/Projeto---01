import styles from "./styles.module.css";

type DeaultPlayProps = {
  icon: React.ReactNode;
  color?: "green" | "red";
} & React.ComponentProps<"button">; // & é and adicionando mais tipagens ao type

export function ButtonPlay({
  icon,
  color = "green",
  ...rest
}: DeaultPlayProps) {
  return (
    <>
      <div className={styles.buttonDefault}>
        <button className={`${styles.buttonplay} ${styles[color]}`} {...rest}>
          {icon}
        </button>
      </div>
    </>
  );
}
