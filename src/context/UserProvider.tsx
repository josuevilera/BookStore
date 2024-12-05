import React, { ReactNode, useState } from 'react';
import { UserContext, User } from './UserContext';  // Asegúrate de importar correctamente

interface UserProviderProps {
  children: ReactNode;
}

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  // Recuperamos el usuario desde localStorage al iniciar
  const savedUser = localStorage.getItem('user');
  const parsedUser = savedUser ? JSON.parse(savedUser) : null;

  // Estado que almacena la información del usuario
  const [user, setUser] = useState<User | null>(parsedUser);

  // Función logIn
  const logIn = (userData: User) => {
    setUser(userData); // Establecemos el usuario en el estado
    localStorage.setItem('user', JSON.stringify(userData)); // Guardamos el usuario en localStorage
  };

  // Función logOut
  const logOut = () => {
    setUser(null); // Limpiamos el estado de usuario
    localStorage.removeItem('user'); // Eliminamos el usuario de localStorage
  };

  return (
    <UserContext.Provider value={{ user, setUser, logIn, logOut }}>
      {children}
    </UserContext.Provider>
  );
};
