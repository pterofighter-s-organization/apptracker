//utils
import * as dateTimeUtils from '../../../utils/dateTimeUtils'

export default function YearSelect({ value, updateValue }) {

    const selectValues = selectYearValues()

    function selectYearValues() {
        const res = []
        const todayDateTime = dateTimeUtils.findTodayUTCDate()
        const pstDateTime = dateTimeUtils.convertUTCtoPST(todayDateTime)
        // console.log(todayDateTime.split(" ")[0].split("-")[2])
        const currentYearInInt = parseInt(pstDateTime.split("T")[0].split("-")[0])

        for (let num = currentYearInInt - 5; num <= currentYearInInt + 10; num += 1) {
            res.push(num.toString())
        }

        return res
    }

    function changeSelect(event) {
        event.preventDefault()
        const newValue = event.target.value
        updateValue(newValue)
    }

    return (
        <select
            className={`form-select p-3 bg-body`}
            style={{ width: "115px" }}
            onChange={(e) => changeSelect(e)}
        >
            {value.length > 0 ?
                <option value="">YYYY</option>
                :
                <option selected value="">YYYY</option>
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