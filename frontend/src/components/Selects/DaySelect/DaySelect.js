
import { useMemo } from "react"

//utils
import { findTodayDate } from "../../../utils/dateTimeUtils"
import { labelFormatter } from "../../../utils/formatters"

const moment = require('moment')

export default function DaySelect({ formData, setFormData, label }) {

    const actualLabel = labelFormatter("day", label)
    const monthLabel = labelFormatter("month", label)
    const yearLabel = labelFormatter("year", label)

    const selectValues = useMemo(() => {
        return selectDayValues(formData[monthLabel], formData[yearLabel])
        // eslint-disable-next-line
    }, [formData[monthLabel], formData[yearLabel]])

    function selectDayValues(month, year) {
        //use 01 as day
        const res = []
        const todayDateTime = findTodayDate() //(mm-dd-yyyy hh:mm:ss)
        const todayDate = todayDateTime[0]
        const todayTime = todayDateTime[1]

        if (month.length > 0) {
            const date = (year.length > 0) ? (month + "-01-" + year + " " + todayTime) : (month + "-01-" + todayDate[2] + " " + todayTime)
            const dateObj = moment(date, "MM-DD-YYYY, HH:mm:ss")

            for (let num = 1; num <= dateObj.daysInMonth(); num += 1) {
                res.push(num.toString())
            }
            //debugging
            // console.log("test", res, month + "-01-" + year + " 00:00:00", dateObj)
            return res
        } else {
            for (let num = 1; num <= 31; num += 1) {
                res.push(num.toString())
            }
            return res
        }
    }

    function changeSelect(event) {
        event.preventDefault()
        const newDay = event.target.value
        setFormData(prevFormData => ({ ...prevFormData, [actualLabel]: newDay }))
    }

    return (
        <select
            className={`form-select p-3 bg-body ${fontSize}`}
            style={{ width: "90px" }}
            onChange={(e) => changeSelect(e)}
        >
            {formData[actualLabel].length > 0 ?
                <option value="">DD</option>
                :
                <option selected value="">DD</option>
            }
            {selectValues.map((num) => {
                if (formData[actualLabel] !== num) {
                    return <option key={num} value={num}>{num}</option>
                } else {
                    return <option key={num} selected value={num}>{num}</option>
                }
            })}
        </select>
    )
}