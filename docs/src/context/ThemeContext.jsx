import { createContext, useContext, useState, useEffect } from "react";

const ThemeContext = createContext();

export const themes = {
  light: {
    name: "Light",
    bg: "bg-white",
    text: "text-gray-900",
    textSecondary: "text-gray-600",
    textTertiary: "text-gray-500",
    border: "border-gray-200",
    borderHover: "group-hover:border-black",
    button: "bg-black text-white hover:bg-gray-900",
    buttonOutline: "border-black hover:bg-black hover:text-white",
    card: "bg-white",
    cardHover: "group-hover:shadow-2xl",
    accent: "bg-black",
    accentText: "text-black",
    tag: "bg-white border-gray-300 text-gray-700 group-hover:border-black group-hover:bg-black group-hover:text-white",
    descriptionBg: "bg-gray-50 group-hover:bg-gray-100",
    numberBg: "text-gray-200 group-hover:text-gray-300",
  },
  dark: {
    name: "Dark",
    bg: "bg-gray-900",
    text: "text-white",
    textSecondary: "text-gray-300",
    textTertiary: "text-gray-400",
    border: "border-gray-700",
    borderHover: "group-hover:border-white",
    button: "bg-white text-black hover:bg-gray-200",
    buttonOutline: "border-white hover:bg-white hover:text-black",
    card: "bg-gray-800",
    cardHover: "group-hover:shadow-2xl group-hover:shadow-white/10",
    accent: "bg-white",
    accentText: "text-white",
    tag: "bg-gray-800 border-gray-600 text-gray-300 group-hover:border-white group-hover:bg-white group-hover:text-black",
    descriptionBg: "bg-gray-700 group-hover:bg-gray-600",
    numberBg: "text-gray-700 group-hover:text-gray-600",
  },
  breastCancer: {
    name: "Breast Cancer Awareness",
    bg: "bg-pink-50",
    text: "text-gray-900",
    textSecondary: "text-gray-700",
    textTertiary: "text-pink-600",
    border: "border-pink-200",
    borderHover: "group-hover:border-pink-500",
    button: "bg-pink-500 text-white hover:bg-pink-600",
    buttonOutline: "border-pink-500 hover:bg-pink-500 hover:text-white",
    card: "bg-white",
    cardHover: "group-hover:shadow-2xl group-hover:shadow-pink-200",
    accent: "bg-pink-500",
    accentText: "text-pink-500",
    tag: "bg-white border-pink-300 text-pink-700 group-hover:border-pink-500 group-hover:bg-pink-500 group-hover:text-white",
    descriptionBg: "bg-pink-100 group-hover:bg-pink-200",
    numberBg: "text-pink-100 group-hover:text-pink-200",
  },
  autism: {
    name: "Autism Awareness",
    bg: "bg-blue-50",
    text: "text-gray-900",
    textSecondary: "text-gray-700",
    textTertiary: "text-blue-600",
    border: "border-blue-200",
    borderHover: "group-hover:border-blue-500",
    button: "bg-blue-500 text-white hover:bg-blue-600",
    buttonOutline: "border-blue-500 hover:bg-blue-500 hover:text-white",
    card: "bg-white",
    cardHover: "group-hover:shadow-2xl group-hover:shadow-blue-200",
    accent: "bg-blue-500",
    accentText: "text-blue-500",
    tag: "bg-white border-blue-300 text-blue-700 group-hover:border-blue-500 group-hover:bg-blue-500 group-hover:text-white",
    descriptionBg: "bg-blue-100 group-hover:bg-blue-200",
    numberBg: "text-blue-100 group-hover:text-blue-200",
  },
  environmental: {
    name: "Environmental",
    bg: "bg-green-50",
    text: "text-gray-900",
    textSecondary: "text-gray-700",
    textTertiary: "text-green-600",
    border: "border-green-200",
    borderHover: "group-hover:border-green-600",
    button: "bg-green-600 text-white hover:bg-green-700",
    buttonOutline: "border-green-600 hover:bg-green-600 hover:text-white",
    card: "bg-white",
    cardHover: "group-hover:shadow-2xl group-hover:shadow-green-200",
    accent: "bg-green-600",
    accentText: "text-green-600",
    tag: "bg-white border-green-300 text-green-700 group-hover:border-green-600 group-hover:bg-green-600 group-hover:text-white",
    descriptionBg: "bg-green-100 group-hover:bg-green-200",
    numberBg: "text-green-100 group-hover:text-green-200",
  },
  gad: {
    name: "GAD Awareness",
    bg: "bg-teal-50",
    text: "text-gray-900",
    textSecondary: "text-gray-700",
    textTertiary: "text-teal-600",
    border: "border-teal-200",
    borderHover: "group-hover:border-teal-500",
    button: "bg-teal-500 text-white hover:bg-teal-600",
    buttonOutline: "border-teal-500 hover:bg-teal-500 hover:text-white",
    card: "bg-white",
    cardHover: "group-hover:shadow-2xl group-hover:shadow-teal-200",
    accent: "bg-teal-500",
    accentText: "text-teal-500",
    tag: "bg-white border-teal-300 text-teal-700 group-hover:border-teal-500 group-hover:bg-teal-500 group-hover:text-white",
    descriptionBg: "bg-teal-100 group-hover:bg-teal-200",
    numberBg: "text-teal-100 group-hover:text-teal-200",
  },
};

export const ThemeProvider = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setCurrentTheme(savedTheme);
  }, []);

  const changeTheme = (themeName) => {
    setCurrentTheme(themeName);
    localStorage.setItem("theme", themeName);
  };

  return (
    <ThemeContext.Provider
      value={{ currentTheme, changeTheme, theme: themes[currentTheme] }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within ThemeProvider");
  }
  return context;
};
