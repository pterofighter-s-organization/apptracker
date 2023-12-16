import { createContext, useReducer, useCallback } from "react";
import { useNavigate } from "react-router-dom";

//services
import APIs from "../../services/api";

//actions
import {
    AUTH_CALL_START, AUTH_SUBMIT_START, AUTH_GET_SUCCESS, AUTH_GET_FAILURE, AUTH_REGISTER_SUCCESS,
    AUTH_LOGIN_SUCCESS, AUTH_LOGIN_FAILURE, AUTH_SUBMIT_FAILURE, AUTH_LOGOUT_SUCCESS
} from "../reducers/authReducer";

//reducer
import { authReducer } from "../reducers/authReducer";

const initialState = {
    data: {
        username: null,
        isAuth: null
    },
    loading: false,
    submitLoading: false,
    errors: null
}

export const AuthContext = createContext({
    auth: initialState,
    loginUser: (user) => { },
    registerUser: (user) => { },
    logoutUser: () => { },
    getUser: () => { }
})

export const AuthProvider = ({ children }) => {
    const [auth, dispatch] = useReducer(authReducer, initialState)
    const navigate = useNavigate()

    const getUser = useCallback(async () => {

        try {
            const response = await APIs.userAPI.getUser()
            dispatch({ type: AUTH_GET_SUCCESS, payload: response.data.username })
            return ({
                success: true,
                data: {
                    username: response.data.username,
                    isAuth: true
                }
            })
        } catch (errors) {
            console.log(errors)
            dispatch({ type: AUTH_GET_FAILURE, payload: errors })
            return ({
                success: false,
                errors: errors,
                data: {
                    username: null,
                    isAuth: false
                }
            })
        }
    }, [dispatch])

    const loginUser = async (user) => {
        dispatch({ type: AUTH_SUBMIT_START })

        try {
            //don't delete await or else it couldnt wait for the promise to throw error
            await APIs.userAPI.loginUser(user)
            dispatch({ type: AUTH_LOGIN_SUCCESS, payload: user.username })
            //reroute to dashboard, here because login is for sure re-routing to dashboard
            navigate("/")
            return ({
                success: true,
                data: {
                    username: user.username,
                    isAuth: true
                }
            })
        } catch (errors) {
            console.log(errors)
            dispatch({ type: AUTH_LOGIN_FAILURE })
            return ({
                success: false,
                errors: errors,
                data: {
                    username: null,
                    isAuth: false
                }
            })
        }
    }

    const registerUser = async (user) => {
        dispatch({ type: AUTH_SUBMIT_START })

        try {
            await APIs.userAPI.registerUser(user)
            dispatch({ type: AUTH_REGISTER_SUCCESS })
            return ({
                success: true,
                data: user
            })
        } catch (errors) {
            console.log(errors)
            dispatch({ type: AUTH_SUBMIT_FAILURE })
            return ({
                success: false,
                errors: errors
            })
        }
    }

    const logoutUser = async () => {
        dispatch({ type: AUTH_CALL_START })

        const loggedOut = () => {
            dispatch({
                type: AUTH_LOGOUT_SUCCESS,
                payload: {
                    isAuth: false
                }
            })
            alert("You've been logged out!")
            return ({
                username: null,
                isAuth: false
            })
        }

        try {
            await APIs.userAPI.logoutUser()
            return ({
                success: true,
                data: loggedOut()
            })
        } catch (errors) {
            console.log(errors)
            //this will log out even w/o session existing
            if (errors.response?.status === 404) {
                return ({
                    success: true,
                    data: loggedOut()
                })
            }
            dispatch({ type: AUTH_SUBMIT_FAILURE })
            return ({
                success: false,
                errors: errors
            })
        }
    }

    return (
        <AuthContext.Provider
            value={{
                auth,
                loginUser,
                registerUser,
                logoutUser,
                getUser
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}