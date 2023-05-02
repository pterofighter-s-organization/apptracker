
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

    //forcing all dates to follow a specific format
    //starts out with today
    const momentDate = findCorrectMomentObj(dateString)

    const dateFormatted = momentDate.format("MM-DD-YYYY HH:mm:ss")

    const dateObject = dateFormatted.split(" ")
    const date = dateObject[0]
    const time = dateObject[1]

    const dateHumanized = dateHumanizedHelper(date)
    const timeHumanizedObj = momentDate.format("hh:mm a").split(" ")
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