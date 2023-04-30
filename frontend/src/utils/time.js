
const moment = require('moment')

export function findTimeDifference (start, end) {

    const startTime = moment(start)
    const endTime = moment(end)
    const difference = moment.duration(endTime.diff(startTime))

    const yearsLeft = difference.years();
    const monthsLeft = difference.months();
    const daysLeft = difference.days();
    const hoursLeft = difference.hours();
    const minutesLeft = difference.minutes();
    const secondsLeft = difference.seconds();

    return (
        yearsLeft,
        monthsLeft,
        daysLeft,
        hoursLeft,
        minutesLeft,
        secondsLeft
    )
}

export function timerDisplay (timeDiffObj) {

    const yearsLeft = timeDiffObj.yearsLeft
    const monthsLeft = timeDiffObj.monthsLeft
    const daysLeft = timeDiffObj.daysLeft
    const hoursLeft = timeDiffObj.hoursLeft
    const minutesLeft = timeDiffObj.minutesLeft

    if (yearsLeft > 1) {
        return yearsLeft + " " + "years left"
    } if (monthsLeft > 1) {
        return monthsLeft + " " + "months left"
    } if (daysLeft > 1) {
        return daysLeft + " " + "days left"
    } if (hoursLeft >= 1) {
        if (hoursLeft == 1) {
            return hoursLeft + " " + "hour left"
        }
        return hoursLeft + " " + "hours left"
    } if (minutesLeft >= 1) {
        if (minutesLeft == 1) {
            return minutesLeft + " " + "min left"
        }
        return minutesLeft + " " + "mins left"
    }

    return "Do Now"
}