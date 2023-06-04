//utils
import { validateDate } from "../../dateTime/date/date"

export function dateValidator(formData, setErrorMsgs, label) {

    const date = formData["month" + label] + "-" + formData["day" + label] + "-" + formData["year" + label]

    const check = validateDate(date)

    if (!check) {
        const errorMsg = "Please select a valid date"
        setErrorMsgs(prevErrorMsgs => ({ ...prevErrorMsgs, ["date" + label]: errorMsg }))
    } else {
        setErrorMsgs(prevErrorMsgs => ({ ...prevErrorMsgs, ["date" + label]: "" }))
    }


    //if it fits the requirement
    return { check: check, value: date }
}
