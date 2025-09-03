import { useEffect, useState } from "react";

const useDarkmode = (): [boolean, () => void] => {
  const localStorageChecker = (): boolean => {
    if (typeof window === "undefined" || !window.localStorage.theme)
      return true;
    return window.localStorage.theme === "dark";
  };

  const [darkMode, setDarkMode] = useState(localStorageChecker());

  const toggleDarkMode = () => {
    setDarkMode((prevState) => {
      const newState = !prevState;
      if (typeof window !== "undefined") {
        window.localStorage.theme = newState ? "dark" : "light";
      }
      return newState;
    });
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (
        window.localStorage.theme === "dark" ||
        !("theme" in window.localStorage)
      ) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    }
  }, [darkMode]);

  return [darkMode, toggleDarkMode];
};

export default useDarkmode;
