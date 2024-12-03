import Addbook from "./Addbook";
import Editbook from "./Editbook";

function Profile() {


    return (
        <>
            <h2
            className="text-xl font-bold text-center"
            >
            Mi perfil
            </h2>
            
            <Addbook />
            <Editbook />
        </>
    );
}

export default Profile;