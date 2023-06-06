import { useEffect, useState } from "react";

//services
import api from "../services/api";

export default function useApplicationsManager() {

    const [applications, setApplications] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        fetchApplications()
    }, [])

    async function fetchApplications() {
        try {
            setIsLoading(true)
            const response = await api.applicationAPI.getApplications()
            setApplications(response.data)
            setIsLoading(false)
        } catch (error) {
            console.log(error)
            setApplications(null)
            setIsLoading(false)
        }
    }

    async function updateApplication(app) {

        const { application_id } = app

        //(No need, is fixed) - (archived): loading here because useeffect for status update is triggered because the application status doesnt update fast enough
        try {
            // setIsLoading(true)
            const response = await api.applicationAPI.updateApplication(application_id, app)
            setApplications(prev => prev.map((item) => (item.application_id === response.data.application_id ? response.data : item)))
            // setIsLoading(false)
            return true
        } catch (error) {
            console.log(error)
            // setIsLoading(false)
            return false
        }
    }

    return {
        applications,
        updateApplication,
        isLoading
    }
}