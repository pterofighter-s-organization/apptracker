import { dateFormat, findCorrectMomentObj } from '../../../utils/date';

const dateOfTodayObj = dateFormat("today").date.split("-")

export function inputYearValues() {
    const res = []
    const currentYearInInt = parseInt(dateOfTodayObj[2])

    for (let i = currentYearInInt - 5; i <= currentYearInInt + 10; i += 1) {
        const stringInt = i.toString()
        res.push(stringInt)
    }

    return res
}

export function inputMonthValues() {
    const res = []
    for (let i = 1; i <= 12; i += 1) {
        const stringInt = i.toString()
        res.push(stringInt)
    }
    return res
}

export function inputDayValues(month, year) {

    //use 01 as day
    const res = []

    if (month.length > 0) {

        let date = month + "-01-" + dateOfTodayObj[2] + " 00:00:00"
        if (year.length > 0) {
            date = month + "-01-" + year + " 00:00:00"
        }

        const dateObj = findCorrectMomentObj(date)
        for (let i = 1; i <= dateObj.daysInMonth(); i += 1) {
            const stringInt = i.toString()
            res.push(stringInt)
        }

        //debugging
        // console.log("test", res, month + "-01-" + year + " 00:00:00", dateObj)

        return res
    } else {
        for (let i = 1; i <= 31; i += 1) {
            const stringInt = i.toString()
            res.push(stringInt)
        }
        return res
    }

}