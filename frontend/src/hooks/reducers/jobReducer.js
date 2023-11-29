
//actions
export const JOB_CALL_START = "JOB_CALL_START"
export const JOB_CALL_SUCCESS = "JOB_CALL_SUCCESS"
export const JOB_CALL_FAILURE = "JOB_CALL_FAILURE"
export const JOB_DELETE_SUCCESS = "JOB_DELETE_SUCCESS"
export const JOB_SUBMIT_FAILURE = "JOB_SUBMIT_FAILURE"

//reducer
export const jobReducer = (job, action) => {
    switch (action.type) {
        case JOB_CALL_START:
            return {
                ...job,
                loading: true,
                errors: null
            }
        case JOB_CALL_SUCCESS:
            return {
                ...job,
                data: action.payload,
                loading: false,
                errors: null
            }
        case JOB_CALL_FAILURE:
            return {
                ...job,
                loading: false,
                errors: action.payload
            }
        case JOB_SUBMIT_FAILURE:
            return {
                ...job,
                loading: false,
            }
        case JOB_DELETE_SUCCESS:
            return {
                ...job,
                data: null,
                loading: false,
                errors: null
            }
        default:
            throw new Error("Unhandled action type.")
    }
}