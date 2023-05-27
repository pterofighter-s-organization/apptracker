import { useEffect, useState } from "react";

//services
import api from "../services/api";

export default function useAppTasksManager(id) {

    const [tasks, setTasks] = useState([])
    const [isLoading, setIsLoading] = useState(false)

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

    async function createAppTask(task) {

        const current = tasks
        setTasks(null)

        try {
            setIsLoading(true)
            const response = await api.taskAPI.createTask(task)
            setTasks([...current, ...response.data])
            setIsLoading(false)
            return true
        } catch (error) {
            console.log(error)
            setTasks(current)
            setIsLoading(false)
            return false
        }
    }

    return {
        tasks,
        createAppTask,
        isLoading
    }
}