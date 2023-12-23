
//actions
export const JOB_GET_SUCCESS = "JOB_GET_SUCCESS"
export const JOB_GET_FAILURE = "JOB_GET_FAILURE"
export const JOB_SUBMIT_SUCCESS = "JOB_SUBMIT_SUCCESS"
export const JOB_DELETE_SUCCESS = "JOB_DELETE_SUCCESS"
 
//reducer
export const jobReducer = (job, action) => {
    switch (action.type) {
        case JOB_GET_SUCCESS:
            return({
                ...job,
                data: action.payload,
                errors: null,
            })
        case JOB_GET_FAILURE:
            return({
                ...job,
                errors: action.payload,
            })
        case JOB_SUBMIT_SUCCESS:
            return({
                ...job,
                data: action.payload,
            })
        case JOB_DELETE_SUCCESS:
            return({
                ...job,
                data: null,
            })
        default:
            throw new Error("Unhandled action type.")
    }
}