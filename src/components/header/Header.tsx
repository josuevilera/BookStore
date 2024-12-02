import Logo from "../header/Logo";
import Menu from "./Menu";
import ButtonResponsive from "./ButtonResponsive";
import Sidebar from "./Sidebar";
import useToggle from "../../hooks/useToggle";

function Header() {
    // Manejo del estado del Sidebar con useToggle
    const [isSidebarOpen, toggleSidebar] = useToggle(false);

    return (
        <>
            <header className="flex items-center justify-between h-20 px-4 bg-emerald-300">
                {/* Logo */}
                <Logo />

                {/* Menú para dispositivos de escritorio */}
                <div className="hidden md:flex">
                    <Menu />
                </div>

                {/* Botón que activa el menú para dispositivos móviles */}
                <ButtonResponsive onOpen={toggleSidebar} />
            </header>

            {/* Si está abierto muestra el Sidebar, si está cerrado el botón de menú */}
            <Sidebar isOpen={isSidebarOpen} onClose={toggleSidebar} />
        </>
    );
}

export default Header;
