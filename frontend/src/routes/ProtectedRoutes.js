import { useContext, useEffect } from "react";
import { Outlet, Navigate } from "react-router-dom";

//components
import { LoadingDisplay } from "../components/Displays/LoadingDisplay";

//contexts
import { AuthContext } from "../hooks/contexts/AuthContext";

export default function ProtectedRoutes() {

    const { auth, getUser } = useContext(AuthContext)

    useEffect(() => {
        getUser()
    }, [getUser])

    //if is null, wait until the response is back from get user
    if (auth.data.isAuth === null || auth.loading) {
        return <LoadingDisplay />
    }

    return (
        auth.data.isAuth ?
            <Outlet />
            :
            <Navigate to="/login" />
    )
}