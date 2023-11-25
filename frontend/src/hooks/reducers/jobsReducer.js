

//actions
export const JOBS_CALL_START = "JOBS_CALL_START" //this solves the get application not updating instantly
export const JOBS_CALL_SUCCESS = "JOBS_CALL_SUCCESS"
export const JOBS_CALL_FAILURE = "JOBS_CALL_FAILURE"
export const JOB_UPDATE_SUCCESS = "JOB_UPDATE_SUCCESS"
export const JOB_DELETE_SUCCESS = "JOB_DELETE_SUCCESS"

//reducer
export const jobsReducer = (jobs, action) => {

    switch(action.type){
        case JOBS_CALL_START:
            return({
                ...jobs,
                loading: true
            })
        case JOBS_CALL_SUCCESS:
            return({
                ...jobs,
                data: action.payload,
                loading: false
            })
        case JOBS_CALL_FAILURE:
            return({
                ...jobs,
                loading: false
            })
        case JOB_UPDATE_SUCCESS:
            return({
                ...jobs,
                data: (jobs.data.map((job) => (
                    job.application_id === action.payload.application_id ?
                        action.payload
                        :
                        job
                ))),
                loading: false
            })
        case JOB_DELETE_SUCCESS:
            return({
                ...jobs,
                data: (jobs.data.filter((job) => (
                    job.application_id !== action.payload.application_id
                ))),
                loading: false
            })
        default:
            throw new Error("Unhandled action type.")
    }
}
