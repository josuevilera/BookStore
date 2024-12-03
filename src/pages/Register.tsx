import { useState } from "react";

function RegisterForm() {
    const [formValues, setFormValues] = useState({
        name: "",
        surname: "",
        email: "",
        photo: "",
        password: "",
        confirmPassword: "",
    });

    function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    }

    function handleRegisterSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const { password, confirmPassword } = formValues;

        if (password !== confirmPassword) {
            alert("Las contraseñas no coinciden");
            return;
        }

        console.log("Registration Data:", formValues);
    }

    return (
        <form
            className="flex flex-col gap-4 w-80 pt-10 mx-auto"
            onSubmit={handleRegisterSubmit}
        >
            <h2 className="text-xl font-bold text-center">Registrarse</h2>
            <input
                type="text"
                placeholder="Nombre"
                className="border border-gray-300 rounded p-2"
                name="name"
                value={formValues.name}
                onChange={handleInputChange}
                required
            />
            <input
                type="text"
                placeholder="Apellido"
                className="border border-gray-300 rounded p-2"
                name="surname"
                value={formValues.surname}
                onChange={handleInputChange}
                required
            />
            <input
                type="email"
                placeholder="Correo Electrónico"
                className="border border-gray-300 rounded p-2"
                name="email"
                value={formValues.email}
                onChange={handleInputChange}
                required
            />
            <input
                type="url"
                placeholder="URL de la Foto"
                className="border border-gray-300 rounded p-2"
                name="photo"
                value={formValues.photo}
                onChange={handleInputChange}
            />
            <input
                type="password"
                placeholder="Contraseña"
                className="border border-gray-300 rounded p-2"
                name="password"
                value={formValues.password}
                onChange={handleInputChange}
                required
            />
            <input
                type="password"
                placeholder="Confirmar Contraseña"
                className="border border-gray-300 rounded p-2"
                name="confirmPassword"
                value={formValues.confirmPassword}
                onChange={handleInputChange}
                required
            />
            <button
                className="text-white bg-emerald-200 bg-gradient-to-tr from-emerald-500 to-emerald-200 rounded-md p-3 w-full hover:text-black"
                type="submit"
            >
                Registrarse
            </button>
        </form>
    );
}

export default RegisterForm;
