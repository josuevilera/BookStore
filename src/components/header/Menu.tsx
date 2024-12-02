function Menu() {
    return (
        <> 
            {/* Menú normal */}
            <nav className="hidden md:flex space-x-4">
                <a href="#">Home</a>
                <a href="#">Libros</a>
                <a href="#">Log In</a>
            </nav>

            {/* Menú del Sidebar*/}
            <nav className="md:hidden flex flex-col space-y-20 p-4 mt-4 ml-24">
                <a href="#">Home</a>
                <a href="#">Libros</a>
                <a href="#">Log In</a>
            </nav>
        </>
    );
}

export default Menu;
