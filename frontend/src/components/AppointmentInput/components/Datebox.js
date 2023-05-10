import { useState, useMemo, useEffect } from 'react';
import { dateFormat, findCorrectMomentObj, validateDate } from '../../../utils/date';

const dateOfTodayObj = dateFormat("today").date.split("-")

function provideYears() {
    const res = []
    const currentYearInInt = parseInt(dateOfTodayObj[2])

    for (let i = currentYearInInt - 5; i <= currentYearInInt + 10; i += 1) {
        const stringInt = i.toString()
        res.push(stringInt)
    }

    return res
}

function provideMonths() {
    const res = []
    for (let i = 1; i <= 12; i += 1) {
        const stringInt = i.toString()
        res.push(stringInt)
    }
    return res
}

function provideDaysFromMonth(month, year) {

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

export default function Datebox(props) {

    const {
        fontSize,
        textHint,
        date,
        setDate,
        dateError,
    } = props

    const displayMonths = provideMonths()
    const displayYears = provideYears()

    const [months, setMonths] = useState("")
    const [days, setDays] = useState("")
    const [years, setYears] = useState("")

    const displayDays = useMemo(() => {
        return provideDaysFromMonth(displayMonths, displayYears)
    }, [displayMonths, displayYears])

    useEffect(() => {

        if (validateDate(date)) {
            const dateObj = date.split("-")
            setMonths(dateObj[0])
            setDays(dateObj[1])
            setYears(dateObj[2])
        }

        //this can ignore the warnings and make this only run once
        // eslint-disable-next-line
    }, [])

    useEffect(() => {

        if (displayMonths.length > 0 && days.length > 0 && displayYears.length > 0) {
            setDate(displayMonths + "-" + days + "-" + displayYears)
        } else {
            setDate("")
        }

    }, [displayMonths, days, displayYears, setDate])

    function changeMonthInput(event) {
        const newMonth = event.target.value
        setMonths(newMonth)
    }

    function changeDayInput(event) {
        const newDay = event.target.value
        setDays(newDay)
    }

    function changeYearInput(event) {
        const newYear = event.target.value
        setYears(newYear)
    }

    console.log(displayMonths, days, displayYears)

    return (
        <>
            <div className="d-flex flex-row gap-3 align-items-center">
                <select className={`form-select p-3 bg-body ${fontSize}`} style={{ width: "90px" }} onChange={(e) => changeMonthInput(e)}>
                    {months.length > 0 ?
                        <option value="">MM</option>
                        :
                        <option selected value="">MM</option>
                    }
                    {displayMonths.map((num) => {
                        if (months !== num) {
                            return <option value={num}>{num}</option>
                        } else {
                            return <option selected value={num}>{num}</option>
                        }
                    })}
                </select>
                <select className={`form-select p-3 bg-body ${fontSize}`} style={{ width: "90px" }} onChange={(e) => changeDayInput(e)}>
                    {days.length > 0 ?
                        <option value="">DD</option>
                        :
                        <option selected value="">DD</option>
                    }
                    {displayDays.map((num) => {
                        if (days !== num) {
                            return <option value={num}>{num}</option>
                        } else {
                            return <option selected value={num}>{num}</option>
                        }
                    })}
                </select>
                <select className={`form-select p-3 bg-body ${fontSize}`} style={{ width: "115px" }} onChange={(e) => changeYearInput(e)}>
                    {years.length > 0 ?
                        <option value="">YYYY</option>
                        :
                        <option selected value="">YYYY</option>
                    }
                    {displayYears.map((num) => {
                        if (years !== num) {
                            return <option value={num}>{num}</option>
                        } else {
                            return <option selected value={num}>{num}</option>
                        }
                    })}
                </select>
            </div>
            {dateError && dateError.length > 0 ?
                <div className={`blockquote-footer text-danger mt-1 ${fontSize}`}>
                    {dateError}
                </div>
                :
                <div className={`blockquote-footer mt-1 ${fontSize}`}>
                    {textHint}
                </div>
            }
        </>
    )
}