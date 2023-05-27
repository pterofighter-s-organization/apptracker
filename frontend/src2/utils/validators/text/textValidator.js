
export default function textValidator(formData, setErrorMsgs, label) {

    const check = formData[label].length > 0

    if (!check) {
        const errorMsg = "Please don't leave the "+label+" empty"
        setErrorMsgs(prevErrorMsgs => ({ ...prevErrorMsgs, [label]: errorMsg }))
    } else {
        setErrorMsgs(prevErrorMsgs => ({ ...prevErrorMsgs, [label]: "" }))
    }

    //if it fits the requirement
    return {check: check, value: formData[label]}
}