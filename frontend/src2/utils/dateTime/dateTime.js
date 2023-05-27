//utils
import { validateDate } from "./date/date"
import { validateTime } from "./time/time"

export function validateDateTime(dateTimeString) {

    const dateTimeObj = dateTimeString.split(" ")
    const date = dateTimeObj[0]
    const time = dateTimeObj[1]

    // console.log(dateTimeObj)

    return validateDate(date) && validateTime(time)
}