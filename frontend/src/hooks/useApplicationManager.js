import { useEffect, useState } from "react";

//services
import api from "../services/api";

//helpers
import * as formHelpers from "../helpers/formHelpers";

export default function useApplicationManager(id) {

    const [application, setApplication] = useState(null)
    const [isLoading, setIsLoading] = useState(false)

    const errorMessages = {
        "position": "",
        "company": "",
        "salary": "",
        "date_applied": "",
        "status": "",
        "resume_link": "",
        "cover_letter_link": "",
        "interview_preparation": "",
        "description": "",
    }

    const [errorMsgs, setErrorMsgs] = useState(errorMessages)

    useEffect(() => {
        if(id){
            fetchApplication(id)
        }
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
        //assign to a new reference
        const newErrorMsgs = Object.assign(errorMessages, {})
        console.log(app)

        //dont need to do loading here because useeffect for status update wont be triggered
        try {
            const response = await api.applicationAPI.updateApplication(application_id, app)
            setApplication(response.data)
            setErrorMsgs(newErrorMsgs)
            return true
        } catch (error) {
            console.log(error)
            formHelpers.findErrorMessages(error, newErrorMsgs)
            setErrorMsgs(newErrorMsgs)
            return false
        }
    }

    async function createApplication(app) {

        const newErrorMsgs = Object.assign(errorMessages, {})
        console.log(app)
        try {
            const response = await api.applicationAPI.createApplication(app)
            setApplication(response.data)
            setErrorMsgs(newErrorMsgs)
            return true
        } catch (error) {
            console.log(error)
            formHelpers.findErrorMessages(error, newErrorMsgs)
            setErrorMsgs(newErrorMsgs)
            return false
        }
    }

    return {
        application,
        updateApplication,
        createApplication,
        errorMsgs,
        isLoading
    }
}