import { createContext, useReducer, useCallback } from "react"

//services
import APIs from "../../services/api"

//utils
import { findTodayUTCDate } from "../../utils/dateTime"

//actions
import {
    JOB_GET_SUCCESS, JOB_GET_FAILURE, JOB_SUBMIT_SUCCESS, JOB_DELETE_SUCCESS
} from "../reducers/jobReducer"

//reducer
import { jobReducer } from "../reducers/jobReducer"

const initialState = {
    data: null,
    errors: null
}

export const JobContext = createContext({
    job: initialState,
    getApplication: async (application_id) => { },
    updateApplication: async (application_id, application) => { },
    createApplication: async (application) => { },
    deleteApplication: async (application_id) => { },
})

export const JobProvider = ({ children }) => {
    const [job, dispatch] = useReducer(jobReducer, initialState)

    const getApplication = useCallback(async (application_id) => {
        try {
            const response = await APIs.applicationAPI.getApplication(application_id)
            dispatch({ type: JOB_GET_SUCCESS, payload: response.data })
            return response.data
        } catch (errors) {
            console.log(errors)
            dispatch({ type: JOB_GET_FAILURE, payload: errors })
            throw errors
        }
    }, [dispatch])

    const updateApplication = async (application_id, application) => {
        try {
            const response = await APIs.applicationAPI.updateApplication(application_id, {
                ...application,
                application_id: application_id,
                date_edited: findTodayUTCDate(),
            })
            dispatch({ type: JOB_SUBMIT_SUCCESS, payload: response.data })
            return response.data
        } catch (errors) {
            console.log(errors)
            throw errors
        }
    }

    const createApplication = async (application) => {
        try {
            const response = await APIs.applicationAPI.createApplication({
                ...application,
                archived: false,
                date_edited: findTodayUTCDate(),
                date_created: findTodayUTCDate(),
            })
            dispatch({ type: JOB_SUBMIT_SUCCESS, payload: response.data })
            return response.data
        } catch (errors) {
            console.log(errors)
            throw errors
        }
    }

    const deleteApplication = async (application_id) => {
        try {
            await APIs.applicationAPI.deleteApplication(application_id)
            dispatch({ type: JOB_DELETE_SUCCESS })
            return application_id
        } catch (errors) {
            console.log(errors)
            throw errors
        }
    }

    return (
        <JobContext.Provider
            value={{
                job,
                getApplication,
                updateApplication,
                createApplication,
                deleteApplication
            }}
        >
            {children}
        </JobContext.Provider>
    )
}
