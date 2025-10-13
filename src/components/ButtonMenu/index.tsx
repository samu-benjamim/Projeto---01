import { useEffect, useState } from "react";
import { RouteLink } from "../RouterLink";
import {
  HistoryIcon,
  SettingsIcon,
  SunIcon,
  HouseIcon,
  MoonIcon,
} from "lucide-react";

import styles from "./styles.module.css";

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
      <RouteLink
        className={styles.button}
        href="/"
        aria-label="Ir para a Home"
        title="Ir para a Home">
        <HouseIcon />
      </RouteLink>
      <RouteLink
        className={styles.button}
        href="/history"
        aria-label="Ver Histórico"
        title="Ver Histórico">
        <HistoryIcon />
      </RouteLink>
      <RouteLink
        className={styles.button}
        href="/setting"
        aria-label="Configurações"
        title="Configurações">
        <SettingsIcon />
      </RouteLink>
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
