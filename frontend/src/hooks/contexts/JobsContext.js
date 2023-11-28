import { createContext, useReducer, useCallback } from "react";

//services
import APIs from "../../services/api";

//helpers
import { sortDataByLatest } from "../../helpers/helpers";

//utils
import { findTodayUTCDate } from "../../utils/dateTimeUtils";

//actions
import { JOBS_CALL_SUCCESS, JOBS_CALL_FAILURE, JOB_UPDATE_SUCCESS, JOBS_CALL_START, JOB_SUBMIT_FAILURE, JOB_DELETE_SUCCESS } from "../reducers/jobsReducer";

//reducers
import { jobsReducer } from "../reducers/jobsReducer";

const initialState = {
    data: [],
    loading: true,
    errors: null
}

export const JobsContext = createContext({
    jobs: initialState,
    dispatch: () => { },
    getApplications: async () => { },
    updateApplication: async (application_id, application) => { },
    deleteApplication: async (application_id) => { }
})

export const JobsProvider = ({ children }) => {
    const [jobs, dispatch] = useReducer(jobsReducer, initialState)

    const getApplications = useCallback(async () => {
        dispatch({ type: JOBS_CALL_START }) //this solves the get application not updating instantly
        try {
            const response = await APIs.applicationAPI.getApplications()
            //sorting here so when user interacts with the card doesnt automatically get repositioned.
            dispatch({ type: JOBS_CALL_SUCCESS, payload: sortDataByLatest(response.data) })
            return ({
                success: true,
                data: response.data
            })
        } catch (errors) {
            console.log(errors)
            dispatch({ type: JOBS_CALL_FAILURE, payload: errors })
            return ({
                success: false,
                errors: errors
            })
        }
    }, [dispatch])

    const updateApplication = async (application_id, application) => {
        try {
            const response = await APIs.applicationAPI.updateApplication(application_id, {
                ...application,
                application_id: application_id,
                date_edited: findTodayUTCDate(),
            })
            dispatch({ type: JOB_UPDATE_SUCCESS, payload: response.data })
            return ({
                success: true,
                data: response.data
            })
        } catch (errors) {
            console.log(errors)
            dispatch({ type: JOB_SUBMIT_FAILURE })
            return ({
                success: false,
                errors: errors
            })
        }
    }

    const deleteApplication = async (application_id) => {
        try {
            const response = await APIs.applicationAPI.deleteApplication(application_id)
            console.log(response)
            dispatch({ type: JOB_DELETE_SUCCESS, payload: application_id })
            return ({
                success: true,
                data: response.data
            })
        } catch (errors) {
            console.log(errors)
            dispatch({ type: JOB_SUBMIT_FAILURE })
            return({
                success: false,
                errors: errors
            })
        }
    }

    return (
        <JobsContext.Provider
            value={{
                jobs,
                getApplications,
                updateApplication,
                deleteApplication
            }}
        >
            {children}
        </JobsContext.Provider>
    )

}