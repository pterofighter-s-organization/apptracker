import { useEffect, useState } from "react";

//services
import api from "../services/api";

//helpers
import * as formHelpers from "../helpers/formHelpers";

export default function useAppTasksManager(id) {

    const [tasks, setTasks] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    const errorMessages = {
        "application_id": "",
        "title": "",
        "date_due": "",
        "company": "",
        "position": "",
        "section": "",
        "priority": "",
    }

    const [errorMsgs, setErrorMsgs] = useState(errorMessages)

    useEffect(() => {
        fetchAppTasks(id)
    }, [id])

    async function fetchAppTasks(application_id) {

        try {
            setIsLoading(true)
            const response = await api.taskAPI.getApplicationTasks(application_id)
            setTasks(response.data)
            setIsLoading(false)
        } catch (error) {
            console.log(error)
            setIsLoading(false)
        }
    }

    async function updateAppTask(task) {

        try {
            const response = await api.taskAPI.updateTask(task.task_id, task)
            setTasks(prev => prev.map((item) => (item.task_id === response.data.task_id) ? response.data : item))
            return
        } catch (error) {
            console.log(error)
            return
        }
    }

    async function createNewTask(task) {

        const current = tasks
        //assign to a new reference
        const newErrorMsgs = Object.assign(errorMessages, {})

        // console.log(task)
        try {
            const response = await api.taskAPI.createTask(task)
            setTasks([...current, response.data])
            setErrorMsgs(newErrorMsgs)
            return {
                status: true,
                errorModalMessage: null
            }
        } catch (error) {
            console.log(error)
            const ifHumanErrors = formHelpers.findErrorMessages(error, newErrorMsgs)
            setErrorMsgs(newErrorMsgs)
            return formHelpers.findErrorModalMessage(error, ifHumanErrors)
        }
    }

    return {
        tasks,
        updateAppTask,
        createNewTask,
        errorMsgs,
        isLoading
    }
}