import React, { useEffect } from "react";

type ThemeButtonProps = {
  theme: string;
  setTheme: (theme: string) => void;
  position?: string; // optional if applicable
};

const ThemeButton = ({ theme, setTheme, position }: ThemeButtonProps) => {
  // useEffect(() => {
  //   const prefersDarkMode = window.matchMedia(
  //     "(prefers-color-scheme:dark)"
  //   ).matches;
  //   setTheme(theme || prefersDarkMode ? "light" : "dark");
  // }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <>
      <button
        className={`border border-input rounded-full p-2 hover:bg-muted/80 ${
          theme === "dark" ? "dark:text-white" : ""
        } ${position}`}
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      >
        {theme === "dark" ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="size-4 sm:size-5 dark:block"
          >
            <circle cx="12" cy="12" r="4"></circle>
            <path d="M12 2v2"></path>
            <path d="M12 20v2"></path>
            <path d="m4.93 4.93 1.41 1.41"></path>
            <path d="m17.66 17.66 1.41 1.41"></path>
            <path d="M2 12h2"></path>
            <path d="M20 12h2"></path>
            <path d="m6.34 17.66-1.41 1.41"></path>
            <path d="m19.07 4.93-1.41 1.41"></path>
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lhidden size-4 sm:size-5 dark:hidden"
          >
            <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
          </svg>
        )}
      </button>
    </>
  );
};

export default ThemeButton;
