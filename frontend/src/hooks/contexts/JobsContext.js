import { createContext, useReducer, useCallback } from "react";

//services
import APIs from "../../services/api";

//helpers
import { showAPIAlertErrors } from "../../helpers/formHelpers";
import { sortDataByLatest } from "../../helpers/helpers";

//utils
import { findTodayUTCDate } from "../../utils/dateTimeUtils";

//actions
import { JOBS_CALL_SUCCESS, JOBS_CALL_FAILURE, JOB_UPDATE_SUCCESS, JOBS_CALL_START } from "../reducers/jobsReducer";

//reducers
import { jobsReducer } from "../reducers/jobsReducer";

const initialState = {
    data: [],
    loading: true
}

export const JobsContext = createContext({
    jobs: initialState,
    dispatch: () => { },
    getApplications: async () => { },
    updateApplication: async () => { },
    deleteApplication: async () => { }
})

export const JobsProvider = ({ children }) => {

    const [jobs, dispatch] = useReducer(jobsReducer, initialState)

    const getApplications = useCallback(async () => {
        dispatch({ type: JOBS_CALL_START }) //this solves the get application not updating instantly
        try {
            const response = await APIs.applicationAPI.getApplications()
            //sorting here so when user interacts with the card doesnt automatically get repositioned.
            dispatch({ type: JOBS_CALL_SUCCESS, payload: sortDataByLatest(response.data) })
        } catch (error) {
            console.log(error)
            showAPIAlertErrors(error, 'jobs')
            dispatch({ type: JOBS_CALL_FAILURE })
        }
    }, [])

    const updateApplication = async (id, application) => {
        try {
            const response = await APIs.applicationAPI.updateApplication(id, {
                ...application,
                application_id: id,
                date_edited: findTodayUTCDate(),
            })
            dispatch({ type: JOB_UPDATE_SUCCESS, payload: response.data })
        } catch (error) {
            console.log(error)
            showAPIAlertErrors(error, 'job update')
            dispatch({ type: JOBS_CALL_FAILURE })
        }
    }

    const deleteApplication = async (id) => {
        //code later.
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