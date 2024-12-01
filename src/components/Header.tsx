import Logo from  "../components/Logo";
import Menu from "../components/Menu";
function Header() {
    return (
        <>
            <header className="flex items-center justify-evenly h-20 bg-emerald-300">
                <Logo />
                <Menu />
            </header>
        </>
    );
}

export default Header;