import { Navigate } from "react-router-dom";
import { useUser } from "../context/UserContext";
import Bookspagenew from "../components/main/bookspagenew/Bookspagenew";

function Books() {
  const { user } = useUser();  // Accedemos al contexto del usuario

  // Si el usuario no está autenticado, redirigimos a la página de login
  if (!user?.loggedIn) {
    return <Navigate to="/login" />;
  }

  return (
    <>
      <div className="min-h-screen bg-gradient-to-l from-indigo-100 via-pink-100 to-yellow-100 flex flex-col items-center">
        <h2 className="text-xl font-bold text-center pt-10">Libros</h2>
        <Bookspagenew />
      </div>
    </>
  );
}

export default Books;
