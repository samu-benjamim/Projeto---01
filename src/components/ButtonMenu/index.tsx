import { useEffect, useState } from "react";
import styles from "./styles.module.css";
import {
  HistoryIcon,
  SettingsIcon,
  SunIcon,
  HouseIcon,
  MoonIcon,
} from "lucide-react";
import { Link } from "react-router";

type AvailableThemes = "dark" | "light";

export function ButtonMenu() {
  const [theme, setTheme] = useState<AvailableThemes>(() => {
    const storageTheme =
      (localStorage.getItem("theme") as AvailableThemes) || "dark";
    return storageTheme;
  });

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
    localStorage.setItem("theme", theme);
  }, [theme]);

  const iconTheme = {
    dark: <SunIcon />,
    light: <MoonIcon />,
  };

  return (
    <nav className={styles.navegation}>
      <Link
        className={styles.button}
        to="/"
        aria-label="Ir para a Home"
        title="Ir para a Home">
        <HouseIcon />
      </Link>
      <a
        className={styles.button}
        href="#"
        aria-label="Ver Histórico"
        title="Ver Histórico">
        <HistoryIcon />
      </a>
      <Link
        className={styles.button}
        to="/setting"
        aria-label="Configurações"
        title="Configurações">
        <SettingsIcon />
      </Link>
      <a
        className={styles.button}
        href=""
        aria-label="Mudar Tema"
        title="Mudar Tema"
        onClick={handleModifyTheme}>
        {iconTheme[theme]}
      </a>
    </nav>
  );
}
