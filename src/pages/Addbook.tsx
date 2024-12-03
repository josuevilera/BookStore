import React, { useState } from "react";
function Addbook() {
    
    const [inputTitle, setInputTitle] = useState('');
    const [inputAuthor, setInputAuthor] = useState('');
    const [inputTypeBook, setInputTypeBook] = useState('');
    const [inputPhoto, setInputPhoto] = useState('');
    const [inputPrice, setInputPrice] = useState('');
    function handleSubmit (e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        console.log(inputTitle, inputAuthor, inputTypeBook, inputPhoto, inputPrice);
    }
    function handleTitleChange (e: React.ChangeEvent<HTMLInputElement>) {    
        e.preventDefault();
        setInputTitle(e.target.value);
    }
    
    function handleAuthorChange (e: React.ChangeEvent<HTMLInputElement>) {    
        e.preventDefault();
        setInputAuthor(e.target.value);
    }
    
    function handleTypeBookChange (e: React.ChangeEvent<HTMLInputElement>) {    
        e.preventDefault();
        setInputTypeBook(e.target.value);
    }
    
    function handlePhotoChange (e: React.ChangeEvent<HTMLInputElement>) {    
        e.preventDefault();
        setInputPhoto(e.target.value);
    }
    
    function handlePriceChange (e: React.ChangeEvent<HTMLInputElement>) {    
        e.preventDefault();
        setInputPrice(e.target.value);
    }

    return (
        <>
            <section
                className="border border-emerald-200 w-80 mb-28 mx-auto rounded-lg"
            >
                <h3
                    className="text-2xl flex justify-center m-3"
                >
                    Añadir libro
                </h3>
                <form
                    className="flex flex-col gap-2 w-80 mx-auto"
                    onChange={handleSubmit}
                >
                    <label 
                        className="flex justify-around p-3"
                        htmlFor=""
                    >
                        Title...
                        <input
                            className="border-b-2 border-gray-200 hover:border-emerald-200 focus:outline-none "
                            type="text" 
                            placeholder="Book title here"
                            value={inputTitle}
                            onChange={handleTitleChange}
                        />
                    </label>
                    <label 
                        className="flex justify-around p-3"
                        htmlFor=""
                    >
                        Author:
                        <input
                            className="border-b-2 border-gray-200 hover:border-emerald-200 focus:outline-none "
                            type="text"
                            placeholder="Book author here"
                            value={inputAuthor}
                            onChange={handleAuthorChange}
                        />
                    </label>
                    <label 
                        className="flex justify-around p-3"
                        htmlFor=""
                    >
                        Type...
                        <input
                            className="border-b-2 border-gray-200 hover:border-emerald-200 focus:outline-none "
                            type="text"
                            placeholder="Book type here"
                            value={inputTypeBook}
                            onChange={handleTypeBookChange}
                        />
                    </label> 
                    <label 
                        className="flex justify-around p-3"
                        htmlFor=""
                    >
                        Photo...
                        <input
                            className="border-b-2 border-gray-200 hover:border-emerald-200 focus:outline-none "
                            type="text"
                            placeholder="Book photo here"
                            value={inputPhoto}
                            onChange={handlePhotoChange}
                        />
                    </label>
                    <label 
                        className="flex justify-around p-3"
                        htmlFor=""
                    >
                        Price...
                        <input
                            className="border-b-2 border-gray-200 hover:border-emerald-200 focus:outline-none "
                            type="text"
                            placeholder="Book price here"
                            value={inputPrice}
                            onChange={handlePriceChange}
                        />
                    </label>
                    <button
                        className="text-white bg-emerald-200 bg-gradient-to-tr from-emerald-500 to-emerald-200 rounded-md mx-auto p-3 mb-2 w-40 hover:text-black"
                        type="submit"
                    >
                        Enviar
                    </button>   
                </form>
            </section>
        </>
    );
}

export default Addbook;