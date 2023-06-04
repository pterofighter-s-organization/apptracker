
import { useMemo } from "react"

//utils
import { findTodayDate } from "../../../utils/dateTimeUtils"

const moment = require('moment')

export default function DaySelect({ value, month, year, updateValue }) {

    const selectValues = useMemo(() => {
        return selectDayValues(month, year)
        // eslint-disable-next-line
    }, [month, year])

    function selectDayValues(currentMonth, currentYear) {
        //use 01 as day
        const res = []
        const todayDateTime = findTodayDate() //(mm-dd-yyyy hh:mm:ss)
        const todayDate = todayDateTime[0]
        const todayTime = todayDateTime[1]

        if (currentMonth.length > 0) {
            const date = (currentYear.length > 0) ? (currentMonth + "-01-" + currentYear + " " + todayTime) : (currentMonth + "-01-" + todayDate[2] + " " + todayTime)
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
        const newValue = event.target.value
        updateValue(newValue)
    }

    return (
        <select
            className={`form-select p-3 bg-body`}
            style={{ width: "90px" }}
            onChange={(e) => changeSelect(e)}
        >
            {value.length > 0 ?
                <option value="">DD</option>
                :
                <option selected value="">DD</option>
            }
            {selectValues.map((num) => {
                if (value !== num) {
                    return <option key={num} value={num}>{num}</option>
                } else {
                    return <option key={num} selected value={num}>{num}</option>
                }
            })}
        </select>
    )
}