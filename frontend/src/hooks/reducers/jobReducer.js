
//actions
export const JOB_GET_START = "JOB_GET_START"
export const JOB_GET_SUCCESS = "JOB_GET_SUCCESS"
export const JOB_GET_FAILURE = "JOB_GET_FAILURE"
export const JOB_SUBMIT_SUCCESS = "JOB_SUBMIT_SUCCESS"
export const JOB_DELETE_SUCCESS = "JOB_DELETE_SUCCESS"
export const JOB_REFRESH_START = "JOB_REFRESH_START"
export const JOB_REFRESH_END = "JOB_REFRESH_END"

//reducer
export const jobReducer = (job, action) => {
    switch (action.type) {
        case JOB_GET_START:
            return ({
                ...job,
                errors: null,
                isFetching: true
            })
        case JOB_GET_SUCCESS:
            return ({
                ...job,
                data: action.payload,
                errors: null,
                isFetching: false,
            })
        case JOB_GET_FAILURE:
            return ({
                ...job,
                errors: action.payload,
                isFetching: false,
            })
        case JOB_SUBMIT_SUCCESS:
            return ({
                ...job,
                data: action.payload,
            })
        case JOB_DELETE_SUCCESS:
            return ({
                ...job,
                data: null,
            })
        case JOB_REFRESH_START:
            return ({
                ...job,
                isRefresh: true
            })
        case JOB_REFRESH_END:
            return ({
                ...job,
                isRefresh: false
            })
        default:
            throw new Error("Unhandled action type.")
    }
}