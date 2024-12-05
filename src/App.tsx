import AppRoutes from "./routes/AppRoutes";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { UserProvider } from "./context/UserProvider";

function App() {
  return (
    <>
      <UserProvider>
        <Header />
        <ToastContainer />
        <AppRoutes />
        <Footer />
      </UserProvider>
    </>
  );
}

export default App;
