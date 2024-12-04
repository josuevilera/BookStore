import { useEffect, useState } from "react";
import Loading from "../../pages/Loading";

// Definición de tipos para los datos de los libros
interface Author {
  name: string;
}

interface Book {
  title: string;
  authors?: Author[];
  key: string;
}

function Booklistnew() {
  const [books, setBooks] = useState<Book[]>([]);
  const [error, setError] = useState<string | null>(null);

  // Función para obtener los libros desde la API
  const getBooks = async () => {
    try {
      const response = await fetch("https://openlibrary.org/subjects/programming.json");
      if (!response.ok) {
        throw new Error("Error al obtener los libros");
      }
      const data = await response.json();
      setBooks(data.works);
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Ocurrió un error desconocido");
      }
    }
  };

  useEffect(() => {
    getBooks();
  }, []);

  // Muestra error si ocurre
  if (error) return <div className="text-red-500">Error: {error}</div>;

  // Muestra el componente de carga si no hay libros
  if (books.length === 0) return <Loading />;

  return (
    <div className="p-8 mb-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {books.map((book, index) => (
          <div key={book.key || index} className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="font-semibold text-xl">{book.title}</h3>
            <p className="text-gray-600">
              by {book.authors && book.authors.length > 0 ? book.authors[0].name : "Unknown"}
            </p>
            <a
              href={`https://openlibrary.org${book.key}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline mt-2 block"
            >
              View details
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Booklistnew;
