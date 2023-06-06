//utils
import { dateValidator } from "../date/dateValidator"
import { timeValidator } from "../time/timeValidator"
import { findTimeDifference } from "../../dateTime/time/time"

export default function dateTimeValidator(formData, setErrorMsgs, label, allowEmpty, allowPastDates) {

    // console.log(date, time, formData)

    //empty date only with 2(-) and 2(:)+"00"
    if (allowEmpty) {
        if (formData["month" + label].length === 0 && formData["day" + label].length === 0 && formData["year" + label].length === 0){
            if(formData["hour"+label].length === 0 && formData["min"+label].length === 0){
                return { check: true, value: "" }
            }
        }
    }

    const dateCheck = dateValidator(formData, setErrorMsgs, label)
    const timeCheck = timeValidator(formData, setErrorMsgs, label)

    if (!dateCheck.check || !timeCheck.check) {
        return { check: false, value: "" }
    }

    const dateLabel = "date" + label
    const timeLabel = "time" + label
    const dateTimeString = dateCheck.value+" "+timeCheck.value

    if(!allowPastDates){

        const timeDiffObj = findTimeDifference("today", dateTimeString)

        if(timeDiffObj.daysLeft < 0){
            setErrorMsgs((prevErrorMsgs) => ({...prevErrorMsgs, [timeLabel]: ""}))
            setErrorMsgs((prevErrorMsgs) => ({...prevErrorMsgs, [dateLabel]: "The current selected date is before today"}))
            return {check: false, value: dateTimeString}
        } if(timeDiffObj.secondsLeft < 0){
            setErrorMsgs((prevErrorMsgs) => ({...prevErrorMsgs, [dateLabel]: ""}))
            setErrorMsgs((prevErrorMsgs) => ({...prevErrorMsgs, [timeLabel]: "The current selected time is before the current time"}))
            return {check: false, value: dateTimeString}
        } 
    }

    setErrorMsgs((prevErrorMsgs) => ({ ...prevErrorMsgs, [dateLabel]: "" }))
    setErrorMsgs((prevErrorMsgs) => ({ ...prevErrorMsgs, [timeLabel]: "" }))

    return { check: true, value: dateTimeString }
}