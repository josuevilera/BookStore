import { IoClose } from "react-icons/io5";
import Menu from "./Menu";
import { useDarkMode } from "../../context/useDarkMode"; // Importamos el contexto para el modo oscuro

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

function Sidebar({ isOpen, onClose }: SidebarProps) {
  const { isDarkMode } = useDarkMode(); // Obtenemos el estado del modo oscuro

  return (
    <>
      {/* Si está abierto, muestra el botón para cerrar */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-10"
          onClick={onClose} // Cierra el Sidebar si se hace clic fuera
        ></div>
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 shadow-lg transform z-20
          ${isOpen ? "translate-x-0" : "-translate-x-full"} 
          transition-transform duration-300 ease-in-out
          ${isDarkMode ? "bg-gray-800 text-white" : "bg-white text-gray-900"}`}
      >
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-lg font-bold">Menú</h2>
          <button onClick={onClose} aria-label="Cerrar menú">
            <IoClose size={30} className={isDarkMode ? "text-white" : "text-gray-700"} />
          </button>
        </div>
        {/* Menu dentro del Sidebar */}
        <Menu />
      </div>
    </>
  );
}

export default Sidebar;
