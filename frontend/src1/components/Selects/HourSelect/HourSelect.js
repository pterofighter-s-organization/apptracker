//utils
import { labelFormatter } from "../../../utils/formatters"

export default function HourSelect({ formData, setFormData, label }) {

    const actualLabel = labelFormatter("hour", label)
    const selectValues = selectHourValues()

    function selectHourValues() {
        const res = []

        for (let num = 1; num <= 24; num += 1) {
            const stringInt = num.toString()
            if (stringInt.length > 1) {
                res.push(stringInt)
            } else {
                res.push("0" + stringInt)
            }
        }

        return res
    }

    function changeSelect(event) {
        event.preventDefault()
        const newHour = event.target.value
        setFormData(prevFormData => ({ ...prevFormData, [actualLabel]: newHour }))
    }

    return (
        <select
            className={`form-select p-3 bg-body`}
            style={{ width: "90px" }}
            onChange={(e) => changeSelect(e)}
        >
            {formData[actualLabel].length > 0 ?
                <option value="">hh</option>
                :
                <option selected value="">hh</option>
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