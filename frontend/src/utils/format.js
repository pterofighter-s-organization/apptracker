import { convertISOtoDate, convertUTCtoLocal, findTimeDifference, findTodayUTCDate } from "./dateTime"

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

export function dateTimeFormatter(isoString) {
    // console.log("iso",isoString, convertUTCtoLocal(isoString), convertISOtoDate(convertUTCtoLocal(isoString)), convertISOtoDate(isoString))
    const localDateTimeISO = convertUTCtoLocal(isoString)
    const dateTimeObj = convertISOtoDate(localDateTimeISO).split(" ")
    const date = dateTimeObj[0]
    const time = dateTimeObj[1]

    const dateFormatted = dateFormatter(date)
    const timeFormatted = timeFormatter(time)

    return `${dateFormatted} ${timeFormatted.hours}:${timeFormatted.mins}${timeFormatted.period}`
}

export const timerFormatter = (end, start) => {
    const { years, months, days, hours, mins, secs } = findTimeDifference(start || findTodayUTCDate(), end)

    const format = (num, label) => `${num}${label}`

    switch (true) {
        case years >= 1:
            return {
                value: format(years, years === 1 ? "yr" : "yrs"),
                label: "years"
            }
        case months >= 1:
            return {
                value: format(months, months === 1 ? "mo" : "mos"),
                label: "months"
            }
        case days >= 1:
            return {
                value: format(days, days === 1 ? "d" : "d"),
                label: "days"
            }
        case hours >= 1:
            return {
                value: format(hours, hours === 1 ? "h" : "h"),
                label: "hours"
            }
        case mins >= 1:
            return {
                value: format(mins, mins === 1 ? "m" : "m"),
                label: "minutes"
            }
        case secs >= 0:
            return {
                value: "Due",
                label: "due"
            }
        default:
            return {
                value: "Overdue",
                label: "overdue"
            }
    }
}

export const strFormatter = (str) => {

    return (str.charAt(0).toUpperCase() + str.slice(1))
}