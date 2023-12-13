
//actions
export const AUTH_CALL_START = "AUTH_CALL_START"
export const AUTH_CALL_SUCCESS = "AUTH_CALL_SUCCESS"
export const AUTH_CALL_FAILURE = "AUTH_CALL_FAILURE"
export const AUTH_SUBMIT_FAILURE = "AUTH_SUBMIT_FAILURE"
export const AUTH_DELETE_SUCCESS = "AUTH_DELETE_SUCCESS"

//reducer
export const authReducer = (auth, action) => {

    switch (action.type) {
        case AUTH_CALL_START:
            return({
                ...auth,
                loading: true,
                errors: null
            })
        case AUTH_CALL_SUCCESS:
            return ({
                ...auth,
                loading: false,
                data: {
                    username: action.payload.username,
                    isAuth: action.payload.isAuth,
                    expireDate: action.payload.expireDate
                },
                errors: null
            })
        case AUTH_CALL_FAILURE:
            return({
                ...auth,
                loading: false,
                errors: action.payload
            })
        case AUTH_SUBMIT_FAILURE:
            return({
                ...auth,
                loading: false,
            })
        case AUTH_DELETE_SUCCESS:
            return({
                ...auth,
                data: {
                    username: null,
                    isAuth: false,
                    expireDate: null
                },
                loading: false
            })
        default:
            throw new Error("Unhandled action type.")
    }
}