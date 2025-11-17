import { createContext, useContext, useState, useEffect } from "react";

const ThemeContext = createContext();

export const themes = {
  light: {
    name: "Light",
    bg: "bg-gradient-to-br from-slate-50 via-white to-zinc-50",
    text: "text-slate-900",
    textSecondary: "text-slate-600",
    textTertiary: "text-slate-500",
    border: "border-slate-200",
    borderHover: "group-hover:border-slate-900",
    button:
      "bg-gradient-to-r from-slate-900 via-slate-800 to-zinc-900 text-white hover:from-slate-950 hover:to-zinc-950 shadow-lg shadow-slate-900/20",
    buttonOutline:
      "border-2 border-slate-900 hover:bg-gradient-to-r hover:from-slate-900 hover:to-zinc-900 hover:text-white hover:shadow-lg hover:shadow-slate-900/20",
    card: "bg-white/80 backdrop-blur-sm",
    cardHover:
      "group-hover:shadow-2xl group-hover:shadow-slate-900/10 group-hover:bg-white",
    accent: "bg-gradient-to-r from-slate-900 to-zinc-900",
    accentText: "text-slate-900",
    tag: "bg-white/80 backdrop-blur-sm border-2 border-slate-300 text-slate-700 group-hover:border-slate-900 group-hover:bg-gradient-to-r group-hover:from-slate-900 group-hover:to-zinc-900 group-hover:text-white group-hover:shadow-md",
    descriptionBg:
      "bg-gradient-to-br from-slate-100/80 via-zinc-100/80 to-slate-100/80 backdrop-blur-sm group-hover:from-slate-200/90 group-hover:via-zinc-200/90 group-hover:to-slate-200/90",
    numberBg: "text-slate-200/60 group-hover:text-slate-300/70",
    gradient: "bg-gradient-to-br from-slate-50 via-white to-zinc-50",
  },
  dark: {
    name: "Dark",
    bg: "bg-gradient-to-br from-gray-900 via-gray-800 to-black",
    text: "text-white",
    textSecondary: "text-gray-300",
    textTertiary: "text-gray-400",
    border: "border-gray-700",
    borderHover: "group-hover:border-purple-400",
    button:
      "bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700",
    buttonOutline:
      "border-purple-400 hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 hover:text-white hover:border-transparent",
    card: "bg-gradient-to-br from-gray-800 to-gray-900",
    cardHover: "group-hover:shadow-2xl group-hover:shadow-purple-500/20",
    accent: "bg-gradient-to-r from-purple-600 to-pink-600",
    accentText: "text-purple-400",
    tag: "bg-gray-800 border-gray-600 text-gray-300 group-hover:border-purple-400 group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-pink-600 group-hover:text-white",
    descriptionBg:
      "bg-gradient-to-br from-gray-700 to-gray-800 group-hover:from-purple-900/30 group-hover:to-pink-900/30",
    numberBg: "text-gray-700 group-hover:text-purple-900/50",
    gradient: "bg-gradient-to-br from-gray-900 via-purple-900/20 to-black",
  },
  breastCancer: {
    name: "Breast Cancer Awareness",
    bg: "bg-gradient-to-br from-pink-50 via-rose-50 to-pink-100",
    text: "text-gray-900",
    textSecondary: "text-gray-700",
    textTertiary: "text-pink-600",
    border: "border-pink-300",
    borderHover: "group-hover:border-pink-500",
    button:
      "bg-gradient-to-r from-pink-500 to-rose-500 text-white hover:from-pink-600 hover:to-rose-600",
    buttonOutline:
      "border-pink-500 hover:bg-gradient-to-r hover:from-pink-500 hover:to-rose-500 hover:text-white hover:border-transparent",
    card: "bg-white",
    cardHover: "group-hover:shadow-2xl group-hover:shadow-pink-300/50",
    accent: "bg-gradient-to-r from-pink-500 to-rose-500",
    accentText: "text-pink-500",
    tag: "bg-white border-pink-300 text-pink-700 group-hover:border-pink-500 group-hover:bg-gradient-to-r group-hover:from-pink-500 group-hover:to-rose-500 group-hover:text-white",
    descriptionBg:
      "bg-gradient-to-br from-pink-100 to-rose-100 group-hover:from-pink-200 group-hover:to-rose-200",
    numberBg: "text-pink-100 group-hover:text-pink-200",
    gradient: "bg-gradient-to-br from-pink-50 via-rose-100 to-pink-100",
  },
  autism: {
    name: "Autism Awareness",
    bg: "bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50",
    text: "text-gray-900",
    textSecondary: "text-gray-700",
    textTertiary: "text-blue-600",
    border: "border-blue-300",
    borderHover: "group-hover:border-indigo-500",
    button:
      "bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 text-white hover:from-blue-600 hover:via-indigo-600 hover:to-purple-600",
    buttonOutline:
      "border-blue-500 hover:bg-gradient-to-r hover:from-blue-500 hover:via-indigo-500 hover:to-purple-500 hover:text-white hover:border-transparent",
    card: "bg-white",
    cardHover: "group-hover:shadow-2xl group-hover:shadow-indigo-300/50",
    accent: "bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500",
    accentText: "text-blue-500",
    tag: "bg-white border-blue-300 text-blue-700 group-hover:border-indigo-500 group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:via-indigo-500 group-hover:to-purple-500 group-hover:text-white",
    descriptionBg:
      "bg-gradient-to-br from-blue-100 via-indigo-100 to-purple-100 group-hover:from-blue-200 group-hover:via-indigo-200 group-hover:to-purple-200",
    numberBg: "text-blue-100 group-hover:text-indigo-200",
    gradient: "bg-gradient-to-br from-blue-50 via-indigo-100 to-purple-100",
  },
  environmental: {
    name: "Environmental",
    bg: "bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50",
    text: "text-gray-900",
    textSecondary: "text-gray-700",
    textTertiary: "text-green-600",
    border: "border-green-300",
    borderHover: "group-hover:border-emerald-500",
    button:
      "bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 text-white hover:from-green-700 hover:via-emerald-700 hover:to-teal-700",
    buttonOutline:
      "border-green-600 hover:bg-gradient-to-r hover:from-green-600 hover:via-emerald-600 hover:to-teal-600 hover:text-white hover:border-transparent",
    card: "bg-white",
    cardHover: "group-hover:shadow-2xl group-hover:shadow-emerald-300/50",
    accent: "bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600",
    accentText: "text-green-600",
    tag: "bg-white border-green-300 text-green-700 group-hover:border-emerald-500 group-hover:bg-gradient-to-r group-hover:from-green-600 group-hover:via-emerald-600 group-hover:to-teal-600 group-hover:text-white",
    descriptionBg:
      "bg-gradient-to-br from-green-100 via-emerald-100 to-teal-100 group-hover:from-green-200 group-hover:via-emerald-200 group-hover:to-teal-200",
    numberBg: "text-green-100 group-hover:text-emerald-200",
    gradient: "bg-gradient-to-br from-green-50 via-emerald-100 to-teal-100",
  },
  noir: {
    name: "Noir",
    bg: "bg-gradient-to-br from-neutral-900 via-stone-900 to-zinc-950",
    text: "text-neutral-100",
    textSecondary: "text-neutral-300",
    textTertiary: "text-neutral-400",
    border: "border-neutral-700",
    borderHover: "group-hover:border-neutral-400",
    button:
      "bg-gradient-to-r from-neutral-100 via-stone-100 to-zinc-100 text-neutral-900 hover:from-white hover:to-neutral-50 shadow-lg shadow-neutral-100/10",
    buttonOutline:
      "border-2 border-neutral-300 hover:bg-gradient-to-r hover:from-neutral-100 hover:to-zinc-100 hover:text-neutral-900 hover:shadow-lg hover:shadow-neutral-100/10",
    card: "bg-gradient-to-br from-neutral-800/80 to-stone-900/80 backdrop-blur-sm",
    cardHover:
      "group-hover:shadow-2xl group-hover:shadow-neutral-100/5 group-hover:from-neutral-800 group-hover:to-stone-900",
    accent: "bg-gradient-to-r from-neutral-100 to-zinc-100",
    accentText: "text-neutral-100",
    tag: "bg-neutral-800/80 backdrop-blur-sm border-2 border-neutral-700 text-neutral-300 group-hover:border-neutral-400 group-hover:bg-gradient-to-r group-hover:from-neutral-100 group-hover:to-zinc-100 group-hover:text-neutral-900 group-hover:shadow-md",
    descriptionBg:
      "bg-gradient-to-br from-neutral-700/50 via-stone-800/50 to-zinc-800/50 backdrop-blur-sm group-hover:from-neutral-700/70 group-hover:via-stone-800/70 group-hover:to-zinc-800/70",
    numberBg: "text-neutral-800/60 group-hover:text-neutral-700/70",
    gradient: "bg-gradient-to-br from-neutral-900 via-stone-900 to-zinc-950",
  },
  gad: {
    name: "GAD Awareness",
    bg: "bg-gradient-to-br from-teal-50 via-cyan-50 to-sky-50",
    text: "text-gray-900",
    textSecondary: "text-gray-700",
    textTertiary: "text-teal-600",
    border: "border-teal-300",
    borderHover: "group-hover:border-cyan-500",
    button:
      "bg-gradient-to-r from-teal-500 via-cyan-500 to-sky-500 text-white hover:from-teal-600 hover:via-cyan-600 hover:to-sky-600",
    buttonOutline:
      "border-teal-500 hover:bg-gradient-to-r hover:from-teal-500 hover:via-cyan-500 hover:to-sky-500 hover:text-white hover:border-transparent",
    card: "bg-white",
    cardHover: "group-hover:shadow-2xl group-hover:shadow-cyan-300/50",
    accent: "bg-gradient-to-r from-teal-500 via-cyan-500 to-sky-500",
    accentText: "text-teal-500",
    tag: "bg-white border-teal-300 text-teal-700 group-hover:border-cyan-500 group-hover:bg-gradient-to-r group-hover:from-teal-500 group-hover:via-cyan-500 group-hover:to-sky-500 group-hover:text-white",
    descriptionBg:
      "bg-gradient-to-br from-teal-100 via-cyan-100 to-sky-100 group-hover:from-teal-200 group-hover:via-cyan-200 group-hover:to-sky-200",
    numberBg: "text-teal-100 group-hover:text-cyan-200",
    gradient: "bg-gradient-to-br from-teal-50 via-cyan-100 to-sky-100",
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
