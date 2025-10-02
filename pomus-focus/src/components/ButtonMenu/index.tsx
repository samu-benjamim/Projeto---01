import styles from "./styles.module.css";
import { HistoryIcon, SettingsIcon, SunIcon, HouseIcon } from "lucide-react";

export function ButtonMenu() {
  return (
    <nav className={styles.navegation}>
      <a className={styles.button} href="#">
        <HouseIcon />
      </a>
      <a className={styles.button} href="#">
        <HistoryIcon />
      </a>
      <a className={styles.button} href="#">
        <SettingsIcon />
      </a>
      <a className={styles.button} href="#">
        <SunIcon />
      </a>
    </nav>
  );
}
