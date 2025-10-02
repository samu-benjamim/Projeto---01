import styles from "./styles.module.css";
import Logotipo from "../../assets/POMUSFOCUS-LOGO.png";

export function Logo() {
  return (
    <div className={styles.logo}>
      <a href="#">
        <img className={styles.logotipo} src={Logotipo} alt="" />
      </a>
    </div>
  );
}
