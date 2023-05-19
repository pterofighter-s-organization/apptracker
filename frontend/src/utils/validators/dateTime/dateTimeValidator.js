//utils
import { dateValidator } from "../date/dateValidator"
import { timeValidator } from "../time/timeValidator"

export default function dateTimeValidator(formData, setErrorMsgs, label, checkEmpty) {

    // console.log(date, time, formData)

    //empty date only with 2(-) and 2(:)+"00"
    if (checkEmpty) {
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

    setErrorMsgs((prevErrorMsgs) => ({ ...prevErrorMsgs, [dateLabel]: "" }))
    setErrorMsgs((prevErrorMsgs) => ({ ...prevErrorMsgs, [timeLabel]: "" }))

    return { check: true, value: dateCheck.value + " " + timeCheck.value }
}