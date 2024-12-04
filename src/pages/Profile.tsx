import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";

interface ProfileFormData {
    name: string;
    surname: string;
    email: string;
    photo?: string;
}

function Profile() {
    const { register, handleSubmit, formState: { errors } } = useForm<ProfileFormData>();
    const [successMessage, setSuccessMessage] = useState("");

    const onSubmit: SubmitHandler<ProfileFormData> = (data) => {
        console.log("Profile Data:", data);
        setSuccessMessage("¡Datos actualizados!");
        setTimeout(() => setSuccessMessage(""), 3000);
    };

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
                    className="font-bold text-center"
                >
                    Aquí puedes gestionar tus libros.
                </p>

                <form
                    className="flex flex-col gap-4 w-80 pt-10 mb-10 mx-auto"
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <h3 
                        className="text-lg font-semibold text-center"
                    >
                        Actualizar Datos
                    </h3>

                    <input
                        type="text"
                        placeholder="Your name here"
                        className={`border rounded p-2 ${errors.name ? "border-red-500" : "border-gray-300"}`}
                        {...register("name", 
                            { required: "Name is required",
                            pattern: {
                                value: /^[a-zA-Z]+$/,
                                message: "Please, enter a valid name",
                            },
                        })}
                    />
                    {errors.name && <p className="text-sm text-red-500">{errors.name.message}</p>}

                    <input
                        type="text"
                        placeholder="Surname"
                        className={`border rounded p-2 ${errors.surname ? "border-red-500" : "border-gray-300"}`}
                        {...register("surname", 
                            { required: "Surname is required",
                            pattern: {
                                value: /^[a-zA-Z]+$/,
                                message: "Please, enter a valid surname",
                            },
                        })}
                    />
                    {errors.surname && <p className="text-sm text-red-500">{errors.surname.message}</p>}

                    <input
                        type="email"
                        placeholder="Your email here"
                        className={`border rounded p-2 ${errors.email ? "border-red-500" : "border-gray-300"}`}
                        {...register("email", {
                            required: "EEmail is required",
                            pattern: {
                                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                message: "Please, enter a valid email",
                            },
                        })}
                    />
                    {errors.email && <p className="text-sm text-red-500">{errors.email.message}</p>}

                    <input
                        type="url"
                        placeholder="Photo (URL)"
                        className={`border rounded p-2 ${errors.photo ? "border-red-500" : "border-gray-300"}`}
                        {...register("photo", {
                            required: "URL is required",
                            pattern: {
                                value: /^(https?|chrome):\/\/[^\s$.?#].[^\s]*$/gm,
                                message: "Please, enter a valid URL",
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
}

export default Profile;
