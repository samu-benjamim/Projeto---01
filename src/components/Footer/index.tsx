import { Link } from "react-router";
import styles from "./styles.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <Link className={styles.info} to="/about">
        Descubra como funciona a técnica pomodoro.
      </Link>
      <p>Feito como objeto de pratica em React.js e Next.js</p>
      <a
        className={styles.infoLink}
        href="https://www.linkedin.com/in/dev-samuel-santos">
        Desenvolvido por Samuel Mendes
      </a>
      <p>PumusFocus &copy; {new Date().getFullYear()}</p>
    </footer>
  );
}
