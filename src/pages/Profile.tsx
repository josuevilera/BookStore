import { useState } from "react";
import { Link, Outlet } from "react-router-dom";

function Profile() {
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [email, setEmail] = useState("");
    const [photo, setPhoto] = useState("");
    const [successMessage, setSuccessMessage] = useState("");

    function handleUpdateSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        console.log("Profile Data:", { name, surname, email, photo });

        setSuccessMessage("¡Datos actualizados!");
        setTimeout(() => setSuccessMessage(""), 3000);
    }

    return (
        <>
            <section 
                className="flex flex-col gap-4 w-80 pt-6 mb-28 mx-auto"
            >
                <h2 
                    className="text-xl font-bold text-center mb-10 pt-10"
                >
                    Tu perfil
                </h2>
                <p
                    className="font-bold text-center "
                >
                    Aquí puedes gestionar tus libros.
                </p>

                {/* Formulario de actualización de perfil */}
                <form
                    className="flex flex-col gap-4 w-80 pt-10 mb-10 mx-auto"
                    onSubmit={handleUpdateSubmit}
                >
                    <h3 
                        className="text-lg font-semibold text-center"
                    >
                        Actualizar Datos
                    </h3>
                    <input
                        type="text"
                        placeholder="Nombre"
                        className="border border-gray-300 rounded p-2"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                    <input
                        type="text"
                        placeholder="Apellido"
                        className="border border-gray-300 rounded p-2"
                        value={surname}
                        onChange={(e) => setSurname(e.target.value)}
                        required
                    />
                    <input
                        type="email"
                        placeholder="Correo Electrónico"
                        className="border border-gray-300 rounded p-2"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
                        required
                    />
                    <input
                        type="url"
                        placeholder="Foto (URL)"
                        className="border border-gray-300 rounded p-2"
                        value={photo}
                        onChange={(e) => setPhoto(e.target.value)}
                    />
                    <button
                        type="submit"
                        className="text-white bg-emerald-200 bg-gradient-to-tr from-emerald-500 to-emerald-200 rounded-md p-3 w-full hover:text-black"
                    >
                        Actualizar Datos
                    </button>

                    {successMessage && (
                        <div className="text-center bg-emerald-500 text-white font-semibold rounded-md p-2 mt-4">
                            {successMessage}
                        </div>
                    )}
                </form>

                {/* Navegación */}
                <nav className="my-5 flex gap-2">
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

                {/* Renderizado de las rutas hijas */}
                <Outlet />
            </section>
        </>
    );
}

export default Profile;
