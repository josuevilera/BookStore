import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod"; 

// Definimos el esquema con Zod
const schema = z.object({
  title: z
    .string()
    .min(3, { message: "Title must be at least 3 characters long" }) 
    .regex(/^[a-zA-Z0-9\s]+$/, { message: "Title must contain only alphanumeric characters and spaces" }), 
  author: z
    .string()
    .min(3, { message: "Author must be at least 3 characters long" }) 
    .regex(/^[a-zA-Z\s]+$/, { message: "Author name must contain only letters and spaces" }), 
  type: z
    .string()
    .min(3, { message: "Type must be at least 3 characters long" }) 
    .regex(/^[a-zA-Z\s]+$/, { message: "Type must contain only letters and spaces" }),
  photo: z
    .string()
    .url({ message: "Photo must be a valid URL" })
    .optional(),
  price: z
    .string()
    .min(1, { message: "Price is required" }) 
    .refine((value) => /^\d+(\.\d{1,2})?$/.test(value), {
      message: "Price must be a valid number with up to two decimal places"
    })
});

// Definimos los tipos de datos del formulario
type FormData = {
  title: string;
  author: string;
  type: string;
  photo?: string;
  price: string;
};

function Addbook() {
  // Usamos react-hook-form con Zod
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitted, isValid },
  } = useForm<FormData>({
    resolver: zodResolver(schema), // Usamos Zod como resolver para la validación
    mode: "onBlur", // Validación en el blur
  });

  const [successMessage, setSuccessMessage] = useState("");

  // Función de submit del formulario
  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data);
    setSuccessMessage("Book added successfully!");
    setTimeout(() => setSuccessMessage(""), 3000)
  };

  return (
    <section className="border border-emerald-200 w-80 mb-28 mx-auto rounded-lg">
      <h3 className="text-xl font-bold text-center pt-5">Añadir Book</h3>
      <form
        className="flex flex-col gap-4 w-80 mx-auto"
        onSubmit={handleSubmit(onSubmit)} // Usamos handleSubmit para manejar el submit
      >
        <label className="flex justify-around p-3">
          Title:
          <input
            className={`border border-gray-300 rounded p-2 ${errors.title ? "border-red-500" : ""}`}
            type="text"
            placeholder="Book title here"
            {...register("title")}
          />
        </label>
        {errors.title && (
          <p className="text-sm text-red-500 mt-1 text-center">{errors.title.message}</p>
        )}

        <label className="flex justify-around p-3">
          Author:
          <input
            className={`border border-gray-300 rounded p-2 ${errors.author ? "border-red-500" : ""}`}
            type="text"
            placeholder="Book author here"
            {...register("author")}
          />
        </label>
        {errors.author && (
          <p className="text-sm text-red-500 mt-1 text-center">{errors.author.message}</p>
        )}

        <label className="flex justify-around p-3">
          Type:
          <input
            className={`border border-gray-300 rounded p-2 ${errors.type ? "border-red-500" : ""}`}
            type="text"
            placeholder="Book type here"
            {...register("type")}
          />
        </label>
        {errors.type && (
          <p className="text-sm text-red-500 mt-1 text-center">{errors.type.message}</p>
        )}

        <label className="flex justify-around p-3">
          Photo URL:
          <input
            className={`border border-gray-300 rounded p-2 ${errors.photo ? "border-red-500" : ""}`}
            type="text"
            placeholder="Book photo here"
            {...register("photo")}
          />
        </label>
        {errors.photo && (
          <p className="text-sm text-red-500 mt-1 text-center">{errors.photo.message}</p>
        )}

        <label className="flex justify-around p-3">
          Price:
          <input
            className={`border border-gray-300 rounded p-2 ${errors.price ? "border-red-500" : ""}`}
            type="text"
            placeholder="Book price here"
            {...register("price")}
          />
        </label>
        {errors.price && (
          <p className="text-sm text-red-500 mt-1 text-center">{errors.price.message}</p>
        )}

        <button
          className="text-white bg-emerald-200 bg-gradient-to-tr from-emerald-500 to-emerald-200 rounded-md p-3 w-full hover:text-black"
          type="submit"
          disabled={!isValid || isSubmitted} // Deshabilitar el botón si el formulario no es válido
        >
          Submit
        </button>
      </form>

      {successMessage && (
        <div className="text-center bg-emerald-500 text-white font-semibold rounded-md p-2 mt-4">
          {successMessage}
        </div>
      )}
    </section>
  );
}

export default Addbook;
