import { useEffect, useState } from "react";
import styles from "./styles.module.css";
import { HistoryIcon, SettingsIcon, SunIcon, HouseIcon } from "lucide-react";

type AvailableThemes = "dark" | "light";

export function ButtonMenu() {
  const [theme, setTheme] = useState<AvailableThemes>("dark");

  function handleModifyTheme(
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) {
    event.preventDefault(); //  não acessa o link
    if (theme == "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  }

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <nav className={styles.navegation}>
      <a
        className={styles.button}
        href="#"
        aria-label="Ir para a Home"
        title="Ir para a Home">
        <HouseIcon />
      </a>
      <a
        className={styles.button}
        href="#"
        aria-label="Ver Histórico"
        title="Ver Histórico">
        <HistoryIcon />
      </a>
      <a
        className={styles.button}
        href="#"
        aria-label="Configurações"
        title="Configurações">
        <SettingsIcon />
      </a>
      <a
        className={styles.button}
        href=""
        aria-label="Mudar Tema"
        title="Mudar Tema"
        onClick={handleModifyTheme}>
        <SunIcon />
      </a>
    </nav>
  );
}
