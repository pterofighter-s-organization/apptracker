import { useContext, useEffect } from "react";
import { Outlet, Navigate } from "react-router-dom";

//components
import { LoadingDisplay } from "../components/Displays/LoadingDisplay";
import { ErrorDisplay } from "../components/Displays/ErrorDisplay";

//contexts
import { AuthContext } from "../hooks/contexts/AuthContext";

export default function IsAuthRoutes({ isAuth }) {

    //if it is an authenticated route, then redirect it to login when there's an error, if not redirect to dashboard
    const { auth, getUser } = useContext(AuthContext)

    useEffect(() => {
        getUser()
    }, [getUser])

    //if is null, wait until the response is back from get user
    if (auth.data.isAuth === null || auth.loading) {
        return <LoadingDisplay />
    }

    //if is network error, show the error display instead since backend doesn't work
    if (auth.errors?.code === 'ERR_NETWORK') {
        return (
            <ErrorDisplay
                label={isAuth ? "Authorized Pages" : "Non Authorized Pages"}
                errors={auth.errors}
            />
        )
    }

    return (
        auth.data.isAuth === isAuth ?
            <Outlet />
            :
            <Navigate to={isAuth ? "/login" : "/"} />
    )
}