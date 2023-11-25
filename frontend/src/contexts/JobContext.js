import { createContext, useReducer, useCallback } from "react"
import { useNavigate } from "react-router-dom"

//services
import APIs from "../services/api"

//utils
import { findTodayUTCDate } from "../utils/dateTimeUtils"

//helpers
import { handleAPIErrors } from "../helpers/formHelpers"

const initialState = {
    data: null,
    loading: true,
}

export const JOB_CALL_SUCCESS = "JOB_CALL_SUCCESS"
export const JOB_CALL_FAILURE = "JOB_CALL_FAILURE"
export const JOB_DELETE_SUCCESS = "JOB_DELETE_SUCCESS"

const jobReducer = (state, action) => {
    switch (action.type) {
        case JOB_CALL_SUCCESS:
            return {
                ...state,
                data: action.payload,
                loading: false,
            }
        case JOB_CALL_FAILURE:
            return {
                ...state,
                loading: false,
            }
        case JOB_DELETE_SUCCESS:
            return {
                ...state,
                data: null,
                loading: false,
            }
        default:
            throw new Error("Unhandled action type.")
    }
}

export const JobContext = createContext({
    state: initialState,
    dispatch: () => { },
    getApplication: async () => { },
    updateApplication: async () => { },
    editApplication: async () => { },
    createApplication: async () => { },
})

export const JobProvider = ({ children }) => {
    const [state, dispatch] = useReducer(jobReducer, initialState)
    const navigate = useNavigate()

    const getApplication = useCallback(async (id) => {
        try {
            const response = await APIs.applicationAPI.getApplication(id)
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

    const updateApplication = async (id, application) => {
        try {
            const response = await APIs.applicationAPI.updateApplication(id, {
                ...application,
                application_id: id,
                date_edited: findTodayUTCDate(),
            })
            dispatch({ type: JOB_CALL_SUCCESS, payload: response.data })
        } catch (error) {
            console.error(error)
            alert(handleAPIErrors(error))
            dispatch({ type: JOB_CALL_FAILURE })
        }
    }

    const editApplication = async (id, application) => {
        try {
            const response = await APIs.applicationAPI.updateApplication(id, {
                ...application,
                application_id: id,
                user_id: 1,
                date_edited: findTodayUTCDate(),
            })
            alert("Successfully edited! Now redirecting you to the application page.")
            navigate("/job/" + id)
            dispatch({ type: JOB_CALL_SUCCESS, payload: response.data })
            return {
                success: true,
                data: response.data,
            }
        } catch (error) {
            console.error(error)
            alert(handleAPIErrors(error))
            dispatch({ type: JOB_CALL_FAILURE, payload: error.response?.data })
            return {
                success: false,
                errors: error?.response.data || error.message,
            }
        }
    }

    const createApplication = async (application) => {
        try {
            const response = await APIs.applicationAPI.createApplication({
                ...application,
                date_edited: findTodayUTCDate(),
                date_created: findTodayUTCDate(),
                user_id: 1
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
            console.log(error?.response.data || error.message)
            alert(handleAPIErrors(error))
            dispatch({ type: JOB_CALL_FAILURE })
            return ({
                success: false,
                errors: error?.response.data || error.message
            })
        }
    }

    return (
        <JobContext.Provider
            value={{
                state,
                getApplication,
                updateApplication,
                editApplication,
                createApplication
            }}
        >
            {children}
        </JobContext.Provider>
    )
}
