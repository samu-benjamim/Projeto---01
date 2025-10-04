import styles from "./styles.module.css";
import Logotipo from "../../assets/POMUSFOCUS-LOGO.png";

export function Logo() {
  return (
    <div className={styles.logo}>
      <a href="#" aria-label="Logo PomusFocus" title="Logo PomusFocu">
        <img className={styles.logotipo} src={Logotipo} alt="" />
      </a>
    </div>
  );
}
