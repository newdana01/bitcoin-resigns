import { useEffect, useState } from "react";

const useDarkmode = (): [boolean, () => void] => {
  const localStorageChecker = (): boolean => {
    if (!localStorage.theme) return true;
    return localStorage.theme === "dark" ? true : false;
  };
  const [darkMode, setDarkMode] = useState(localStorageChecker());
  const toggleDarkMode = () => {
    setDarkMode((prevState) => {
      const newState = !prevState;
      if (newState) {
        localStorage.theme = "dark";
      } else {
        localStorage.theme = "light";
      }
      return newState;
    });
  };

  useEffect(() => {
    if (localStorage.theme === "dark" || !("theme" in localStorage)) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return [darkMode, toggleDarkMode];
};

export default useDarkmode;
