"use client";
import { useEffect, useState } from "react";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";
import Navbar from "./components/Navbar.jsx";
import Projects from "./components/Projects.jsx";
import Services from "./components/Services.jsx";
import { document } from "postcss";

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefer-color-scheme: dark)".match))
    ) {
      setIsDarkMode(true);
    } else {
      setIsDarkMode(false);
    }
  }, []);

  useEffect(() => {
    if (typeof window !== undefined) {
      const root = window.document.documentElement;
      if (isDarkMode) {
        root.classList.add("dark");
        localStorage.theme = "dark";
      } else {
        root.classList.remove("dark");
        localStorage.theme = "";
      }
    }
  }, [isDarkMode]);

  // function darkMode() {
  //   const root = window.document.documentElement;
  //   root.classList.toggle("dark");
  //   console.log("csl:" + typeof window);
  // }

  // darkMode();

  return (
    <>
      <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      <Header isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      <About isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      {/* <Services isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} /> */}
      <Projects isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      <Contact isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      <Footer isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
    </>
  );
}
