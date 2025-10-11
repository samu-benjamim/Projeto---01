import styles from "./styles.module.css";
import Logotipo from "../../assets/POMUSFOCUS-LOGO.png";
import { RouteLink } from "../RouterLink";

export function Logo() {
  return (
    <div className={styles.logo}>
      <RouteLink href="/" aria-label="Logo PomusFocus" title="Logo PomusFocu">
        <img className={styles.logotipo} src={Logotipo} alt="" />
      </RouteLink>
    </div>
  );
}
