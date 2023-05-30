import { useEffect, useState } from "react";

//services
import api from "../services/api";

export default function useApplicationManager(id) {

    const [application, setApplication] = useState(null)
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        fetchApplication(id)
    }, [id])

    async function fetchApplication(application_id) {

        try {
            setIsLoading(true)
            const response = await api.applicationAPI.getApplication(application_id)
            setApplication(response.data)
            setIsLoading(false)
        } catch (error) {
            console.log(error)
            setIsLoading(false)
        }
    }

    async function updateApplication(app) {

        const { application_id } = app

        try {
            // setIsLoading(true)
            const response = await api.applicationAPI.updateApplication(application_id, app)
            setApplication(response.data)
            // setIsLoading(false)
            return true
        } catch (error) {
            console.log(error)
            // setIsLoading(false)
            return false
        }
    }

    async function createApplication(app){

        try{
            // setIsLoading(true)
            const response = await app.applicationAPI.createApplication(app)
            // setIsLoading(false)
            return response.data !== null
        }catch(error){
            console.log(error)
            // setIsLoading(false)
            return false
        }
    }

    return {
        application,
        updateApplication,
        createApplication,
        isLoading
    }
}