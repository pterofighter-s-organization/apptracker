import { useEffect, useState } from "react";

//services
import api from "../services/api";

export default function useTasksManager() {

    const [tasks, setTasks] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        fetchAllTasks()
    }, [])

    async function fetchAllTasks() {

        try{
            setIsLoading(true)
            const response = await api.taskAPI.getTasks()
            setTasks(response.data)
            setIsLoading(false)
        }catch(error){
            console.log(error)
            setIsLoading(false)
        }
    }

    return {
        tasks,
        isLoading
    }
}