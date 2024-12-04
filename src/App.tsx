import AppRoutes from "./routes/AppRoutes";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <Header />
      <ToastContainer />
      <AppRoutes />
      <Footer />
    </>
  );
}

export default App;
