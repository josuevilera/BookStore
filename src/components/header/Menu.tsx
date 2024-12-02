import { NavLink } from "react-router-dom";
import user from "../../list/user";
function Menu() {
    return (
            <nav className="flex flex-col md:flex-row md:space-x-4 md:space-y-0 p-4 ml-8 space-y-4">
                <NavLink
                    to="/"
                >
                    Home
                </NavLink>
                {user && (
                    <>
                        <NavLink
                            to="/Books"
                        >
                            Books
                        </NavLink>
                        <NavLink
                            to="/Logout"
                        >
                            Logout
                        </NavLink>
                    </>
                )}
                {!user && (
                    <>
                        <NavLink
                            to="/login"
                        >
                        Login
                        </NavLink><NavLink
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
