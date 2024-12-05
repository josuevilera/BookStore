import AppRoutes from "./routes/AppRoutes";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { UserProvider } from "./context/UserProvider";
import { DarkModeProvider } from "./context/DarkModeProvider";
import { useDarkMode } from "../src/context/useDarkMode";

function AppContent() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <div className={`${isDarkMode ? "dark bg-gray-900 text-white" : "bg-white text-gray-900"} min-h-screen transition-colors duration-300`}>
      {/* Botón para alternar el modo oscuro */}
      <button
        onClick={toggleDarkMode}
        className="absolute top-24 right-4 px-4 py-2 bg-indigo-500 text-white rounded-full shadow-lg hover:bg-indigo-700 focus:outline-none transition-transform transform hover:scale-110"
      >
        {isDarkMode ? "Modo Claro" : "Modo Oscuro"}
      </button>

      {/* Contenido principal */}
      <Header />
      <main>
        <AppRoutes />
      </main>
      <Footer />

      {/* Notificaciones */}
      <ToastContainer />
    </div>
  );
}

function App() {
  return (
    <DarkModeProvider>
      <UserProvider>
        <AppContent />
      </UserProvider>
    </DarkModeProvider>
  );
}

export default App;
