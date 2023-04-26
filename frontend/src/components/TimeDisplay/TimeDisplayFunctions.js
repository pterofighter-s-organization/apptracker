
export function dateIntoString ( time ) {

    //return date format: (xx-xx-xxxx xx:xx)

    const date = new Date(time)
    const timeInHours = date.toLocaleTimeString('it-IT').split(":")

    //three steps
    //1. find the actual date
    //2. step 1 then add a space in between
    //3. add step 2 and the actual time representation
    const stepOne = date.toLocaleString('en-US', { timeZone: 'UTC' }).replaceAll(",", "").split(" ")[0]
    const stepTwo = stepOne + " "
    const res = stepTwo + timeInHours[0] + ":" + timeInHours[1]

    return res
}

export function findTimeDifference ( start, end ) {

    //return different time representations of the difference between two times

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
    const daysLeft = Math.floor(daysLeftInMs/ (1000 * 60 * 60 * 24))

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