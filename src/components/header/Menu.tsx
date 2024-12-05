import { NavLink } from "react-router-dom";
import { useUser } from "../../context/UserContext"; // Asegúrate de importar el contexto
import { User } from "../../context/UserContext"; // Importamos el tipo User si lo necesitas

function Menu() {
  // Usamos el contexto para acceder al estado del usuario y las funciones
  const { user, logIn, logOut } = useUser();

  // Ejemplo de datos de usuario que se podrían usar para loguearse
  const exampleUser: User = {
    id: 2,
    name: 'Ana Gómez',
    email: 'anagomez@example.com',
    loggedIn: true,
  };

  return (
    <nav className="flex flex-col md:flex-row md:space-x-4 md:space-y-0 p-4 ml-8 space-y-4">
      <NavLink
        className="hover:text-green-500 transition-transform duration-150 active:scale-110 active:text-green-500"
        to="/"
      >
        Home
      </NavLink>

      {/* Si el usuario está logueado, mostramos enlaces para Books, Profile y Logout */}
      {user ? (
        <>
          <NavLink
            className="hover:text-green-500 transition-transform duration-150 active:scale-110 active:text-green-500"
            to="/Books"
          >
            Books
          </NavLink>
          <NavLink
            className="hover:text-green-500 transition-transform duration-150 active:scale-110 active:text-black"
            to="/Profile"
          >
            Profile
          </NavLink>

          <button
            onClick={logOut} // Llamamos a logOut cuando se hace clic
            className="hover:text-green-500 transition-transform duration-150 active:scale-110 active:text-black"
          >
            Logout
          </button>
        </>
      ) : (
        <>
          <NavLink
            className="hover:text-green-500 transition-transform duration-150 active:scale-110 active:text-black"
            to="/login"
          >
            Login
          </NavLink>
          <NavLink
            className="hover:text-green-500 transition-transform duration-150 active:scale-110 active:text-black"
            to="/register"
          >
            Register
          </NavLink>

          <button
            onClick={() => logIn(exampleUser)} // Llamamos a logIn con el ejemplo de usuario
            className="hover:text-green-500 transition-transform duration-150 active:scale-110 active:text-black mt-4"
          >
            Iniciar sesión (Ejemplo)
          </button>
        </>
      )}
    </nav>
  );
}

export default Menu;
