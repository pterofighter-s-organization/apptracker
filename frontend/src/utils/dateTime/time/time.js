import { findCorrectMomentObj } from '../date/date';

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

    //all representations of the difference 1 day = 24 hours left etc.
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
//sets a time id, making sure whatever is in this function cannot be spammed, and setimeout is a queue which can be spam
export function debounce(func, delay) {

    //this is an object to fit the event target

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

export function validateTime(timeString) {

    const patternOne = /^\d{2}:\d{2}:\d{2}$/;
    const patternTwo = /^\d{2}:\d{2}$/;
    // ^ = starting pt, \d is int, {n} is how many of them, : is just specifying it is a time, $ indicates the end

    return patternOne.test(timeString) || patternTwo.test(timeString)
}