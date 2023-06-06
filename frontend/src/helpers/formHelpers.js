
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
    } catch (error) {
        console.log(error, "error messages cannot be found from backend")
    }
}
