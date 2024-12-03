import { useState } from "react";

function LoginForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function handleLoginSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        console.log("Login Data:", { email, password });
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
                className="border border-gray-300 rounded p-2"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />
            <input
                type="password"
                placeholder="Contraseña"
                className="border border-gray-300 rounded p-2"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
            />
            <button
                className="text-white bg-emerald-200 bg-gradient-to-tr from-emerald-500 to-emerald-200 rounded-md p-3 w-full hover:text-black"
                type="submit"
            >
                Iniciar Sesión
            </button>
        </form>
    );
}

export default LoginForm;
