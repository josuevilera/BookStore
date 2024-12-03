import { useState } from "react";

function LoginForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [successMessage, setSuccessMessage] = useState("");
    

    function handleLoginSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        console.log("Login Data:", { email, password });

        setSuccessMessage("¡Correo válido!");
        setTimeout(() => setSuccessMessage(""), 3000);
    }

    return (
        <form
            className="flex flex-col gap-4 w-80 pt-24 mb-28 mx-auto"
            onSubmit={handleLoginSubmit}
        >
            <h2 
                className="text-xl font-bold text-center pt-10"
            >
                Iniciar Sesión
            </h2>
            <input
                type="email"
                placeholder="Correo Electrónico"
                className="border border-gray-300 rounded p-2 peer"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
                required
            />
            <span
                className="text-sm text-red-500 hidden peer-invalid:block"
            >
                Email required
            </span>
            <input
                type="password"
                placeholder="Contraseña"
                className="border border-gray-300 rounded p-2 peer"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                maxLength={20}
                minLength={5}
                // pattern="^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{5,20}$"
                required
            />
            <span
                className="text-sm text-red-500 hidden peer-invalid:block"
            >
                Field of 4 to 20 characters
            </span>
            <button
                className="text-white bg-emerald-200 bg-gradient-to-tr from-emerald-500 to-emerald-200 rounded-md p-3 w-full hover:text-black"
                type="submit"
            >
                Iniciar Sesión
            </button>

            {successMessage && (
                <div className="text-center bg-emerald-500 text-white font-semibold rounded-md p-2 mt-4">
                    {successMessage}
                </div>
            )}
        </form>
    );
}

export default LoginForm;
