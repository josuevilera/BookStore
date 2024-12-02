function Logo() {
    return (
        <>  
            <div className="flex items-center space-x-4">
                <img
                    src="./public/logo.svg"
                    alt="logo"
                    width={50}
                />
                <h1 className="font-bold">Bookstore</h1>
            </div>

        </>
    );
}

export default Logo;