import styles from "./styles.module.css";
import { RouteLink } from "../RouterLink";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <p>
        Obs.: Atualizar ou fechar a página durante a atividade fará com que ela
        seja marcada como abandonada.
      </p>
      <RouteLink className={styles.info} href="/about">
        Descubra como funciona o Método Pomodoro.
      </RouteLink>
      <p>Feito como projeto de prática em React.js</p>
      <RouteLink
        className={styles.infoLink}
        href="https://www.linkedin.com/in/dev-samuel-santos"
        target="_blank">
        Desenvolvido por Samuel Mendes
      </RouteLink>
      <p>PomusFocus &copy; {new Date().getFullYear()}</p>
    </footer>
  );
}
