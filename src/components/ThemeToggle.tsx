"use client";

import { Monitor, Moon, Sun } from "lucide-react";

import { useTheme } from "@src/context/ThemeContext";

import styles from "./ThemeToggle.module.css";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  const getIcon = () => {
    switch (theme) {
      case "light":
        return <Moon size={20} />;
      case "dark":
        return <Sun size={20} />;
      default:
        return <Monitor size={20} />;
    }
  };

  return (
    <button
      className={styles.toggleButton}
      onClick={toggleTheme}
      aria-label="Toggle theme"
    >
      {getIcon()}
    </button>
  );
}
