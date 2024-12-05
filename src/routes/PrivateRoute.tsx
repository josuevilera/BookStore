import {Outlet, Navigate} from 'react-router-dom';
import { useUser } from "../../src/context/UserContext"

function PrivateRoute() {
    const { user } = useUser();  // Accede al usuario desde el contexto

    if (user?.loggedIn) {
        return <Outlet />;
    }

    return <Navigate to="/login" />
}

export default PrivateRoute;