import { createContext, useReducer, useCallback} from "react";
import { useNavigate } from "react-router-dom";

//services
import APIs from "../services/api";
import { findTodayUTCDate, convertUTCtoLocal } from "../utils/dateTimeUtils";

const initialState = {
    data: {},
    loading: true,
}

export const JOB_CALL_SUCCESS = "JOB_CALL_SUCCESS"
export const JOB_CALL_FAILURE = "JOB_CALL_FAILURE"
export const JOB_DELETE_SUCCESS = "JOB_DELETE_SUCCESS"
// const JOB_DELETE_FAILURE = "JOB_DELETE_FAILURE"
// export const JOB_CALL_START = "JOB_CALL_START"

const jobReducer = (state, action) => {

    // get -> update -> delete
    switch (action.type) {
        // case JOB_CALL_START:
        //     return {
        //         ...state,
        //         loading: true,
        //     }
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
        // case JOB_DELETE_FAILURE:{
        //     return {
        //         ...state,
        //         loading: false,
        //         errors: action.errors
        //     }
        // }
        default:
            throw new Error("Action type doesn't match what's provided.")
    }
}

export const JobContext = createContext(null)

export const JobProvider = ({ children }) => {

    const [state, dispatch] = useReducer(jobReducer, initialState)
    const navigate = useNavigate()

    const getApplication = useCallback(async (id) => {
        try {
            const response = await APIs.applicationAPI.getApplication(id)
            dispatch({ type: JOB_CALL_SUCCESS, payload: response.data })
            return({
                success: true,
                data: response.data
            })
        } catch (error) {
            console.log(error)
            dispatch({ type: JOB_CALL_FAILURE })
            return({
                success: false,
                errors: error.response.data
            })
        }
    }, [])

    const updateApplication = async (id, application) => {

        console.log("local",convertUTCtoLocal(findTodayUTCDate()), findTodayUTCDate())
        try {
            const response = await APIs.applicationAPI.updateApplication(id, {
                ...application,
                application_id: id,
                date_edited: findTodayUTCDate()
            })
            dispatch({ type: JOB_CALL_SUCCESS, payload: response.data })
        } catch (error) {
            console.log(error)
            dispatch({ type: JOB_CALL_FAILURE })
        }
    }

    const submitApplication = async (id, application) => {
        try {
            const response = await APIs.applicationAPI.updateApplication(id, {
                ...application,
                application_id: id,
                user_id: 1,
                date_edited: findTodayUTCDate()
            })
            alert("Successfully submitted! Now redirecting you to the application page.")
            navigate("/job/" + id)
            dispatch({ type: JOB_CALL_SUCCESS, payload: response.data })
            return {
                success: true,
                data: response.data
            }
        } catch (error) {
            console.log(error)
            alert((error.code === "ERR_BAD_REQUEST") ? "Please check the invalid fields and correct them." : error.message)
            dispatch({ type: JOB_CALL_FAILURE, payload: error.response.data })
            return {
                success: false,
                errors: error.response.data
            }
        }
    }

    return (
        <JobContext.Provider value={{
            state,
            dispatch,
            getApplication,
            updateApplication,
            submitApplication
        }}>
            {children}
        </JobContext.Provider>
    )
}