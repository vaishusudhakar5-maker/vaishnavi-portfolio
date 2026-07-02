import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

const ThemeContext = createContext();

export function ThemeProvider({ children }) {

  const [dark, setDark] = useState(() => {

    const savedTheme = localStorage.getItem("theme");

    if (savedTheme !== null) {
      return savedTheme === "dark";
    }

    return window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

  });

  useEffect(() => {

    if (dark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }

  }, [dark]);

  return (
    <ThemeContext.Provider
      value={{
        dark,
        setDark,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );

}

export function useTheme() {
  return useContext(ThemeContext);
}