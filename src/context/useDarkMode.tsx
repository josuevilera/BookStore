// Hook personalizado para simplificar el acceso al contexto
import { useContext } from "react";
import { DarkModeContext } from "./DarkModeProvider";
export const useDarkMode = () => {
  const context = useContext(DarkModeContext);
  if (!context) {
    throw new Error("useDarkMode debe usarse dentro de un DarkModeProvider");
  }
  return context;
};
