import { useEffect } from "react"
import { useParams } from "react-router-dom"

//hooks
import useApplicationManager from "../../hooks/useApplicationManager"

export default function EditApplication(){

    const { id } = useParams()

    // const [formData, setFormData] = useState(null)
    // const [errorMsgs, setErrorMsgs] = useState(null)
    // const [showSuccessModal, setShowSuccessModal] = useState(false)

    const { application, updateApplication } = useApplicationManager(parseInt(id))

    useEffect(() => {
        if (application) {
            document.title = "Editing (" + application.position + ", " + application.company + ") - Job Tracker App"
        }
        return () => document.title = "Job Tracker App"
    }, [id, application])

    
}