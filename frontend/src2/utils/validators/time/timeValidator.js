import { validateTime } from "../../dateTime/time/time"

export function timeValidator(formData, setErrorMsgs, label) {

    const time = formData["hour" + label] + ":" + formData["min" + label] + ":" + formData["sec" + label]

    const check = validateTime(time)

    if (!check) {
        const errorMsg = "Please select a valid time"
        setErrorMsgs(prevErrorMsgs => ({ ...prevErrorMsgs, ["time" + label]: errorMsg }))
    } else {
        setErrorMsgs(prevErrorMsgs => ({ ...prevErrorMsgs, ["time" + label]: "" }))
    }

    //if it fits the requirement
    return { check: check, value: time }
}