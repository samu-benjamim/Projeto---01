import styles from "./styles.module.css";
import { RouteLink } from "../RouterLink";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <RouteLink className={styles.info} href="/about">
        Descubra como funciona a técnica pomodoro.
      </RouteLink>
      <p>Feito como objeto de pratica em React.js e Next.js</p>
      <RouteLink
        className={styles.infoLink}
        href="https://www.linkedin.com/in/dev-samuel-santos">
        Desenvolvido por Samuel Mendes
      </RouteLink>
      <p>PumusFocus &copy; {new Date().getFullYear()}</p>
    </footer>
  );
}
