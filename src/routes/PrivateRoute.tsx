import {Outlet, Navigate} from 'react-router-dom';
import user from "../list/user";

function PrivateRoute() {

    if (user) return <Outlet />;

    return <Navigate to="/login" />
}

export default PrivateRoute;