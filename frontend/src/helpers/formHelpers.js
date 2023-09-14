
export function setInputData(setFormData, label) {

    return (
        (newValue) => (setFormData(prevFormData => ({ ...prevFormData, [label]: newValue })))
    )
}

export function findErrorMessages(errorData, newErrorMsgs) {

    try {
        const errorMessages = errorData.response.data
        Object.entries(errorMessages).forEach(([label, msg]) => {
            newErrorMsgs[label] = msg[0]
        })
        return true
    } catch (error) {
        console.log(error, "error messages cannot be found from backend")
        return false
    }
}

export function findErrorModalMessage(error, ifHumanErrors){

    if(ifHumanErrors){
        return{
            status: false,
            errorModalMessage: "Please check the invalid fields and correct them."
        }
    }
    return {
        status: false,
        errorModalMessage: error.message
    }
}

