

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

    const years = difference.years();
    const months = difference.months();
    const days = difference.days();
    const hours = difference.hours();
    const mins = difference.minutes();
    const secs = difference.seconds();
    const millisecs = difference.milliseconds();

    //all representations of the difference 1 day = 24 hours left etc.
    return {
        years,
        months,
        days,
        hours,
        mins,
        secs,
        millisecs,
        difference
    }
}

export function convertUTCtoLocal(utcDateTime) {

    const res = moment.utc(utcDateTime)
    const computerTimeZone = moment.tz.guess();

    // Convert UTC moment to local time
    const localMoment = res.tz(computerTimeZone);
  
    // Format the local moment as a local date-time string
    const localDateTimeString = localMoment.format('YYYY-MM-DDTHH:mm:ss');
    // console.log(utcDateTime, res)
    return localDateTimeString //iso
}

export function convertLocaltoUTC(localDateTime) {

    // Get the timezone of the computer
    const computerTimeZone = moment.tz.guess();

    const res = moment.tz(localDateTime, 'YYYY-MM-DDTHH:mm:ss', computerTimeZone)
    return res.toISOString()
}

export function convertISOtoDate(isoString) {

    return moment(isoString).format("M-D-YYYY H:mm:ss")
}
