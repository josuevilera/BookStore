import { Navigate, Outlet } from 'react-router-dom';
import { useUser } from '../../src/context/UserContext';

function PublicRoute() {
  const { user } = useUser();  // Accede al usuario desde el contexto

  if (!user?.loggedIn) {
    return <Outlet />;
  } else {
    return <Navigate to="/" />;
  }
};

export default PublicRoute;
