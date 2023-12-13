import { createContext, useReducer, useEffect } from "react";
import { useNavigate } from "react-router-dom";

//services
import APIs from "../../services/api";

//actions
import { AUTH_CALL_START, AUTH_CALL_FAILURE, AUTH_CALL_SUCCESS, AUTH_CREATE_SUCCESS, AUTH_SUBMIT_FAILURE, AUTH_DELETE_SUCCESS } from "../reducers/authReducer";

//reducer
import { authReducer } from "../reducers/authReducer";
const moment = require('moment')

const initialState = {
    data: {
        username: localStorage.getItem('username') ? localStorage.getItem('username') : null,
        isAuth: localStorage.getItem('isAuth') ? localStorage.getItem('isAuth') : false,
        expireDate: localStorage.getItem('expireDate') ? localStorage.getItem('expireDate') : null
    },
    loading: false,
    errors: null
}

export const AuthContext = createContext({
    auth: initialState,
    loginUser: (user) => { },
    registerUser: (user) => { },
    logoutUser: () => { }
})

export const AuthProvider = ({ children }) => {
    const [auth, dispatch] = useReducer(authReducer, initialState)
    const navigate = useNavigate()

    useEffect(() => {
        if (auth.data.expireDate) {
            setTimeout(() => {
                logoutUser().then((result) => {
                    if (result.success) {
                        alert("You've been logged out!")
                    }
                })
            }, moment(auth.data.expireDate) - moment.now())
        }
    }, [auth.data])

    const loginUser = async (user) => {
        dispatch({ type: AUTH_CALL_START })

        try {
            //don't delete await or else it couldnt wait for the promise to throw error
            await APIs.userAPI.loginUser(user)
            const data = {
                username: user.username,
                //2 weeks for session to expire from now
                expireDate: moment().add({ weeks: 2, days: 0, hours: 0, minutes: 0, seconds: 0 }).toISOString(),
                isAuth: true
            }
            localStorage.setItem('username', data.username)
            localStorage.setItem('isAuth', data.isAuth)
            localStorage.setItem('expireDate', data.expireDate)

            dispatch({ type: AUTH_CALL_SUCCESS, payload: data })
            //reroute to dashboard, here because login is for sure re-routing to dashboard
            navigate("/")
            return ({
                success: true,
                data: data
            })
        } catch (errors) {
            console.log(errors)
            dispatch({ type: AUTH_CALL_FAILURE, payload: errors })
            return ({
                success: false,
                errors: errors
            })
        }
    }

    const registerUser = async (user) => {

        try {
            await APIs.userAPI.registerUser(user)
            dispatch({ type: AUTH_CREATE_SUCCESS })
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

        const clearLocalStorage = () => {
            dispatch({ type: AUTH_DELETE_SUCCESS })
            localStorage.removeItem('isAuth')
            localStorage.removeItem('username')
            localStorage.removeItem('expireDate')
        }

        //this will log out even w/o session existing
        try {
            await APIs.userAPI.logoutUser()
            clearLocalStorage()
            return ({
                success: true,
                data: {}
            })
        } catch (errors) {
            console.log(errors)
            if (errors.response?.code === '404') {
                clearLocalStorage()
                return ({
                    success: true,
                    data: {}
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
                logoutUser
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}