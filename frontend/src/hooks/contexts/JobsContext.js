import { createContext, useReducer, useCallback } from "react";

//services
import APIs from "../../services/api";

//helpers
import { sortDataByLatest } from "../../helpers/helpers";

//utils
import { findTodayUTCDate } from "../../utils/dateTime";

//actions
import {
    JOBS_GET_SUCCESS, JOBS_GET_FAILURE, JOBS_UPDATE_SUCCESS,
    JOBS_DELETE_SUCCESS, JOBS_REFRESH_START, JOBS_REFRESH_END
} from "../reducers/jobsReducer";

//reducers
import { jobsReducer } from "../reducers/jobsReducer";

const initialState = {
    data: [],
    isRefresh: false,
    errors: null
}

export const JobsContext = createContext({
    jobs: initialState,
    // dispatch: () => { },
    getApplications: async () => { },
    updateApplication: async (application_id, application, isRefresh) => { },
    deleteApplication: async (application_id) => { }
})

export const JobsProvider = ({ children }) => {
    const [jobs, dispatch] = useReducer(jobsReducer, initialState)

    const getApplications = useCallback(async () => {
        try {
            const response = await APIs.applicationAPI.getApplications()
            //sorting here so when user interacts with the card doesnt automatically get repositioned.
            dispatch({ type: JOBS_GET_SUCCESS, payload: sortDataByLatest(response.data) })
            return response.data
        } catch (errors) {
            console.log(errors)
            dispatch({ type: JOBS_GET_FAILURE, payload: errors })
            throw errors
        }
    }, [dispatch])

    const updateApplication = async (application_id, application, isRefresh) => {
        if (isRefresh) {
            dispatch({ type: JOBS_REFRESH_START })
        }

        try {
            const response = await APIs.applicationAPI.updateApplication(application_id, {
                ...application,
                application_id: application_id,
                date_edited: findTodayUTCDate(),
            })

            dispatch({ type: JOBS_UPDATE_SUCCESS, payload: response.data })
            return response.data
        } catch (errors) {
            console.log(errors)
            throw errors
        } finally {
            if (isRefresh) {
                dispatch({ type: JOBS_REFRESH_END })
            }
        }
    }

    const deleteApplication = async (application_id) => {
        dispatch({ type: JOBS_REFRESH_START })
        try {
            await APIs.applicationAPI.deleteApplication(application_id)
            dispatch({ type: JOBS_DELETE_SUCCESS, payload: application_id })
            return application_id
        } catch (errors) {
            console.log(errors)
            throw errors
        } finally {
            dispatch({ type: JOBS_REFRESH_END })
        }
    }

    return (
        <JobsContext.Provider
            value={{
                jobs,
                getApplications,
                updateApplication,
                deleteApplication,
            }}
        >
            {children}
        </JobsContext.Provider>
    )

}