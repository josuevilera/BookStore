import { FaRegGrin } from "react-icons/fa"; // Iconos decorativos
import { toast } from "react-toastify"; // Notificaciones de bienvenida
import "react-toastify/dist/ReactToastify.css"; // Estilos de las notificaciones
import { useEffect } from "react"; // Para ejecutar algo cuando se cargue el componente
import { useUser } from "../context/UserContext";
import { useDarkMode } from "../../src/context/useDarkMode"; // Hook para el modo oscuro

// Componente Home
function Home() {
  // Usamos el contexto para obtener el usuario
  const { user } = useUser();
  const { isDarkMode } = useDarkMode(); // Obtenemos el estado del modo oscuro

  // Mostrar notificación de saludo solo una vez cuando la página cargue
  useEffect(() => {
    if (user) {
      toast.success(`¡Hola ${user.name}! ¡Bienvenido a tu espacio virtual! 🌈`);
    }
  }, [user]);

  // Función para mostrar la notificación de sonreír
  const showSmileMessage = () => {
    toast.info("¡Gracias por interactuar! 😄"); // Mensaje adicional al hacer clic
  };

  return (
    <div
      className={`min-h-screen flex flex-col items-center pb-24 pt-20 transition-colors duration-300 ${
        isDarkMode
          ? "bg-gradient-to-br from-gray-800 via-gray-900 to-black text-white"
          : "bg-gradient-to-l from-indigo-100 via-pink-100 to-yellow-100 text-gray-900"
      }`}
    >
      {/* Contenedor central con espacio entre header y contenido */}
      <div
        className={`rounded-xl shadow-xl p-8 border flex flex-col items-center justify-center text-center mt-4 transition-colors duration-300 ${
          isDarkMode
            ? "bg-gray-800 border-gray-700 text-gray-100"
            : "bg-white border-gray-300 text-gray-900"
        }`}
      >
        <h2
          className={`text-4xl font-extrabold mb-5 ${
            isDarkMode ? "text-yellow-400" : "text-indigo-600"
          }`}
        >
          {user
            ? `¡Bienvenido a tu página de inicio!`
            : "¡Inicia sesión para más sorpresas y explorar tu espacio virtual!"}
        </h2>

        {user && (
          <p className="text-xl mb-6">
            Explora todo lo que puedes hacer desde aquí, {user.name}
          </p>
        )}

        {/* Icono divertido */}
        <div className="mb-6">
          <FaRegGrin
            className={`text-6xl animate-pulse ${
              isDarkMode ? "text-yellow-500" : "text-yellow-400"
            }`}
          />
        </div>

        {/* Botón interactivo */}
        <button
          className={`mt-6 px-8 py-3 rounded-lg shadow-lg transition-all ${
            isDarkMode
              ? "bg-gradient-to-br from-yellow-600 to-yellow-700 text-gray-900 hover:from-yellow-500 hover:to-yellow-600"
              : "bg-gradient-to-br from-green-500 to-blue-500 text-white hover:bg-green-600"
          }`}
          onClick={showSmileMessage} // Llamada a la función de notificación
        >
          ¡Haz clic aquí para sonreír más!
        </button>

        {/* Texto adicional */}
        <p className="mt-8 text-lg">
          Aquí puedes comenzar a gestionar tus libros y muchas otras cosas
          geniales.
        </p>
      </div>
    </div>
  );
}

export default Home;
