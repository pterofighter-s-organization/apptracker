//utils
import { validateTime } from "../../../../utils/time"
import { validateDate } from "../../../../utils/date"


function dateValidator(date, setErrorMsgs, label) {

    const check = validateDate(date)

    if (!check) {
        const errorMsg = "Please select a valid date"
        setErrorMsgs(prevErrorMsgs => ({ ...prevErrorMsgs, ["date" + label]: errorMsg }))
    } else {
        setErrorMsgs(prevErrorMsgs => ({ ...prevErrorMsgs, ["date" + label]: "" }))
    }


    //if it fits the requirement
    return check
}

function timeValidator(time, setErrorMsgs, label) {

    const check = validateTime(time)

    if (!check) {
        const errorMsg = "Please select a valid time"
        setErrorMsgs(prevErrorMsgs => ({ ...prevErrorMsgs, ["time" + label]: errorMsg }))
    } else {
        setErrorMsgs(prevErrorMsgs => ({ ...prevErrorMsgs, ["time" + label]: "" }))
    }

    //if it fits the requirement
    return check
}

export default function dateTimeValidator(formData, setErrorMsgs, label) {

    const date = formData["month" + label] + "-" + formData["day" + label] + "-" + formData["year" + label]
    const time = formData["hour" + label] + ":" + formData["min" + label] + ":" + formData["sec" + label]

    // console.log(date, time, formData)

    //empty date only with - and :
    if (date.length === 2 && time.length === 2) {
        return {check: true, dateTime: ""}
    }

    const dateCheck = dateValidator(date, setErrorMsgs, label)
    const timeCheck = timeValidator(time, setErrorMsgs, label)

    if (!dateCheck || !timeCheck) {
        return {check: false, dateTime: ""}
    }

    const dateLabel = "date" + label
    const timeLabel = "time" + label

    setErrorMsgs((prevErrorMsgs) => ({ ...prevErrorMsgs, [dateLabel]: "" }))
    setErrorMsgs((prevErrorMsgs) => ({ ...prevErrorMsgs, [timeLabel]: "" }))

    return {check: true, dateTime: date+" "+time}
}