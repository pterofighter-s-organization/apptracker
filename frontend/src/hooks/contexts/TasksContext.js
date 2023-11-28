import { createContext, useCallback, useReducer } from "react";

//services
import APIs from "../../services/api";

//utils
import { findTodayUTCDate } from "../../utils/dateTimeUtils";

//actions
import { TASKS_CALL_START, TASKS_CALL_FAILURE, TASKS_CALL_SUCCESS, TASK_CREATE_SUCCESS, TASK_UPDATE_SUCCESS, TASK_DELETE_SUCCESS, TASK_SUBMIT_FAILURE } from "../reducers/tasksReducer";

//reducer
import { tasksReducer } from "../reducers/tasksReducer";

const initialState = {
    data: [],
    loading: false,
    errors: null
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
            return ({
                success: true,
                data: response.data
            })
        } catch (errors) {
            console.log(errors)
            dispatch({ type: TASKS_CALL_FAILURE, payload: errors })
            return ({
                success: false,
                errors: errors
            })
        }
    }, [dispatch])

    const getJobTasks = useCallback(async (application_id) => {
        dispatch({ type: TASKS_CALL_START })

        try {
            const response = await APIs.taskAPI.getApplicationTasks(application_id)
            dispatch({ type: TASKS_CALL_SUCCESS, payload: response.data })
            return ({
                success: true,
                data: response.data
            })
        } catch (errors) {
            console.log(errors)
            dispatch({ type: TASKS_CALL_FAILURE, payload: errors })
            return ({
                success: false,
                errors: errors
            })
        }
    }, [dispatch])

    const createJobTask = async (application_id, task) => {
        try {
            const response = await APIs.taskAPI.createTask({
                ...task,
                application_id: application_id,
                date_edited: findTodayUTCDate(),
                date_created: findTodayUTCDate(),
                archived: false
            })
            dispatch({ type: TASK_CREATE_SUCCESS, payload: response.data })
            return ({
                success: true,
                data: response.data
            })
        } catch (errors) {
            console.log(errors)
            dispatch({ type: TASK_SUBMIT_FAILURE })
            return ({
                success: false,
                errors: errors
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
            return ({
                success: true,
                data: response.data
            })
        } catch (errors) {
            console.log(errors)
            dispatch({ type: TASK_SUBMIT_FAILURE })
            return ({
                success: false,
                errors: errors
            })
        }
    }

    const deleteJobTask = async (task_id) => {
        try {
            const response = await APIs.taskAPI.deleteTask(task_id)
            dispatch({ type: TASK_DELETE_SUCCESS, payload: task_id })
            return ({
                success: true,
                data: response.data
            })
        } catch (errors) {
            console.log(errors)
            dispatch({ type: TASK_SUBMIT_FAILURE })
            return ({
                success: false,
                errors: errors
            })
        }
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