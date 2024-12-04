import { useState } from "react";
import axios from "axios";
import Loading from "./Loading";

function RegisterForm() {
    const [formValues, setFormValues] = useState({
        name: "",
        surname: "",
        email: "",
        photo: "",
        password: "",
        confirmPassword: "",
    });

    const [successMessage, setSuccessMessage] = useState<string>("");
    const [isLoading, setIsLoading] = useState<boolean>(false);

    function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    }

    async function handleRegisterSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const { password, confirmPassword } = formValues;

        if (password !== confirmPassword) {
            alert("Las contraseñas no coinciden");
            return;
        }

        setIsLoading(true);

        try {
            const response = await axios.post("https://localhost:5173/register", formValues);
            console.log("Registration Data:", response.data);
            setSuccessMessage("¡Cuenta registrada con éxito!");
        } catch (error) {
            console.error("Error al registrar la cuenta:", error);
            setSuccessMessage("Ocurrió un error al registrar la cuenta. Intenta nuevamente.");
        } finally {
            setIsLoading(false);
            setTimeout(() => setSuccessMessage(""), 3000);
        }
    }

    if (isLoading) {
        return <Loading />;
    }

    return (
        <form
            className="flex flex-col gap-4 w-80 pt-6 mb-28 mx-auto"
            onSubmit={handleRegisterSubmit}
        >
            <h2 className="text-xl font-bold text-center pt-2">
                Registrarse
            </h2>
            <input
                type="text"
                placeholder="Nombre"
                className="border border-gray-300 rounded p-2 peer"
                name="name"
                value={formValues.name}
                onChange={handleInputChange}
                pattern="^[a-zA-Z\s]+$"
                required
            />
            <span className="text-sm text-red-500 hidden peer-invalid:block">
                Please, enter a valid name
            </span>
            <input
                type="text"
                placeholder="Apellido"
                className="border border-gray-300 rounded p-2 peer"
                name="surname"
                value={formValues.surname}
                onChange={handleInputChange}
                pattern="^[a-zA-Z\s]+$"
                required
            />
            <span className="text-sm text-red-500 hidden peer-invalid:block">
                Please, enter a valid surname
            </span>
            <input
                type="email"
                placeholder="Correo Electrónico"
                className="border border-gray-300 rounded p-2 peer"
                name="email"
                value={formValues.email}
                onChange={handleInputChange}
                pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
                required
            />
            <span className="text-sm text-red-500 hidden peer-invalid:block">
                Enter a valid mail
            </span>
            <input
                type="url"
                placeholder="URL de la Foto"
                className="border border-gray-300 rounded p-2 peer"
                name="photo"
                value={formValues.photo}
                onChange={handleInputChange}
                pattern="https?://.+"
            />
            <span className="text-sm text-red-500 hidden peer-invalid:block">
                Please, enter a valid URL
            </span>
            <input
                type="password"
                placeholder="Contraseña"
                className="border border-gray-300 rounded p-2 peer"
                name="password"
                value={formValues.password}
                onChange={handleInputChange}
                pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$"
                required
            />
            <span className="text-sm text-red-500 hidden peer-invalid:block">
                Please, enter a valid password
            </span>
            <input
                type="password"
                placeholder="Confirmar Contraseña"
                className="border border-gray-300 rounded p-2 peer" 
                name="confirmPassword"
                value={formValues.confirmPassword}
                onChange={handleInputChange}
                pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$"
                required
            />
            <span className="text-sm text-red-500 hidden peer-invalid:block">
                Enter the same password
            </span>
            <button
                className="text-white bg-emerald-200 bg-gradient-to-tr from-emerald-500 to-emerald-200 rounded-md p-3 w-full hover:text-black"
                type="submit"
            >
                Registrarse
            </button>
            
            {successMessage && (
                <div className="text-center bg-emerald-500 text-white font-semibold rounded-md p-2 mt-4">
                    {successMessage}
                </div>
            )}
        </form>
    );
}

export default RegisterForm;
