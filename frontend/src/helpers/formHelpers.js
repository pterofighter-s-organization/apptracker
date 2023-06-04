
export function setInputData(setFormData, label) {

    return (
        (newValue) => (setFormData(prevFormData => ({ ...prevFormData, [label]: newValue })))
    )
}

export function findErrorMessages(errorData, newErrorMsgs) {

    try {
        const errorMessages = errorData.response.data
        Object.entries(errorMessages).forEach(([label, msg]) => {
            if (!msg[0].includes("null")) {
                newErrorMsgs[label] = msg[0]
            }
        })
    } catch (error) {
        console.log(error, "error messages cannot be found from backend, if is a null error message then ignore this error, on purpose to solve validating date for now.")
    }
}

export function findErrors(errorMsgs) {

    Object.entries(errorMsgs).forEach(([_, msg]) => {
        console.log(msg)
        if (msg.length > 0) {
            //null so it doenst have to find new error messages
            throw new Error(null)
        }
    })

    return true
}