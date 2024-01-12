import "./App.css";
import Navbar from "./components/Navbar";
import { ThemeProvider } from "./context/ThemeContex";
import { useEffect, useState } from "react";
import HomePage from "./view/HomePage";
function App() {
  const [themeMode, setThemeMode] = useState("light");
  const darkTheme = () => {
    setThemeMode("dark");
  };
  const lightTheme = () => {
    setThemeMode("light");
  };
  useEffect(() => {
    document.querySelector("html").classList.remove("dark", "light");
    document.querySelector("html").classList.add(themeMode);
  }, [themeMode]);
  return (
    <>
      <ThemeProvider value={{ themeMode, darkTheme, lightTheme }}>
        <Navbar />
        <HomePage />
      </ThemeProvider>
    </>
  );
}

export default App;
