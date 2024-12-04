import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";

// Definimos la interfaz de los datos del formulario para una mayor claridad y tipado
interface ProfileFormData {
    name: string;
    surname: string;
    email: string;
    photo?: string; // La foto puede ser opcional
}

function Profile() {
    const { register, handleSubmit, formState: { errors } } = useForm<ProfileFormData>();
    const [successMessage, setSuccessMessage] = useState("");

    // Definimos el onSubmit con un tipo para evitar el uso de `any`
    const onSubmit: SubmitHandler<ProfileFormData> = (data) => {
        console.log("Profile Data:", data);
        setSuccessMessage("¡Datos actualizados!");
        setTimeout(() => setSuccessMessage(""), 3000);
    };

    return (
        <>
            <section className="flex flex-col gap-4 w-80 pt-6 mb-28 mx-auto">
                <h2 className="text-xl font-bold text-center mb-10 pt-10">
                    Tu perfil
                </h2>
                <p className="font-bold text-center">
                    Aquí puedes gestionar tus libros.
                </p>

                {/* Formulario de actualización de perfil */}
                <form
                    className="flex flex-col gap-4 w-80 pt-10 mb-10 mx-auto"
                    onSubmit={handleSubmit(onSubmit)} // Usamos handleSubmit de react-hook-form
                >
                    <h3 className="text-lg font-semibold text-center">
                        Actualizar Datos
                    </h3>

                    {/* Campo de Nombre */}
                    <input
                        type="text"
                        placeholder="Nombre"
                        className={`border rounded p-2 ${errors.name ? "border-red-500" : "border-gray-300"}`}
                        {...register("name", { required: "El nombre es obligatorio" })}
                    />
                    {errors.name && <p className="text-sm text-red-500">{errors.name.message}</p>}

                    {/* Campo de Apellido */}
                    <input
                        type="text"
                        placeholder="Apellido"
                        className={`border rounded p-2 ${errors.surname ? "border-red-500" : "border-gray-300"}`}
                        {...register("surname", { required: "El apellido es obligatorio" })}
                    />
                    {errors.surname && <p className="text-sm text-red-500">{errors.surname.message}</p>}

                    {/* Campo de Correo Electrónico */}
                    <input
                        type="email"
                        placeholder="Correo Electrónico"
                        className={`border rounded p-2 ${errors.email ? "border-red-500" : "border-gray-300"}`}
                        {...register("email", {
                            required: "El correo electrónico es obligatorio",
                            pattern: {
                                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                message: "Por favor ingresa un correo electrónico válido",
                            },
                        })}
                    />
                    {errors.email && <p className="text-sm text-red-500">{errors.email.message}</p>}

                    {/* Campo de Foto (URL) */}
                    <input
                        type="url"
                        placeholder="Foto (URL)"
                        className={`border rounded p-2 ${errors.photo ? "border-red-500" : "border-gray-300"}`}
                        {...register("photo", {
                            required: "La URL de la foto es obligatoria",
                            pattern: {
                                value: /^(https?|chrome):\/\/[^\s$.?#].[^\s]*$/gm,
                                message: "Por favor ingresa una URL válida",
                            },
                        })}
                    />
                    {errors.photo && <p className="text-sm text-red-500">{errors.photo.message}</p>}

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
