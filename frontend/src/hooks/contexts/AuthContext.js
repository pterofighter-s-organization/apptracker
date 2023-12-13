import { createContext, useReducer, useCallback } from "react";

//services
import APIs from "../../services/api";

//actions
import { AUTH_CALL_START, AUTH_CALL_FAILURE, AUTH_CALL_SUCCESS, AUTH_SUBMIT_FAILURE } from "../reducers/authReducer";

//reducer
import { authReducer } from "../reducers/authReducer";


const initialState = {
    data: null,
    loading: false,
    errors: null
}

export const AuthContext = createContext({
    auth: initialState,
    getUser: (user) => { },
    createUser: (user) => { }
})

export const AuthProvider = ({ children }) => {
    const [auth, dispatch] = useReducer(authReducer, initialState)

    const getUser = useCallback(async (user) => {
        dispatch({ type: AUTH_CALL_START })

        try {
            const response = APIs.userAPI.loginUser(user)
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

    return (
        <AuthContext.Provider
            value={{
                auth,
                getUser,
                createUser
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}