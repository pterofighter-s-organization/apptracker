import { createContext, useCallback, useReducer } from "react";

//helpers
import { showAPIAlertErrors } from "../../helpers/formHelpers";

//services
import APIs from "../../services/api";

//utils
import { findTodayUTCDate } from "../../utils/dateTimeUtils";

//actions
import { TASKS_CALL_START, TASKS_CALL_FAILURE, TASKS_CALL_SUCCESS, TASK_CREATE_SUCCESS, TASK_UPDATE_SUCCESS } from "../reducers/tasksReducer";

//reducer
import { tasksReducer } from "../reducers/tasksReducer";

const initialState = {
    data: [],
    loading: true
}

export const TasksContext = createContext({
    tasks: initialState,
    getTasks: async () => { },
    getJobTasks: async (application_id) => { },
    createJobTask: async (application_id, task) => { },
    updateJobTask: async (task_id, task) => { },
    deleteJobTask: async (task_id) => { }
})

export const TasksProvider = ({ children }) => {

    const [tasks, dispatch] = useReducer(tasksReducer, initialState)

    const getTasks = useCallback(async () => {
        dispatch({ type: TASKS_CALL_START })
        try {
            const response = await APIs.taskAPI.getTasks()
            dispatch({ type: TASKS_CALL_SUCCESS, payload: response.data })
        } catch (error) {
            console.log(error)
            showAPIAlertErrors(error, "tasks")
            dispatch({ type: TASKS_CALL_FAILURE })
        }
    }, [])

    const getJobTasks = useCallback(async (application_id) => {
        dispatch({ type: TASKS_CALL_START })
        try {
            const response = await APIs.taskAPI.getApplicationTasks(application_id)
            dispatch({ type: TASKS_CALL_SUCCESS, payload: response.data })
        } catch (error) {
            console.log(error)
            showAPIAlertErrors(error, "job tasks")
            dispatch({ type: TASKS_CALL_FAILURE })
        }
    }, [])

    const createJobTask = async (application_id, task) => {
        try {
            const response = await APIs.taskAPI.createTask({
                ...task,
                application_id: application_id,
                date_edited: findTodayUTCDate(),
                date_created: findTodayUTCDate(),
                archived: false
            })
            alert("Successful, task has been added!")
            dispatch({ type: TASK_CREATE_SUCCESS, payload: response.data })
            return ({
                success: true,
                data: response.data
            })
        } catch (error) {
            console.log(error)
            showAPIAlertErrors(error)
            dispatch({ type: TASKS_CALL_FAILURE })
            return ({
                success: false,
                errors: error?.response.data || error.message
            })
        }
    }

    const updateJobTask = async (task_id, task) => {
        try {
            const response = await APIs.taskAPI.updateTask(task_id, {
                ...task,
                date_edited: findTodayUTCDate(),
            })
            dispatch({ type: TASK_UPDATE_SUCCESS, payload: response.data })
        } catch (error) {
            console.log(error)
            showAPIAlertErrors(error, "task update")
            dispatch({ type: TASKS_CALL_FAILURE })
        }
    }

    const deleteJobTask = async (task_id) => {
        //code later
    }

    return (
        <TasksContext.Provider
            value={{
                tasks,
                getTasks,
                getJobTasks,
                createJobTask,
                updateJobTask,
                deleteJobTask
            }}
        >
            {children}
        </TasksContext.Provider>
    )
}