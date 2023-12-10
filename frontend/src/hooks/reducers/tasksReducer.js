

//actions
export const TASKS_CALL_START = "TASKS_CALL_START"
export const TASKS_CALL_SUCCESS = "TASKS_CALL_SUCCESS"
export const TASKS_CALL_FAILURE = "TASKS_CALL_FAILURE"
export const TASK_CREATE_SUCCESS = "TASK_CREATE_SUCCESS"
export const TASK_UPDATE_SUCCESS = "TASK_UPDATE_SUCCESS"
export const TASK_DELETE_SUCCESS = "TASK_DELETE_SUCCESS"
export const TASK_SUBMIT_FAILURE = "TASK_SUBMIT_FAILURE"

//reducer
export const tasksReducer = (tasks, action) => {

    switch (action.type) {
        case TASKS_CALL_START:
            return ({
                ...tasks,
                loading: true,
                errors: null
            })
        case TASKS_CALL_SUCCESS:
            return ({
                ...tasks,
                data: action.payload,
                loading: false,
                errors: null
            })
        case TASKS_CALL_FAILURE:
            return ({
                ...tasks,
                loading: false,
                errors: action.payload
            })
        case TASK_CREATE_SUCCESS:
            return ({
                ...tasks,
                data: [action.payload, ...tasks.data],
                loading: false,
                errors: null
            })
        case TASK_UPDATE_SUCCESS:
            return ({
                ...tasks,
                data: (tasks.data.map((task) => (
                    task.task_id === action.payload.task_id ?
                        action.payload
                        :
                        task
                ))),
                loading: false,
                errors: null
            })
        case TASK_SUBMIT_FAILURE:
            return({
                ...tasks,
                loading: false,
            })
        case TASK_DELETE_SUCCESS:
            return({
                ...tasks,
                data: (tasks.data.filter((task) => (
                    task.task_id !== action.payload
                ))),
                loading: false,
                errors: null
            })
        default:
            throw new Error("Unhandled action type.")
    }
}