import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Books from "../pages/Books";

import Login from "../pages/Login";
import Logout from "../pages/Logout";
import Register from "../pages/Register";

import Profile from "../pages/Profile";
import AddBook from "../pages/Addbook";
import EditBook from "../pages/Editbook";

import PublicRoute from "./PublicRoute";
import PrivateRoute from "./PrivateRoute";

export default function AppRoutes() {
return (
    <Routes>

    <Route path="/" element={<Home />}/>
    <Route path="/Books" element={<Books />}/>
    <Route path="/logout" element={<Logout />}/>

    //* Rutas públicas
    <Route element={<PublicRoute />}>
        <Route path="/login" element={<Login />}/>
        <Route path="/register" element={<Register />}/>
    </Route>
    //*================

    //! Rutas privadas
    <Route element={<PrivateRoute />}>
        <Route path="/profile" element={<Profile />}>
            <Route path="Addbook" element={<AddBook />}/>
            <Route path="Editbook" element={<EditBook bookToEdit={null} />}/>
        </Route>
    </Route>

    </Routes> 
)
}