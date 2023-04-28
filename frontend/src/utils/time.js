// time.js
//     - make time displaying more user friendly

export function findTimeDifference (start, end) {

    //creates an object that shows different time representations of between two times

    //difference between time 2 and time 1
    const date1 = new Date(start)
    const date2 = new Date(end)
    const daysLeftInMs = (date2 - date1)

    //time difference in different representations
    const yearsLeft = date2.getFullYear() - date1.getFullYear();
    const monthsLeft = date2.getMonth() - date1.getMonth();
    //ms into hours = /3600000
    const hours = ((daysLeftInMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    const hoursLeft = Math.floor(hours)
    //ms into mins /60000
    const minsLeft = Math.floor((hours * 60))
    const daysLeft = Math.floor(daysLeftInMs / (1000 * 60 * 60 * 24))

    //this total months left turns the years left to months left and add it to the original months left 
    //if we dont wanna display years 
    const totalMonthsLeft = yearsLeft * 12 + monthsLeft

    return {
        daysLeft,
        hoursLeft,
        minsLeft,
        yearsLeft,
        monthsLeft,
        totalMonthsLeft
    }
}

export function timePeriodFormat (time) {

    //formats time into a more user friendly text
    //input: (xx:xx)
    //given a time, find which 12 hour period it is (ex: am or pm)
    //return the time object of correct time format according to the period and its period abbrev.

    let [hours, mins] = time.split(":")
    const timePeriod = hours < 12 ? "am" : "pm"
    hours = hours >= 12 || hours <= 0 ? hours - 12 : hours
    //make sure hour isn't negative
    hours = Math.abs(hours)

    return {
        hours,
        mins,
        timePeriod
    }
}

export function timeLeftFormat (timeDiffObj) {

    //formats the amount of time left into a more user friendly text
    //input: (time difference object from the findtimedifference function)
    //returning a string with the correct display of how much time is left

    const monthsLeft = timeDiffObj.totalMonthsLeft
    const daysLeft = timeDiffObj.daysLeft
    const hoursLeft = timeDiffObj.hoursLeft
    const minsLeft = timeDiffObj.minsLeft

    if (monthsLeft > 1) {
        return monthsLeft + " " + "months left"
    } if (daysLeft > 1) {
        return daysLeft + " " + "days left"
    } if (hoursLeft >= 1) {
        if (hoursLeft == 1) {
            return hoursLeft + " " + "hour left"
        }
        return hoursLeft + " " + "hours left"
    } if (minsLeft >= 1) {
        if (minsLeft == 1) {
            return minsLeft + " " + "min left"
        }
        return minsLeft + " " + "mins left"
    }

    return "Do Now"
}