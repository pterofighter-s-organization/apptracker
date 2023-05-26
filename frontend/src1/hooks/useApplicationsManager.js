import { useEffect } from "react";

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
            setIsLoading(false)
        }
    }

    async function updateApplication(app) {

        const { application_id } = app
        const current = applications
        //test, change later*
        setApplications(null)

        try {
            setIsLoading(true)
            const response = await api.applicationAPI.updateApplication(application_id, app)
            setApplications(current.map((item) => (item.application_id === response.data.application_id ? response.data : item)))
            setIsLoading(false)
            return true
        } catch (error) {
            console.log(error)
            //test, change later*
            setApplications(current)
            setIsLoading(false)
            return false
        }
    }

    return {
        applications,
        updateApplication,
        isLoading
    }
}