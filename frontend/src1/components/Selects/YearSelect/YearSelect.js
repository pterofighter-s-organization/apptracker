//utils
import { findTodayDate } from "../../../utils/dateTimeUtils"
import { labelFormatter } from "../../../utils/formatters"

export default function YearSelect({ formData, setFormData, label }) {

    const actualLabel = labelFormatter("year", label)
    const selectValues = selectYearValues()

    function selectYearValues() {
        const res = []
        const todayDateTime = findTodayDate()
        const currentYearInInt = parseInt(todayDateTime.split(" ")[0][2])

        for (let num = currentYearInInt - 5; num <= currentYearInInt + 10; num += 1) {
            res.push(num.toString())
        }

        return res
    }

    function changeSelect(event) {
        event.preventDefault()
        const newYear = event.target.value
        setFormData(prevFormData => ({ ...prevFormData, [actualLabel]: newYear }))
    }

    return (
        <select
            className={`form-select p-3 bg-body`}
            style={{ width: "115px" }}
            onChange={(e) => changeSelect(e)}
        >
            {formData[actualLabel].length > 0 ?
                <option value="">YYYY</option>
                :
                <option selected value="">YYYY</option>
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