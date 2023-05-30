
export function validateDate(dateString) {

    const patternOne = /^\d{2}-\d{2}-\d{4}$/
    const patternTwo = /^\d{1}-\d{2}-\d{4}$/
    const patternThree = /^\d{2}-\d{1}-\d{4}$/
    const patternFour = /^\d{1}-\d{1}-\d{4}$/
    // ^ = starting pt, \d is int, {n} is how many of them, - is just specifying it is a date

    return patternOne.test(dateString) || patternTwo.test(dateString) || patternThree.test(dateString) || patternFour.test(dateString)
}

export function validateTime(timeString) {

    const patternOne = /^\d{2}:\d{2}:\d{2}$/;
    const patternTwo = /^\d{2}:\d{2}$/;
    // ^ = starting pt, \d is int, {n} is how many of them, : is just specifying it is a time, $ indicates the end

    return patternOne.test(timeString) || patternTwo.test(timeString)
}

export function validateDateTime(dateTimeString) {

    const dateTimeObj = dateTimeString.split(" ")
    const date = dateTimeObj[0]
    const time = dateTimeObj[1]

    return validateTime(time) && validateDate(date)
}
