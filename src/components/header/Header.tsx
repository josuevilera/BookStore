import Logo from "../header/Logo";
import Menu from "./Menu";
function Header() {
    return (
        <>
            <header className="flex items-center justify-evenly
                h-20 bg-emerald-300">
                <Logo />
                <Menu />
            </header>
        </>
    );
}

export default Header;