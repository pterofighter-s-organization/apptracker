import { useMemo } from "react"
import { labelFormatter } from "../../../utils/formatters"

export default function MonthSelect({ formData, setFormData, label }) {

    const actualLabel = labelFormatter("month", label)

    const selectValues = useMemo(() => {
        return selectMonthValues()
        // eslint-disable-next-line
    }, [formData[actualLabel]])

    function selectMonthValues() {
        const res = []
        for (let num = 1; num <= 12; num += 1) {
            res.push(num.toString())
        }
        return res
    }

    function changeSelect(event) {
        event.preventDefault()
        const newMonth = event.target.value
        setFormData(prevFormData => ({ ...prevFormData, [actualLabel]: newMonth }))
    }


    return (
        <select
            className={`form-select p-3 bg-body`}
            style={{ width: "90px" }}
            onChange={(e) => changeSelect(e)}
        >
            {formData[actualLabel].length > 0 ?
                <option value="">MM</option>
                :
                <option selected value="">MM</option>
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