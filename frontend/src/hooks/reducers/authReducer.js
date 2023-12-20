
//actions
export const AUTH_CALL_START = "AUTH_CALL_START"
export const AUTH_REGISTER_SUCCESS = "AUTH_REGISTER_SUCCESS"
export const AUTH_REGISTER_FAILURE = "AUTH_REGISTER_FAILURE"
export const AUTH_LOGIN_SUCCESS = "AUTH_LOGIN_SUCCESS"
export const AUTH_LOGIN_FAILURE = "AUTH_LOGIN_FAILURE"
export const AUTH_GET_SUCCESS = "AUTH_GET_SUCCESS"
export const AUTH_GET_FAILURE = "AUTH_GET_FAILURE"
export const AUTH_LOGOUT_SUCCESS = "AUTH_LOGOUT_SUCCESS"
export const AUTH_LOGOUT_FAILURE = "AUTH_LOGOUT_FAILURE"

//reducer
export const authReducer = (auth, action) => {

    switch (action.type) {
        case AUTH_CALL_START:
            return ({
                ...auth,
                loading: true,
            })
        case AUTH_GET_SUCCESS:
            return ({
                ...auth,
                loading: false,
                data: {
                    username: action.payload,
                    isAuth: true
                },
                errors: null,
            })
        case AUTH_GET_FAILURE:
            return ({
                ...auth,
                loading: false,
                errors: action.payload,
            })
        case AUTH_LOGIN_SUCCESS:
            return ({
                ...auth,
                loading: false,
                data: {
                    username: action.payload,
                    isAuth: true
                },
                errors: null,
            })
        case AUTH_LOGIN_FAILURE:
            return ({
                ...auth,
                loading: false,
                data: {
                    username: null,
                    isAuth: false
                },
                errors: action.payload
            })
        case AUTH_REGISTER_SUCCESS:
            return ({
                ...auth,
                errors: null,
                loading: false,
            })
        case AUTH_REGISTER_FAILURE:
            return ({
                ...auth,
                loading: false,
                errors: action.payload
            })
        case AUTH_LOGOUT_SUCCESS:
            return ({
                ...auth,
                data: {
                    username: null,
                    isAuth: false,
                },
                loading: false,
                errors: null,
            })
        case AUTH_LOGOUT_FAILURE:
            return({
                ...auth,
                loading: false,
                errors: action.payload
            })
        default:
            throw new Error("Unhandled action type.")
    }
}