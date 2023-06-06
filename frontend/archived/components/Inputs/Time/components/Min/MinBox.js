
export default function MinBox(props) {

    const {
        formData,
        setFormData,
        label,
        fontSize
    } = props

    const actualLabel = "min" + label
    const displayMins = inputMinValues()

    function inputMinValues() {
        const res = []

        for (let i = 0; i <= 59; i += 1) {
            const stringInt = i.toString()
            if (stringInt.length > 1) {
                res.push(stringInt)
            } else {
                res.push("0" + stringInt)
            }
        }

        return res
    }

    function changeMinsInput(event) {
        event.preventDefault()
        const newMin = event.target.value
        console.log("actual", actualLabel, formData[actualLabel], newMin)
        setFormData(prevFormData => ({ ...prevFormData, [actualLabel]: newMin }))
    }

    return (
        <select
            className={`form-select p-3 bg-body ${fontSize}`}
            style={{ width: "90px" }}
            onChange={(e) => changeMinsInput(e)}
        >
            {formData[actualLabel].length > 0 ?
                <option value="">mm</option>
                :
                <option selected value="">mm</option>
            }
            {displayMins.map((num) => {
                if (formData[actualLabel] !== num) {
                    return <option key={num} value={num}>{num}</option>
                } else {
                    return <option key={num} selected value={num}>{num}</option>
                }
            })}
        </select>
    )
}