import { FaRegGrin } from "react-icons/fa"; // Iconos decorativos
import { toast } from "react-toastify"; // Notificaciones de bienvenida
import "react-toastify/dist/ReactToastify.css"; // Estilos de las notificaciones
import { useEffect } from "react"; // Para ejecutar algo cuando se cargue el componente
import { useUser } from "../context/UserContext";
// Componente Home
function Home() {
  // Usamos el contexto para obtener el usuario
  const { user } = useUser();

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
    <div className="min-h-screen bg-gradient-to-l from-indigo-100 via-pink-100 to-yellow-100 flex flex-col items-center pb-24 pt-8">

      {/* Contenedor central con espacio entre header y contenido */}
      <div className="bg-white rounded-xl shadow-xl p-8 border border-gray-300 flex flex-col items-center justify-center text-center mt-4">

      <h2 className="text-4xl font-extrabold text-indigo-600 mb-5">
        {user ? 
          `¡Bienvenido a tu página de inicio!` : 
          "¡Inicia sesión para más sorpresas y explorar tu espacio virtual!"
        }
      </h2>

        {user && (
          <p className="text-xl text-gray-700 mb-6">
            Explora todo lo que puedes hacer desde aquí, {user.name}
          </p>
        )}

        {/* Icono divertido */}
        <div className="mb-6">
          <FaRegGrin className="text-6xl text-yellow-400 animate-pulse" />
        </div>

        {/* Botón interactivo */}
        <button
          className="mt-6 px-8 py-3 bg-gradient-to-br from-green-500 to-blue-500 text-white rounded-lg shadow-lg hover:bg-green-600"
          onClick={showSmileMessage} // Llamada a la función de notificación
        >
          ¡Haz clic aquí para sonreír más!
        </button>

        {/* Texto adicional */}
        <p className="mt-8 text-lg text-gray-800">
          Aquí puedes comenzar a gestionar tus libros y muchas otras cosas geniales.
        </p>
      </div>
    </div>
  );
}

export default Home;
