import { createContext, useReducer, useCallback } from "react"

//services
import APIs from "../../services/api"

//utils
import { findTodayUTCDate } from "../../utils/dateTimeUtils"

//actions
import { JOB_CALL_SUCCESS, JOB_CALL_FAILURE, JOB_CALL_START, JOB_SUBMIT_FAILURE, JOB_DELETE_SUCCESS } from "../reducers/jobReducer"

//reducer
import { jobReducer } from "../reducers/jobReducer"

const initialState = {
    data: null,
    loading: true,
    errors: null
}

export const JobContext = createContext({
    job: initialState,
    dispatch: () => { },
    getApplication: async (user_id) => { },
    updateApplication: async (application_id, application) => { },
    createApplication: async (user_id, application) => { },
    deleteApplication: async (application_id) => { },
})

export const JobProvider = ({ children }) => {
    const [job, dispatch] = useReducer(jobReducer, initialState)

    const getApplication = useCallback(async (user_id) => {
        dispatch({ type: JOB_CALL_START })
        try {
            const response = await APIs.applicationAPI.getApplication(user_id)
            dispatch({ type: JOB_CALL_SUCCESS, payload: response.data })
            return {
                success: true,
                data: response.data,
            }
        } catch (errors) {
            console.log(errors)
            dispatch({ type: JOB_CALL_FAILURE, payload: errors })
            return {
                success: false,
                errors: errors
            }
        }
    }, [dispatch])

    const updateApplication = async (application_id, application) => {
        try {
            const response = await APIs.applicationAPI.updateApplication(application_id, {
                ...application,
                application_id: application_id,
                date_edited: findTodayUTCDate(),
            })
            dispatch({ type: JOB_CALL_SUCCESS, payload: response.data })
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

    const createApplication = async (user_id, application) => {
        try {
            const response = await APIs.applicationAPI.createApplication({
                ...application,
                archived: false,
                date_edited: findTodayUTCDate(),
                date_created: findTodayUTCDate(),
                user_id: user_id
            })
            dispatch({ type: JOB_CALL_SUCCESS, payload: response.data })
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
            dispatch({ type: JOB_DELETE_SUCCESS })
            return({
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
