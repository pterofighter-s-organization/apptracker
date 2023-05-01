
const moment = require('moment')

export function correctDate ( dateString ) {
    // if(typeof dateString === 'string'){
    //     return dateString.replace("/","-")
    // }
    if(typeof dateString === 'string' && dateString !== "today"){
        const dateObject = dateString.split(" ")
        const date = dateObject[0].split("-")
        const time = dateObject[1]
        return new Date(date[0]+" "+date[1]+", "+date[2]+" "+time+":00")
    }
    if(dateString === "today"){
        return
    }
    return dateString
}

export function dateToString ( dateString ) {

    //takes in a random date format
    //returns the date format and a more user friendly one

    // if datestring is "" then it is today

    let momentDate = moment(correctDate(dateString))
    console.log(momentDate)

    const dateFormatted = momentDate.format("MM-DD-YYYY hh:mm a")

    const dateObject = dateFormatted.split(" ")
    const date = dateObject[0]
    const time = dateObject[1]
    console.log(date, time)

    const dateHumanized = momentDate.format("hh:mm a")    
    const dateHumanizedObj = dateHumanized.split(" ")
    const timeHumanized = dateHumanizedObj[0] //12 hour period time
    const timePeriod = dateHumanizedObj[1]

    console.log(date)
    return {
        date,
        time,
        timeHumanized,
        timePeriod
    }
}