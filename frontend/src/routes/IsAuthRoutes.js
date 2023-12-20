import { useContext, useEffect, useState } from "react";
import { Outlet, Navigate } from "react-router-dom";

//components
import { LoadingDisplay } from "../components/Displays/LoadingDisplay";
import { ErrorDisplay } from "../components/Displays/ErrorDisplay";

//helpers
import { isCodeBadRequest, isCodeNetworkError } from "../helpers/auth";

//contexts
import { AuthContext } from "../hooks/contexts/AuthContext";

export default function IsAuthRoutes({ isAuth }) {

    //if it is an authenticated route, then redirect it to login when there's an error, if not redirect to dashboard
    const [isValidating, setIsValidating] = useState(false)
    const { auth, getUser, logoutUser } = useContext(AuthContext)

    useEffect(() => {
        //refresh token can be added later, if we check for user and can't find, we will ask again with the refresh token.
        let isMounted = true;

        const validateSession = async () => {
            setIsValidating(true)
            try {
                await getUser()
            } catch (errors) {
                //if the user was logged in, we log them out because session is gone, only happens in bad requests.
                //we gotta make sure the async func doesnt run when the comp unmounts or else it will have racing conditions.
                if (isCodeBadRequest(errors) && isMounted) {
                    //this def finished before it reaches finally (tested*)
                    await logoutUser()
                }
            } finally {
                if (isMounted) {
                    setIsValidating(false)
                }
            }
        }

        validateSession()

        return () => {
            //the unmounting will also be triggered when the dependecies first register (so 2 here)
            isMounted = false
            // console.log("unisMounted", window.location.href)
        }
    }, [getUser, logoutUser])

    //if is null, wait until the response is back from get user
    if (auth.loading || isValidating) {
        return <LoadingDisplay />
    }

    //if is network error, show the error display instead since backend doesn't work
    if (isCodeNetworkError(auth.errors)) {
        return (
            <ErrorDisplay
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