import {booksProps} from "../../list/BookType";

  function BookItem(props: booksProps) {
    
    function handleEditBook () {
      console.log(`Editando el libro ${props.title}`);
    }

    function handleDeleteBook () {
      console.log(`Eliminando el libro ${props.title}`);
    }

    return (
      <article className="border flex flex-col">
        <img 
          src={props.photo} 
          alt={props.title}
          className="w-full h-64 object-cover" 
        />
        <h3 className="text-lg font-semibold pl-2 mt-2">
          {props.title}
        </h3>
        <p className="text-lg text-gray-600 pl-2 mt-1 ">
          {props.author}
          </p>
        <p className="text-lg font-bold pl-2 mt-1">
          ${props.price}
        </p>
  
        <div className="flex justify-around mb-3">
          <button
            className="bg-blue-500 text-white px-4 py-2 mt-2 rounded-md"
            onClick={handleEditBook}
          >
            Editar
          </button>
          <button
            className="bg-red-500 text-white px-4 py-2 mt-2  rounded-md"
            onClick={handleDeleteBook}
          >
            Eliminar
          </button>
        </div>
      </article>
    );
  }
  
  export default BookItem;
  