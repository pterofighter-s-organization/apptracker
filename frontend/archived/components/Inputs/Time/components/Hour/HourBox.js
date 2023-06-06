
export default function HourBox(props) {

    const {
        formData,
        setFormData,
        label,
        fontSize
    } = props

    const actualLabel = "hour" + label
    const displayHours = inputHourValues()

    function inputHourValues() {
        const res = []

        for (let i = 1; i <= 24; i += 1) {
            const stringInt = i.toString()
            if (stringInt.length > 1) {
                res.push(stringInt)
            } else {
                res.push("0" + stringInt)
            }
        }

        return res
    }

    function changeHoursInput(event) {
        event.preventDefault()
        const newHour = event.target.value
        setFormData(prevFormData => ({ ...prevFormData, [actualLabel]: newHour }))
    }

    return (
        <select 
            className={`form-select p-3 bg-body ${fontSize}`} 
            style={{ width: "90px" }} 
            onChange={(e) => changeHoursInput(e)}
        >
            {formData[actualLabel].length > 0 ?
                <option value="">hh</option>
                :
                <option selected value="">hh</option>
            }
            {displayHours.map((num) => {
                if (formData[actualLabel] !== num) {
                    return <option key={num} value={num}>{num}</option>
                } else {
                    return <option key={num} selected value={num}>{num}</option>
                }
            })}
        </select>
    )

}