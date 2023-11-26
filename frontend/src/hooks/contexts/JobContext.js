import { createContext, useReducer, useCallback } from "react"
import { useNavigate } from "react-router-dom"

//services
import APIs from "../../services/api"

//utils
import { findTodayUTCDate } from "../../utils/dateTimeUtils"

//helpers
import { showAPIAlertErrors } from "../../helpers/formHelpers"

//actions
import { JOB_CALL_SUCCESS, JOB_CALL_FAILURE, JOB_CALL_START } from "../reducers/jobReducer"

//reducer
import { jobReducer } from "../reducers/jobReducer"

const initialState = {
    data: null,
    loading: true,
}

export const JobContext = createContext({
    job: initialState,
    dispatch: () => { },
    getApplication: async (user_id) => { },
    updateApplication: async (application_id, application) => { },
    editApplication: async (application_id, application) => { },
    createApplication: async (user_id, application) => { },
    deleteApplication: async (application_id) => { },
})

export const JobProvider = ({ children }) => {
    const [job, dispatch] = useReducer(jobReducer, initialState)
    const navigate = useNavigate()

    const getApplication = useCallback(async (user_id) => {
        dispatch({ type: JOB_CALL_START })
        try {
            const response = await APIs.applicationAPI.getApplication(user_id)
            dispatch({ type: JOB_CALL_SUCCESS, payload: response.data })
            return {
                success: true,
                data: response.data,
            }
        } catch (error) {
            console.error(error)
            dispatch({ type: JOB_CALL_FAILURE })
            return {
                success: false,
                errors: error?.response.data || error.message,
            }
        }
    }, [])

    const updateApplication = async (application_id, application) => {
        try {
            const response = await APIs.applicationAPI.updateApplication(application_id, {
                ...application,
                application_id: application_id,
                date_edited: findTodayUTCDate(),
            })
            dispatch({ type: JOB_CALL_SUCCESS, payload: response.data })
        } catch (error) {
            console.error(error)
            showAPIAlertErrors(error)
            dispatch({ type: JOB_CALL_FAILURE })
        }
    }

    const editApplication = async (application_id, application) => {
        try {
            const response = await APIs.applicationAPI.updateApplication(application_id, {
                ...application,
                application_id: application_id,
                user_id: 1,
                date_edited: findTodayUTCDate(),
            })
            alert("Successfully edited! Now redirecting you to the application page.")
            navigate("/job/" + application_id)
            dispatch({ type: JOB_CALL_SUCCESS, payload: response.data })
            return {
                success: true,
                data: response.data,
            }
        } catch (error) {
            console.error(error)
            showAPIAlertErrors(error)
            dispatch({ type: JOB_CALL_FAILURE, payload: error.response?.data })
            return {
                success: false,
                errors: error?.response.data || error.message,
            }
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
            alert("Successfully submitted! Now redirecting to the newly created application page.")
            navigate("/job/" + response.data.application_id)
            dispatch({ type: JOB_CALL_SUCCESS, payload: response.data })
            return ({
                success: true,
                data: response.data
            })
        } catch (error) {
            console.log(error)
            showAPIAlertErrors(error)
            dispatch({ type: JOB_CALL_FAILURE })
            return ({
                success: false,
                errors: error?.response.data || error.message
            })
        }
    }

    const deleteApplication = async (id) => {
        //code later
    }

    return (
        <JobContext.Provider
            value={{
                job,
                getApplication,
                updateApplication,
                editApplication,
                createApplication,
                deleteApplication
            }}
        >
            {children}
        </JobContext.Provider>
    )
}
