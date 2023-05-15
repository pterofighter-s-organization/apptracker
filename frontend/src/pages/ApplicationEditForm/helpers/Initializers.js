//utils
import { validateDateTime } from "../../../utils/date"

export function dateTimeInitializer(dateTime) {

    const dateTimeObj = {
        "day": "",
        "month": "",
        "year": "",
        "hour": "",
        "min": "",
    }

    if(dateTime && validateDateTime(dateTime)){
        const dateTimeSplitted = dateTime.split(" ")
        const dateSplitted = dateTimeSplitted[0].split("-")
        const timeSplitted = dateTimeSplitted[1].split(":")

        dateTimeObj.month = dateSplitted[0]
        dateTimeObj.day = dateSplitted[1]
        dateTimeObj.year = dateSplitted[2]

        dateTimeObj.hour = timeSplitted[0]
        dateTimeObj.min = timeSplitted[1]
    }

    return dateTimeObj
}

export function linkInitializer(resume, coverLetter, interviewPreparation) {

    return {
        "resume": resume,
        "coverLetter": coverLetter,
        "interviewPreparation": interviewPreparation,
    }
}