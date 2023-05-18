

export default function urlValidator(formData, setErrorMsgs, label) {

    const lengthCheck = formData[label].length > 0

    if (!lengthCheck) {
        const errorMsg = "Please don't leave the " + label + " empty"
        setErrorMsgs(prevErrorMsgs => ({ ...prevErrorMsgs, [label]: errorMsg }))
        return false
    }

    const patternCheck = formData[label].includes("http")

    if (!patternCheck) {
        const errorMsg = "Invalid " + label + " link"
        setErrorMsgs(prevErrorMsgs => ({ ...prevErrorMsgs, [label]: errorMsg }))
        return false
    }

    setErrorMsgs(prevErrorMsgs => ({ ...prevErrorMsgs, [label]: "" }))

    return true
}