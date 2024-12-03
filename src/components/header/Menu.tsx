import { NavLink } from "react-router-dom";
import user from "../../list/user";


function Menu() {

    return (
            <nav className="flex flex-col md:flex-row md:space-x-4 md:space-y-0 p-4 ml-8 space-y-4">
            <NavLink
                className="hover:text-green-500 transition-transform duration-150 active:scale-110 active:text-green-500"
                to="/"
            >
                Home
            </NavLink>
            {user && (
                <>
                    <NavLink
                        className="hover:text-green-500 transition-transform duration-150 active:scale-110 active:text-green-500"
                        to="/Books"
                    >
                        Books
                    </NavLink>
                    <NavLink
                        className="hover:text-green-500 transition-transform duration-150 active:scale-110 active:text-black"
                        to="/Profile"
                    >
                        Profile
                    </NavLink>
                    <NavLink
                        className="hover:text-green-500 transition-transform duration-150 active:scale-110 active:text-black"
                        to="/Logout"
                    >
                        Logout
                    </NavLink>
                </>
            )}
            {!user && (
                <>
                    <NavLink
                        className="hover:text-green-500 transition-transform duration-150 active:scale-110 active:text-black"
                        to="/login"
                    >
                        Login
                    </NavLink>
                    <NavLink
                        className="hover:text-green-500 transition-transform duration-150 active:scale-110 active:text-black"
                        to="/register"
                    >
                        Register
                    </NavLink>
                </>
            )}
        </nav>
    );
}

export default Menu;
