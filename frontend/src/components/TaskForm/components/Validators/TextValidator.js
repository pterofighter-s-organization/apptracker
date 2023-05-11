
//helper validator only for taskform

export default function textValidator(text, setErrorMsgs) {

    const check = text.length > 0
    if (!check) {
        const errorMsg = "Please don't leave title empty"
        setErrorMsgs(prevErrorMsgs => ({ ...prevErrorMsgs, "text": errorMsg }))
    } else {
        setErrorMsgs(prevErrorMsgs => ({ ...prevErrorMsgs, "text": "" }))
    }

    //if it fits the requirement
    return check
}