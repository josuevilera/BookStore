import { useState, createContext, ReactNode } from "react";

type DarkModeContextType = {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
};

// Crear el contexto
const DarkModeContext = createContext<DarkModeContextType | null>(null);

// Crear el proveedor
type DarkModeProviderProps = {
  children: ReactNode;
};

function DarkModeProvider({ children }: DarkModeProviderProps) {
  const [isDarkMode, setIsDarkMode] = useState(false);

  function toggleDarkMode() {
    setIsDarkMode((prevMode) => !prevMode);
  }

  const valueToSend = {
    isDarkMode,
    toggleDarkMode,
  };

  return (
    <DarkModeContext.Provider value={valueToSend}>
      {children}
    </DarkModeContext.Provider>
  );
}

export { DarkModeProvider, DarkModeContext };
