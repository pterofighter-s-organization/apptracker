import { findTimeDifference } from "../../../../../../../../utils/time"

export default function dateTimeValidator (dateTime, setErrorMsgs) {

    const timeDiffObj = findTimeDifference("today", dateTime)
    if(timeDiffObj.daysLeft < 0){
        setErrorMsgs((prevErrorMsgs) => ({...prevErrorMsgs, "time": ""}))
        setErrorMsgs((prevErrorMsgs) => ({...prevErrorMsgs, "date": "The current selected date is before today"}))
        return false
    } if(timeDiffObj.secondsLeft < 0){
        setErrorMsgs((prevErrorMsgs) => ({...prevErrorMsgs, "date": ""}))
        setErrorMsgs((prevErrorMsgs) => ({...prevErrorMsgs, "time": "The current selected time is before the current time"}))
        return false
    } else {
        setErrorMsgs((prevErrorMsgs) => ({...prevErrorMsgs, "date": ""}))
        setErrorMsgs((prevErrorMsgs) => ({...prevErrorMsgs, "time": ""}))
    }

    return true
}