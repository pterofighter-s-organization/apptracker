import { useEffect, useState } from "react";

//services
import api from "../services/api"

//helpers
import * as formHelpers from "../helpers/formHelpers"

export default function useUserManager() {

    const [user, setUser] = useState({
        "email": "test234@email.com",
        "username": "",
        "password": ""

    })

    const [errorMsgs, setErrorMsgs] = useState({
        email: "",
        username: "",
        password: "",
        newPassword: "",
        confirmedPassword: ""
    })

    // const [isLoading, setIsLoading] = useState(false)

    const getUser = (user) => {

        const newErrorMsgs = Object.assign(errorMsgs, {})

        try {
            const response = api.userAPI.getUser(user)
            setUser(response.data)
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

    const createUser = (user) => {

        const newErrorMsgs = Object.assign(errorMsgs, {})

        try {
            const response = api.userAPI.createUser(user)
            setUser(response.data)
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

    return{
        user,
        getUser,
        createUser,
        errorMsgs,
    }
}