import { Navigate, Outlet } from 'react-router-dom';
import user from '../list/user';

function PublicRoute() {
    if (!user) {
        return <Outlet />;
    } else {
        return <Navigate to="/" />;
    }
}

export default PublicRoute;