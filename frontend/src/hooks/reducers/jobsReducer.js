

//actions
export const JOBS_GET_START = "JOBS_GET_START"
export const JOBS_GET_SUCCESS = "JOBS_GET_SUCCESS"
export const JOBS_GET_FAILURE = "JOBS_GET_FAILURE"
export const JOBS_UPDATE_SUCCESS = "JOBS_UPDATE_SUCCESS"
export const JOBS_DELETE_SUCCESS = "JOBS_DELETE_SUCCESS"
export const JOBS_REFRESH_START = "JOBS_REFRESH_START"
export const JOBS_REFRESH_END = "JOBS_REFRESH_END"

//reducer
export const jobsReducer = (jobs, action) => {

    switch (action.type) {
        case JOBS_GET_START:
            return({
                ...jobs,
                errors: null,
                isFetching: true,
            })
        case JOBS_GET_SUCCESS:
            return ({
                ...jobs,
                data: action.payload,
                errors: null,
                isFetching: false,
            })
        case JOBS_GET_FAILURE:
            return ({
                ...jobs,
                errors: action.payload,
                isFetching: false,
            })
        case JOBS_UPDATE_SUCCESS:
            return ({
                ...jobs,
                data: jobs.data.map((job) => (
                    job.application_id === action.payload.application_id ?
                        action.payload
                        :
                        job
                )),
            })
        case JOBS_DELETE_SUCCESS:
            return ({
                ...jobs,
                data: jobs.data.filter((job) => (
                    job.application_id !== action.payload
                )),
            })
        case JOBS_REFRESH_START:
            return({
                ...jobs,
                isRefresh: true,
            })
        case JOBS_REFRESH_END:
            return ({
                ...jobs,
                isRefresh: false,
            })
        default:
            throw new Error("Unhandled action type.")
    }
}
