import { createContext, useReducer, useCallback } from "react";

//services
import APIs from "../../services/api";

//actions
import { AUTH_CALL_START, AUTH_CALL_FAILURE, AUTH_CALL_SUCCESS, AUTH_SUBMIT_FAILURE, AUTH_DELETE_SUCCESS } from "../reducers/authReducer";

//reducer
import { authReducer } from "../reducers/authReducer";

const moment = require('moment')

//store token here
//user info here as well
//make a timeout on storing this info only for certain time limit
const initialState = {
    data: {
        username: localStorage.getItem('username') ? JSON.parse(localStorage.getItem('username')) : null,
        isAuth: localStorage.getItem('isAuth') ? JSON.parse(localStorage.getItem('isAuth')) : false,
        expireDate: localStorage.getItem('expireDate') ? JSON.parse(localStorage.getItem('expireDate')) : null
    },
    loading: false,
    errors: null
}

export const AuthContext = createContext({
    auth: initialState,
    loginUser: (user) => { },
    createUser: (user) => { }
})

export const AuthProvider = ({ children }) => {
    const [auth, dispatch] = useReducer(authReducer, initialState)

    const loginUser = useCallback(async (user) => {
        dispatch({ type: AUTH_CALL_START })

        try {
            const response = APIs.userAPI.loginUser(user)
            const expireDate = moment().add({ weeks: 0, days: 1, hours: 1, minutes: 1 }).toDate();
            const isAuth = true
            dispatch({ type: AUTH_CALL_SUCCESS, payload: response.data })
            return ({
                success: true,
                data: response
            })
        } catch (errors) {
            console.log(errors)
            dispatch({ type: AUTH_CALL_FAILURE, payload: errors })
            return ({
                success: false,
                errors: errors
            })
        }
    }, [dispatch])

    const createUser = async (user) => {

        try {
            const response = APIs.userAPI.createUser(user)
            dispatch({ type: AUTH_CALL_SUCCESS, payload: response.data })
            return ({
                success: true,
                data: response.data
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

    const clearUserData = () => {
        //removing everything when logging out
        localStorage.removeItem('isAuth')
        localStorage.removeItem('username')
        localStorage.removeItem('expireDate')

        
    }

    const logoutUser = async (user) => {

        try {
            const response = APIs.userAPI.logoutUser()
            dispatch({ type: AUTH_DELETE_SUCCESS })
            return ({
                success: true,
                data: response
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

    return (
        <AuthContext.Provider
            value={{
                auth,
                loginUser,
                createUser
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}