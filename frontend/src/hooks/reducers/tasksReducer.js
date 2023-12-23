

//actions
export const TASKS_GET_START = "TASKS_GET_START"
export const TASKS_GET_SUCCESS = "TASKS_CALL_SUCCESS"
export const TASKS_GET_FAILURE = "TASKS_CALL_FAILURE"
export const TASKS_CREATE_SUCCESS = "TASKS_CREATE_SUCCESS"
export const TASKS_UPDATE_SUCCESS = "TASKS_UPDATE_SUCCESS"
export const TASKS_DELETE_SUCCESS = "TASKS_DELETE_SUCCESS"

//reducer
export const tasksReducer = (tasks, action) => {

    switch (action.type) {
        case TASKS_GET_START:
            return({
                ...tasks,
                errors: null,
                isFetching: true
            })
        case TASKS_GET_SUCCESS:
            return({
                ...tasks,
                data: action.payload,
                errors: null,
                isFetching: false
            })
        case TASKS_GET_FAILURE:
            return({
                ...tasks,
                errors: action.payload,
                isFetching: false
            })
        case TASKS_UPDATE_SUCCESS:
            return({
                ...tasks,
                data: tasks.data.map((task) => (
                    task.task_id === action.payload.task_id ?
                        action.payload
                        :
                        task
                )),
            })
        case TASKS_CREATE_SUCCESS:
            return({
                ...tasks,
                data: [action.payload, ...tasks.data],
            })
        case TASKS_DELETE_SUCCESS:
            return({
                ...tasks,
                data: tasks.data.filter((task) => (
                    task.task_id !== action.payload
                )),
            })
        default:
            throw new Error("Unhandled action type.")
    }
}