import { createContext, useContext } from 'react';

// Definir el tipo de datos del usuario
export interface User {
  id: number;
  name: string;
  email: string;
  loggedIn: boolean;
}

// Crear el contexto con un valor por defecto (inicialmente null)
export const UserContext = createContext<{
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
  logIn: (userData: User) => void;
  logOut: () => void;
} | null>(null);

// Crear un hook personalizado para usar el contexto
export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser debe ser utilizado dentro de un UserProvider');
  }
  return context;
};

