//utils
import { validateTime, findTimeDifference } from "../../../../utils/dateTime/time/time"
import { validateDate } from "../../../../utils/dateTime/date/date"


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

    const dateCheck = dateValidator(date, setErrorMsgs, label)
    const timeCheck = timeValidator(time, setErrorMsgs, label)

    if (!dateCheck || !timeCheck) {
        return {check: false, value: ""}
    }

    const dateLabel = "date" + label
    const timeLabel = "time" + label

    const timeDiffObj = findTimeDifference("today", date+" "+time)

    if(timeDiffObj.daysLeft < 0){
        setErrorMsgs((prevErrorMsgs) => ({...prevErrorMsgs, [timeLabel]: ""}))
        setErrorMsgs((prevErrorMsgs) => ({...prevErrorMsgs, [dateLabel]: "The current selected date is before today"}))
        return false
    } if(timeDiffObj.secondsLeft < 0){
        setErrorMsgs((prevErrorMsgs) => ({...prevErrorMsgs, [dateLabel]: ""}))
        setErrorMsgs((prevErrorMsgs) => ({...prevErrorMsgs, [timeLabel]: "The current selected time is before the current time"}))
        return false
    } 

    setErrorMsgs((prevErrorMsgs) => ({ ...prevErrorMsgs, [dateLabel]: "" }))
    setErrorMsgs((prevErrorMsgs) => ({ ...prevErrorMsgs, [timeLabel]: "" }))

    return {check: true, value: date+" "+time}
}