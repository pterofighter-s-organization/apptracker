//utils
import { findTodayDate } from "./dateTimeUtils"

export function updateApplicationInfo(updateInfo, application) {

    const newApplication = {} // a new reference
    const today = findTodayDate()

    //transfering old data to new reference
    Object.entries(application).forEach(([label, _]) => {
        newApplication[label] = application[label]
    })

    //changes the only things needed to change specify on newappinfo
    Object.entries(updateInfo).forEach(([label, data]) => {
        newApplication[label] = data
    })

    newApplication.dateEdited = today

    return newApplication
}