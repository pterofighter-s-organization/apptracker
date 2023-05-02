
const moment = require('moment')

export function findCorrectMomentObj (dateString) {

    if(dateString === "today"){
        return moment(Date.now())
    }
    return moment(dateString, "MM-DD-YYYY HH:mm:ss")
}

function dateHumanizedHelper (dateString) {
    return dateString.replaceAll("-", "/")
}

export function dateFormat ( dateString ) {

    //made to work on firefox (needs a specific format) and other browsers
    //forcing all dates to follow a specific format
    //takes in "today" and other (MM-DD-YYYY) strings to format into the correct date for all browsers

    const momentDate = findCorrectMomentObj(dateString)

    const dateFormatted = momentDate.format("M-DD-YYYY HH:mm:ss")

    const dateObject = dateFormatted.split(" ")
    const date = dateObject[0]
    const time = dateObject[1]

    const dateHumanized = dateHumanizedHelper(date)
    const timeHumanizedObj = momentDate.format("h:mm a").split(" ")
    const timeHumanized = timeHumanizedObj[0] //12 hour period time
    const timePeriod = timeHumanizedObj[1]
    
    return {
        date,
        dateHumanized,
        dateFormatted,
        time,
        timeHumanized,
        timePeriod
    }
}

export function sortDates (date1, date2) {

    const dateA = findCorrectMomentObj(date1)
    const dateB = findCorrectMomentObj(date2)

    if (dateA.isBefore(dateB)) {
        return -1;
      } else if (dateA.isAfter(dateB)) {
        return 1;
      } else {
        return 0;
      }
}