import { useEffect, useState } from "react";
import "../styles/theme.css";

const themes = ["dark", "orange", "green", "blue"];

function ThemeToggle() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");

  useEffect(() => {
    document.body.className = "";
    document.body.classList.add(`theme-${theme}`);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const nextTheme = () => {
    const index = themes.indexOf(theme);
    setTheme(themes[(index + 1) % themes.length]);
  };

  return (
    <button className="theme-toggle" onClick={nextTheme}>
      {theme === "dark" && "🌙"}
      {theme === "orange" && "🍊"}
      {theme === "green" && "🍏"}
      {theme === "blue" && "💙"}
    </button>
  );
}

export default ThemeToggle;
