
export function setInputData(setFormData, label) {

    return (
        (newValue) => (setFormData(prevFormData => ({ ...prevFormData, [label]: newValue })))
    )
}

export function findErrorMessages(errorData, newErrorMsgs) {

    try {
        const errorResponse = errorData.response
        if (errorResponse.status < 400 || errorResponse.status > 499) {
            console.log("not client error")
            return false
        }

        const errorResponseMessages = errorResponse.data
        if(errorResponseMessages){
            Object.entries(errorResponseMessages).forEach(([label, msg]) => {
                newErrorMsgs[label] = msg[0]
            })
            return true
        }else{
            return false
        }
    } catch (error) {
        console.log(error)
        return false
    }
}

export function findErrorModalMessage(error, ifHumanErrors) {

    if (ifHumanErrors) {
        return {
            status: false,
            errorModalMessage: "Please check the invalid fields and correct them."
        }
    }
    return {
        status: false,
        errorModalMessage: error.message
    }
}

