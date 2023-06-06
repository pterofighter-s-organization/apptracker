
//format validations

export function isEmptyDateTime(dateTimeString) {

    //can only have 00 and no other numbers but can fit other characters
    const exactlyTwoZerosRegex = /^[^0-9]*0{2}[^0-9]*$/
    const dateFormatRegex = /^.*-.*-.*:.*:.*$/

    // - - : :00 because seconds already pre-defined

    // console.log(dateTimeString, dateFormatRegex.test(dateTimeString) && exactlyTwoZerosRegex.test(dateTimeString), exactlyTwoZerosRegex.test("00"))

    return dateTimeString.length === 0 || (dateFormatRegex.test(dateTimeString) && exactlyTwoZerosRegex.test(dateTimeString))
}

export function isValidDate(dateString) {

    if(!dateString){
        return false
    }
    
    const patternOne = /^\d{2}-\d{2}-\d{4}$/
    const patternTwo = /^\d{1}-\d{2}-\d{4}$/
    const patternThree = /^\d{2}-\d{1}-\d{4}$/
    const patternFour = /^\d{1}-\d{1}-\d{4}$/
    // ^ = starting pt, \d is int, {n} is how many of them, - is just specifying it is a date

    return patternOne.test(dateString) || patternTwo.test(dateString) || patternThree.test(dateString) || patternFour.test(dateString)
}

export function isValidTime(timeString) {

    if(!timeString){
        return false
    }

    const patternOne = /^\d{2}:\d{2}:\d{2}$/;
    const patternTwo = /^\d{2}:\d{2}$/;
    // ^ = starting pt, \d is int, {n} is how many of them, : is just specifying it is a time, $ indicates the end

    return patternOne.test(timeString) || patternTwo.test(timeString)
}

export function isValidDateTime(dateTimeString) {

    if(!dateTimeString){
        return false
    }

    const dateTimeObj = dateTimeString.split(" ")
    const date = dateTimeObj[0]
    const time = dateTimeObj[1]

    return isValidTime(time) && isValidDate(date)
}

export function isValidIsoDateTime(isoString) {
    const moment = require('moment')
    return moment(isoString, moment.ISO_8601).isValid()
}













//form field validations
// export function validateDateTime(formData, setErrorMsgs, label, allowPastDates) {

//     const actualLabel = labelFormatter("date", label)
//     const dateTime  = formData[actualLabel]
    
//     if(isEmptyDateTime(dateTime)) {
//         setErrorMsgs[actualLabel] = ""
//         formData[actualLabel] = ""
//         return
//     }
//     if (!isValidDateTime(dateTime)) {
//         setErrorMsgs[actualLabel] = "Please finish selecting the date elements."
//         formData[actualLabel] = dateTime
//         return
//         // return { check: false, value: "" }
//     } if (!allowPastDates && compareDates(dateTime, findTodayDate()) < 0) {
//         setErrorMsgs[actualLabel] = "The current selected date is before today"
//         formData[actualLabel] = dateTime
//         return
//         // console.log(actualLabel, "before")
//         // setErrorMsgs((prevErrorMsgs) => ({ ...prevErrorMsgs, [actualLabel]: "The current selected date is before today" }))
//         // return { check: false, value: null }
//     }

//     setErrorMsgs[actualLabel] = ""
//     formData[actualLabel] = dateTime
//     return
//     // return { check: true, value: dateTime }
// }


// export function isEmptyDateTime(dateTimeString) {

//     //can only have 00 and no other numbers but can fit other characters
//     const exactlyTwoZerosRegex = /^[^0-9]*0{2}[^0-9]*$/
//     const dateFormatRegex = /^.*-.*-.*:.*:.*$/

//     // - - : :00 because seconds already pre-defined

//     // console.log(dateTimeString, dateFormatRegex.test(dateTimeString) && exactlyTwoZerosRegex.test(dateTimeString), exactlyTwoZerosRegex.test("00"))

//     return dateFormatRegex.test(dateTimeString) && exactlyTwoZerosRegex.test(dateTimeString)
// }

//Not gonna use the functions below after backend finishes, only for testing before coding the backend.

// export function checkDateField(formData, setErrorMsgs, label) {

//     const date = formData["month" + label] + "-" + formData["day" + label] + "-" + formData["year" + label]

//     const check = validateDate(date)

//     if (!check) {
//         const errorMsg = "Please select a valid date"
//         setErrorMsgs(prevErrorMsgs => ({ ...prevErrorMsgs, ["date" + label]: errorMsg }))
//     } else {
//         setErrorMsgs(prevErrorMsgs => ({ ...prevErrorMsgs, ["date" + label]: "" }))
//     }


//     //if it fits the requirement
//     return { check: check, value: date }
// }

// export function checkTimeField(formData, setErrorMsgs, label) {

//     const time = formData["hour" + label] + ":" + formData["min" + label] + ":" + formData["sec" + label]

//     const check = validateTime(time)

//     if (!check) {
//         const errorMsg = "Please select a valid time"
//         setErrorMsgs(prevErrorMsgs => ({ ...prevErrorMsgs, ["time" + label]: errorMsg }))
//     } else {
//         setErrorMsgs(prevErrorMsgs => ({ ...prevErrorMsgs, ["time" + label]: "" }))
//     }

//     //if it fits the requirement
//     return { check: check, value: time }
// }

// export function checkDateTimeField(formData, setErrorMsgs, label, allowEmpty, allowPastDates) {

//     label = labelFormatter("", label)
//     // console.log(date, time, formData)
//     //empty date only with 2(-) and 2(:)+"00"
//     if (allowEmpty) {
//         if (formData["month" + label].length === 0 && formData["day" + label].length === 0 && formData["year" + label].length === 0) {
//             if (formData["hour" + label].length === 0 && formData["min" + label].length === 0) {
//                 return { check: true, value: "" }
//             }
//         }
//     }

//     const dateCheck = checkDateField(formData, setErrorMsgs, label)
//     const timeCheck = checkTimeField(formData, setErrorMsgs, label)

//     if (!dateCheck.check || !timeCheck.check) {
//         return { check: false, value: "" }
//     }

//     const dateLabel = "date" + label
//     const timeLabel = "time" + label
//     const dateTimeString = dateCheck.value + " " + timeCheck.value

//     if (!allowPastDates) {

//         const timeDiffObj = findTimeDifference(findTodayDate(), dateTimeString)

//         if (timeDiffObj.daysLeft < 0) {
//             setErrorMsgs((prevErrorMsgs) => ({ ...prevErrorMsgs, [timeLabel]: "" }))
//             setErrorMsgs((prevErrorMsgs) => ({ ...prevErrorMsgs, [dateLabel]: "The current selected date is before today" }))
//             return { check: false, value: dateTimeString }
//         } if (timeDiffObj.secondsLeft < 0) {
//             setErrorMsgs((prevErrorMsgs) => ({ ...prevErrorMsgs, [dateLabel]: "" }))
//             setErrorMsgs((prevErrorMsgs) => ({ ...prevErrorMsgs, [timeLabel]: "The current selected time is before the current time" }))
//             return { check: false, value: dateTimeString }
//         }
//     }

//     setErrorMsgs((prevErrorMsgs) => ({ ...prevErrorMsgs, [dateLabel]: "" }))
//     setErrorMsgs((prevErrorMsgs) => ({ ...prevErrorMsgs, [timeLabel]: "" }))

//     return { check: true, value: dateTimeString }
// }

// export function checkTextField(formData, setErrorMsgs, label) {

//     const check = formData[label].length > 0

//     if (!check) {
//         const errorMsg = "Please don't leave the " + label + " empty"
//         setErrorMsgs(prevErrorMsgs => ({ ...prevErrorMsgs, [label]: errorMsg }))
//     } else {
//         setErrorMsgs(prevErrorMsgs => ({ ...prevErrorMsgs, [label]: "" }))
//     }

//     //if it fits the requirement
//     return { check: check, value: formData[label] }
// }

// export function checkUrlField(formData, setErrorMsgs, label) {

//     const lengthCheck = formData[label].length > 0

//     // if (!lengthCheck) {
//     //     const errorMsg = "Please don't leave the " + label + " empty"
//     //     setErrorMsgs(prevErrorMsgs => ({ ...prevErrorMsgs, [label]: errorMsg }))
//     //     return false
//     // }
//     if (!lengthCheck) {
//         return { check: true, value: formData[label] }
//     }

//     const patternCheck = formData[label].includes("http://") || formData[label].includes("https://")

//     if (!patternCheck) {
//         const errorMsg = "Invalid " + label + " link"
//         setErrorMsgs(prevErrorMsgs => ({ ...prevErrorMsgs, [label]: errorMsg }))
//         return { check: false, value: formData[label] }
//     }

//     setErrorMsgs(prevErrorMsgs => ({ ...prevErrorMsgs, [label]: "" }))

//     return { check: true, value: formData[label] }
// }