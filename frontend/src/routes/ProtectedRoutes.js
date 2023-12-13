import { useContext } from "react";
import { Outlet, Navigate } from "react-router-dom";

//contexts
import { AuthContext } from "../hooks/contexts/AuthContext";

export default function ProtectedRoutes() {

    const { auth } = useContext(AuthContext)

    return (
        auth.data.isAuth ?
            <Outlet />
            :
            <Navigate to="/login" />
    )
}