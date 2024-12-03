import { useState } from "react";

function Editbook() {

    const [formValues, setFormValues] = useState({
        Name: '',
        Surname: '',
        Email: '',
        Photo: null as File | null,
    });

    function handleSubmit (e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        console.log("Form values: ", formValues);
    }

    function handleInputChange (e: React.ChangeEvent<HTMLInputElement>) {
        const { name, value } = e.target;

        setFormValues({ 
            ...formValues,
            [name]: value,
        });
    }

    function handlePhotoChange (e: React.ChangeEvent<HTMLInputElement>) {
        const file = e.target.files ? e.target.files[0] : null;

        setFormValues({
            ...formValues,
            Photo: file,
        });
    }

    return (
        <>
            <section
                className="border border-emerald-200 w-80 mb-28 mx-auto rounded-lg"
            >
                <h3
                    className="text-2xl flex justify-center m-3"
                >
                    Actualiza tus datos de usuario
                </h3>

                <form
                    action="" 
                    method="get"
                    className="flex flex-col gap-2 w-80 mx-auto"
                    onSubmit={handleSubmit}>
                    <label
                        className="flex justify-around p-3"
                        htmlFor="">
                        Name:
                        <input
                            className="border-b-2 border-gray-200 hover:border-emerald-200 focus:outline-none "
                            type="text"
                            name="Name"
                            placeholder="Your name here"
                            onChange={handleInputChange}
                            value={formValues.Name}
                        />
                    </label>
                    <label
                        className="flex justify-around p-3"
                        htmlFor="">
                        Surname:
                        <input
                            className="border-b-2 border-gray-200 hover:border-emerald-200 focus:outline-none"
                            type="text"
                            name="Surname"
                            placeholder="Your surname here"
                            onChange={handleInputChange}
                            value={formValues.Surname}

                        />
                    </label>
                    <label
                        className="flex justify-around p-3"
                        htmlFor="">
                        Email:
                        <input
                            className="border-b-2 border-gray-200 hover:border-emerald-200 focus:outline-none"
                            type="email"
                            name="Email"
                            placeholder="Your email here"
                            onChange={handleInputChange}
                            value={formValues.Email}

                        />
                    </label>
                    <label
                        className="flex flex-col justify-around p-3"
                        htmlFor="">
                        Photo:
                        <input
                            type="file"
                            name="Photo"
                            placeholder="Your photo here"
                            onChange={handlePhotoChange}
                        />
                    </label>
                        <br />
                    <button
                        className="text-white bg-emerald-200 bg-gradient-to-tr from-emerald-500 to-emerald-200 rounded-md mx-auto p-3 mb-2 hover:text-black"
                        type="submit"
                    >
                        Actualizar datos
                    </button>
                </form>
            </section>

        </>
    );
}
export default Editbook;