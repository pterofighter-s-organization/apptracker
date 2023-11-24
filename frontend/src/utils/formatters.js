import { convertISOtoDate, convertUTCtoLocal } from "./dateTimeUtils"

export function dateFormatter(date) {

    //making sure every - is converted into / for not taking up space
    return date.replaceAll("-", "/")
}

export function timeFormatter(time) {

    //hh:mm:ss
    const timeObj = time.split(":")
    let hours = parseInt(timeObj[0])
    const mins = timeObj[1]

    //convert to humanized time (ex: 1:20pm)
    if (hours === 0) {
        hours += 12
        return { hours: hours, mins: mins, period: "am" }
    }
    if (hours === 12) {
        return { hours: hours, mins: mins, period: "pm" }
    }
    if (hours > 12) {
        return { hours: hours - 12, mins: mins, period: "pm" }
    }

    return { hours: hours, mins: mins, period: "am" }
}

export function dateTimeFormatter(isoString){
    console.log("iso",isoString, convertUTCtoLocal(isoString), convertISOtoDate(convertUTCtoLocal(isoString)), convertISOtoDate(isoString))
    const localDateTimeISO = convertUTCtoLocal(isoString)
    const dateTimeObj = convertISOtoDate(localDateTimeISO).split(" ")
    const date = dateTimeObj[0]
    const time = dateTimeObj[1]

    const dateFormatted = dateFormatter(date)
    const timeFormatted = timeFormatter(time)

    return `${dateFormatted} ${timeFormatted.hours}:${timeFormatted.mins}${timeFormatted.period}`
}

export function labelFormatter(prefix, label) {

    //if not null
    if ((prefix && label) || (prefix.length === 0 && label)) {
        return prefix + "_" + label
    }
    if (prefix && !label) {
        return prefix
    }
    return label
}