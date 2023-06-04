
const moment = require('moment')

//date utils
export function findTodayDate(){

    return moment(Date.now()).format("MM-DD-YYYY HH:mm:ss")
}

export function compareDates(date1, date2) {

    const dateA = moment(date1, "MM-DD-YYYY HH:mm:ss")
    const dateB = moment(date2, "MM-DD-YYYY HH:mm:ss")

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

    const startTime = moment(start, "MM-DD-YYYY HH:mm:ss")
    const endTime = moment(end, "MM-DD-YYYY HH:mm:ss")
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