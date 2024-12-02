import books from "../../list/BookArray";
import BookItem from "../main/BookItem";

function Booklist() {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-8">
        {
          books.map(book => (
            <BookItem key={book.id_book} {...book}/>
          ))
        }
      </div>
    </>
  );
}

export default Booklist;
