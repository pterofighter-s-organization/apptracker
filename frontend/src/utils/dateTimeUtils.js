
//helpers
import { isValidDateTime, isValidIsoDateTime } from '../helpers/validationHelpers'

//utils
import { labelFormatter } from './formatters'

const moment = require('moment')
require('moment-timezone');

//date utils
export function findTodayUTCDate() {

    //return todays date in utc for db
    return moment(Date.now()).toISOString()
}

export function compareDates(date1, date2) {

    // const dateA = moment(date1, "M-D-YYYY H:mm:ss")
    // const dateB = moment(date2, "M-D-YYYY H:mm:ss")
    const dateA = moment(date1) //from ISO string
    const dateB = moment(date2)

    if (dateA.isBefore(dateB)) {
        return -1;
    } else if (dateA.isAfter(dateB)) {
        return 1;
    } else {
        return 0;
    }
}

//time utils
export function findTimeDifference(start, end) {

    //takes two time strings
    //format: (MM-DD-YYYY) or ("today")
    //returns ints

    // const startTime = moment(start, "M-DD-YYYY H:mm:ss")
    // const endTime = moment(end, "M-D-YYYY H:mm:ss")
    const startTime = moment(start)
    const endTime = moment(end)
    const difference = moment.duration(endTime.diff(startTime))

    const yearsLeft = difference.years();
    const monthsLeft = difference.months();
    const daysLeft = difference.days();
    const hoursLeft = difference.hours();
    const minutesLeft = difference.minutes();
    const secondsLeft = difference.seconds();
    const millisecondsLeft = difference.milliseconds();

    //all representations of the difference 1 day = 24 hours left etc.
    return {
        yearsLeft,
        monthsLeft,
        daysLeft,
        hoursLeft,
        minutesLeft,
        secondsLeft,
        millisecondsLeft,
        difference
    }
}

export function convertUTCtoPST(utcDateTime){

    if(isValidIsoDateTime(utcDateTime)){
        const resFromISO = moment.utc(utcDateTime).tz('America/Los_Angeles')
        // console.log(resFromISO)
        // console.log(resFromISO.format(), isValidIsoDateTime(resFromISO.format()), convertPSTtoUTC(resFromISO.format()))
        return resFromISO.format()
    }
    //converting pacific time into utc
    const res = moment.utc(utcDateTime, 'M-D-YYYY H:mm:ss').tz('America/Los_Angeles')
    // console.log(res.toISOString(), res)
    return res.format() //is an iso string
}

export function convertPSTtoUTC(pstDateTime) {

    if(isValidIsoDateTime(pstDateTime)){
        const resFromISO = moment.tz(pstDateTime, 'YYYY-MM-DDTHH:mm:ss', 'America/Los_Angeles').utc();
        return resFromISO.toISOString() //have to use isostring for utc
    }
    //converting pacific time into utc
    const res = moment.tz(pstDateTime, 'M-D-YYYY H:mm:ss', 'America/Los_Angeles').utc();
    // console.log(res.toISOString(), res)
    return res.toISOString()
}

export function convertISOtoDate(isoString){

    return moment(isoString).format("M-D-YYYY H:mm:ss")
}

export function convertInputToISO(formData, label) {

    const actualLabel = labelFormatter("", label)
    const dateString = (formData["month" + actualLabel] + "-" + formData["day" + actualLabel] + "-" + formData["year" + actualLabel] + " "
        + formData["hour" + actualLabel] + ":" + formData["min" + actualLabel] + ":" + formData["sec" + actualLabel] + "")

    // console.log(Date.now(), moment(Date.now()).format("M-D-YYYY H:mm:ss"), moment(Date.now()).toISOString(), convertPSTtoUTC("6-04-2023 6:18:00"), 
    // moment(moment(Date.now()).toISOString()).utc().format("M-D-YYYY H:mm:ss"), moment(moment(Date.now()).toISOString()).utc().toISOString())
    // console.log(moment.utc("2023-06-04T12:00:00.000Z").toISOString(), convertUTCtoPST("2023-06-04T12:00:00.000Z"), convertUTCtoPST("6-04-2023 12:00:00"))
    // console.log(moment(convertUTCtoPST("2023-06-04T12:00:00.000Z")).format())
    if(!isValidDateTime(dateString)){
        return null
    }

    return convertPSTtoUTC(dateString)
}