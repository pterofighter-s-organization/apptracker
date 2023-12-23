
//actions
export const AUTH_REGISTER_SUCCESS = "AUTH_REGISTER_SUCCESS"
export const AUTH_REGISTER_FAILURE = "AUTH_REGISTER_FAILURE"
export const AUTH_LOGOUT_START = "AUTH_LOGOUT_START"
export const AUTH_LOGOUT_SUCCESS = "AUTH_LOGOUT_SUCCESS"
export const AUTH_LOGOUT_FAILURE = "AUTH_LOGOUT_FAILURE"
export const AUTH_VALIDATE_SUCCESS = "AUTH_VALIDATE_SUCCESS"
export const AUTH_VALIDATE_FAILURE = "AUTH_VALIDATE_FAILURE"

//reducer
export const authReducer = (auth, action) => {

    switch (action.type) {
        case AUTH_VALIDATE_SUCCESS:
            return ({
                ...auth,
                data: {
                    username: action.payload,
                    isAuth: true
                },
                errors: null,
            })
        case AUTH_VALIDATE_FAILURE:
            return ({
                ...auth,
                errors: action.payload,
            })
        case AUTH_REGISTER_SUCCESS:
            return ({
                ...auth,
                errors: null,
            })
        case AUTH_REGISTER_FAILURE:
            return ({
                ...auth,
                errors: action.payload
            })
        case AUTH_LOGOUT_START:
            return({
                ...auth,
                isLoggingOff: true,
                errors: null,            
            })
        case AUTH_LOGOUT_SUCCESS:
            return ({
                ...auth,
                data: {
                    username: null,
                    isAuth: false,
                },
                errors: null,
                isLoggingOff: false,
            })
        case AUTH_LOGOUT_FAILURE:
            return({
                ...auth,
                errors: action.payload,
                isLoggingOff: false
            })
        default:
            throw new Error("Unhandled action type.")
    }
}