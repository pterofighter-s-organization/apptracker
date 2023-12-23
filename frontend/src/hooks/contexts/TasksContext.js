import { createContext, useCallback, useReducer } from "react";

//services
import APIs from "../../services/api";

//utils
import { findTodayUTCDate } from "../../utils/dateTime";

//actions
import {
    TASKS_GET_START, TASKS_GET_SUCCESS, TASKS_GET_FAILURE,
    TASKS_CREATE_SUCCESS, TASKS_UPDATE_SUCCESS, TASKS_DELETE_SUCCESS
} from "../reducers/tasksReducer";

//reducer
import { tasksReducer } from "../reducers/tasksReducer";

const initialState = {
    data: [],
    isFetching: true,
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
        dispatch({ type: TASKS_GET_START })

        try {
            const response = await APIs.taskAPI.getTasks()
            dispatch({ type: TASKS_GET_SUCCESS, payload: response.data })
            return response.data
        } catch (errors) {
            console.log(errors)
            dispatch({ type: TASKS_GET_FAILURE, payload: errors })
            throw errors
        }
    }, [dispatch])

    const getJobTasks = useCallback(async (application_id) => {
        dispatch({ type: TASKS_GET_START })

        try {
            const response = await APIs.taskAPI.getApplicationTasks(application_id)
            dispatch({ type: TASKS_GET_SUCCESS, payload: response.data })
            return response.data
        } catch (errors) {
            console.log(errors)
            dispatch({ type: TASKS_GET_FAILURE, payload: errors })
            throw errors
        }
    }, [dispatch])

    const createJobTask = async (application_id, task) => {
        try {
            const response = await APIs.taskAPI.createTask({
                ...task,
                application_id: application_id,
                date_edited: findTodayUTCDate(),
                date_created: findTodayUTCDate(),
            })
            dispatch({ type: TASKS_CREATE_SUCCESS, payload: response.data })
            return response.data
        } catch (errors) {
            console.log(errors)
            throw errors
        }
    }

    const updateJobTask = async (task_id, task) => {
        try {
            const response = await APIs.taskAPI.updateTask(task_id, {
                ...task,
                date_edited: findTodayUTCDate(),
                last_archived: task.archived
            })
            dispatch({ type: TASKS_UPDATE_SUCCESS, payload: response.data })
            return response.data
        } catch (errors) {
            console.log(errors)
            throw errors
        }
    }

    const deleteJobTask = async (task_id) => {
        try {
            await APIs.taskAPI.deleteTask(task_id)
            dispatch({ type: TASKS_DELETE_SUCCESS, payload: task_id })
            return task_id
        } catch (errors) {
            console.log(errors)
            throw errors
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