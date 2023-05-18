import { useMemo } from "react"

//utils
import { dateFormat, findCorrectMomentObj } from "../../../../../utils/date"

export default function DayBox(props) {

    const {
        formData,
        setFormData,
        label,
        fontSize,
    } = props

    const actualLabel = "day" + label
    const actualMonthLabel = "month" + label
    const actualYearLabel = "year" + label

    const displayDays = useMemo(() => {
        return inputDayValues(formData[actualMonthLabel], formData[actualYearLabel])
    }, [formData[actualMonthLabel], formData[actualYearLabel]])

    function inputDayValues(month, year) {

        //use 01 as day
        const res = []
        const dateOfTodayObj = dateFormat("today").date.split("-")
    
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

    function changeDayInput(event) {
        event.preventDefault()
        const newDay = event.target.value
        setFormData(prevFormData => ({ ...prevFormData, [actualLabel]: newDay }))
    }

    return (
        <select
            className={`form-select p-3 bg-body ${fontSize}`}
            style={{ width: "90px" }}
            onChange={(e) => changeDayInput(e)}
        >
            {formData[actualLabel].length > 0 ?
                <option value="">DD</option>
                :
                <option selected value="">DD</option>
            }
            {displayDays.map((num) => {
                if (formData[actualLabel] !== num) {
                    return <option key={num} value={num}>{num}</option>
                } else {
                    return <option key={num} selected value={num}>{num}</option>
                }
            })}
        </select>
    )
}