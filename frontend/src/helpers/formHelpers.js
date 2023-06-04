
export function setInputData(setFormData, label) {

    return (
        (newValue) => (setFormData(prevFormData => ({ ...prevFormData, [label]: newValue })))
    )
}

export function findErrorMessages(errorMessages, newErrorMsgs) {

    if(errorMessages){
        Object.entries(errorMessages).forEach(([label, msg]) => {
            if(!msg[0].includes("null")){
                newErrorMsgs[label] = msg[0]
            }
        })
    }
}