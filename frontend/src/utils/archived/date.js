
// date.js
//     - turns date object to a string

export function dateToString ( dateObj ) {

    //converts dateObject into a more readable date 
    //return date format: (xx-xx-xxxx xx:xx)

    const timeInHours = dateObj.toLocaleTimeString('it-IT').split(":")

    //three steps
    //1. find the actual date
    //2. step 1 then add a space in between
    //3. add step 2 and the actual time representation
    const stepOne = dateObj.toLocaleString('en-US', { timeZone: 'UTC' }).replaceAll(",", "").split(" ")[0]
    const stepTwo = stepOne + " "
    const dateString = stepTwo + timeInHours[0] + ":" + timeInHours[1]

    return dateString
}