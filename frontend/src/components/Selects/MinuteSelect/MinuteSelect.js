//utils
import { labelFormatter } from "../../../utils/formatters"

export default function MinuteSelect({ formData, setFormData, label }) {

    const actualLabel = labelFormatter("min", label)
    const selectValues = selectMinValues()

    function selectMinValues() {
        const res = []

        for (let num = 0; num <= 59; num += 1) {
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
        const newMin = event.target.value
        // console.log("actual", actualLabel, formData[actualLabel], newMin)
        setFormData(prevFormData => ({ ...prevFormData, [actualLabel]: newMin }))
    }

    return (
        <select
            className={`form-select p-3 bg-body`}
            style={{ width: "90px" }}
            onChange={(e) => changeSelect(e)}
        >
            {formData[actualLabel].length > 0 ?
                <option value="">mm</option>
                :
                <option selected value="">mm</option>
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