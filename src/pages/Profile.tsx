import { Link, Outlet } from "react-router-dom";
function Profile() {
    return (
        <>
            <section
                className="flex flex-col gap-4 w-80 pt-6 mb-28 mx-auto"
            >
                <h2
                    className="text-xl font-bold text-center mb-10 pt-10"
                >
                    Perfil
                </h2>
                <p>Aquí puedes gestionar tus libros.</p>
                <nav
                    className="my-5 flex gap-2"
                >
                    <Link
                        to="Addbook"
                        className="no-underline text-blue-500 border border-blue-500 px-2 py-1 rounded-md"
                    >
                        Añadir Libro
                    </Link>
                    <Link
                        to="Editbook"
                        className="no-underline text-green-500 border border-green-500 px-2 py-1 rounded-md"
                    >
                        Editar Libro
                    </Link>
                </nav>
                    <Outlet />
            </section>
        </>
    );
};

export default Profile;