import { findCorrectMomentObj } from './date';

const moment = require('moment')

export function findTimeDifference(start, end) {

    //takes two time strings
    //format: (MM-DD-YYYY) or ("today")

    const startTime = findCorrectMomentObj(start)
    const endTime = findCorrectMomentObj(end)
    const difference = moment.duration(endTime.diff(startTime))

    const yearsLeft = difference.years();
    const monthsLeft = difference.months();
    const daysLeft = difference.days();
    const hoursLeft = difference.hours();
    const minutesLeft = difference.minutes();
    const secondsLeft = difference.seconds();

    return {
        yearsLeft,
        monthsLeft,
        daysLeft,
        hoursLeft,
        minutesLeft,
        secondsLeft
    }
}

function timerHumanizedHelper(time, label) {
    //takes an int and a string
    return time.toString() + " " + label
}

export function timerDisplay(timeDiffObj) {

    const yearsLeft = timeDiffObj.yearsLeft
    const monthsLeft = timeDiffObj.monthsLeft
    const daysLeft = timeDiffObj.daysLeft
    const hoursLeft = timeDiffObj.hoursLeft
    const minutesLeft = timeDiffObj.minutesLeft

    if (yearsLeft > 1) {
        return timerHumanizedHelper(yearsLeft, "years left")
    } if (monthsLeft >= 1) {
        if (monthsLeft === 1) {
            return timerHumanizedHelper(monthsLeft, "month left")
        }
        return timerHumanizedHelper(monthsLeft, "months left")
    } if (daysLeft > 1) {
        return timerHumanizedHelper(daysLeft, "days left")
    } if (hoursLeft >= 1) {
        if (hoursLeft === 1) {
            return timerHumanizedHelper(hoursLeft, "hour left")
        }
        return timerHumanizedHelper(hoursLeft, "hours left")
    } if (minutesLeft >= 1) {
        if (minutesLeft === 1) {
            return timerHumanizedHelper(minutesLeft, "min left")
        }
        return timerHumanizedHelper(minutesLeft, "mins left")
    }

    return "Do Now"
}

//the delay function of when an action is finished
//ex: after 250 secs of delay, we will do func {whatever you put} will be the args
export function debounce(func, delay) {

    //example on how to use this function
    // window.onresize = debounce(() => {
    //     showCollapseApps = checkShowCollapseApps()
    //     setChange((change ? 0 : 1))
    // }, 250)

    let timeoutId
    return function (...args) {
        clearTimeout(timeoutId)
        timeoutId = setTimeout(() => func.apply(this, args), delay)
    }
}
