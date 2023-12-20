import { createContext, useReducer, useCallback } from "react";
import { useNavigate } from "react-router-dom";

//services
import APIs from "../../services/api";

//actions
import {
    AUTH_CALL_START, AUTH_GET_SUCCESS, AUTH_GET_FAILURE, AUTH_REGISTER_SUCCESS, AUTH_REGISTER_FAILURE,
    AUTH_LOGIN_SUCCESS, AUTH_LOGIN_FAILURE, AUTH_LOGOUT_FAILURE, AUTH_LOGOUT_SUCCESS
} from "../reducers/authReducer";

//helpers
import { isCodeBadRequest } from "../../helpers/auth";

//reducer
import { authReducer } from "../reducers/authReducer";

const initialState = {
    data: {
        username: null,
        isAuth: false
    },
    loading: false,
    errors: null
}

export const AuthContext = createContext({
    auth: initialState,
    loginUser: async (user) => { },
    registerUser: async (user) => { },
    logoutUser: async () => { },
    getUser: async () => { }
})

export const AuthProvider = ({ children }) => {
    const [auth, dispatch] = useReducer(authReducer, initialState)
    const navigate = useNavigate()

    const getUser = useCallback(async () => {
        try {
            const response = await APIs.userAPI.getUser()
            dispatch({ type: AUTH_GET_SUCCESS, payload: response.data.username })
            return response.data.username
        } catch (errors) {
            console.log(errors)
            dispatch({ type: AUTH_GET_FAILURE, payload: errors })
            throw errors
        }
    }, [dispatch])

    const loginUser = async (user) => {
        try {
            //don't delete await or else it couldnt wait for the promise to throw error
            await APIs.userAPI.loginUser(user)
            dispatch({ type: AUTH_LOGIN_SUCCESS, payload: user.username })

            //reroute to dashboard, here because login is for sure re-routing to dashboard
            navigate("/")
            return {
                username: user.username,
                isAuth: true
            }
        } catch (errors) {
            console.log(errors)
            dispatch({ type: AUTH_LOGIN_FAILURE, payload: errors })
            throw errors
        }
    }

    const registerUser = async (user) => {
        try {
            await APIs.userAPI.registerUser(user)
            dispatch({ type: AUTH_REGISTER_SUCCESS })
            return user
        } catch (errors) {
            console.log(errors)
            dispatch({ type: AUTH_REGISTER_FAILURE, payload: errors })
            throw errors
        }
    }

    const logoutUser = useCallback(async () => {
        dispatch({ type: AUTH_CALL_START })

        const handleLogoutData = () => {
            dispatch({ type: AUTH_LOGOUT_SUCCESS })
            alert("You've been logged out!")
        }

        try {
            await APIs.userAPI.logoutUser()
            handleLogoutData()
            return {
                username: null,
                isAuth: false
            }
        } catch (errors) {
            console.log(errors)
            //this will log out even w/o session existing
            if (auth.data.isAuth && isCodeBadRequest(errors)) {
                handleLogoutData()
                return {
                    username: null,
                    isAuth: false
                }
            }
            dispatch({ type: AUTH_LOGOUT_FAILURE, payload: errors })
            throw errors
        }
    }, [dispatch, auth.data.isAuth])

    return (
        <AuthContext.Provider
            value={{
                auth,
                loginUser,
                registerUser,
                logoutUser,
                getUser,
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}