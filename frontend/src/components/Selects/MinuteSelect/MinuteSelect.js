
export default function MinuteSelect({ value, updateValue }) {

    const selectValues = selectMinValues()

    function selectMinValues() {
        const res = []

        //controlled, must have two digits.
        for (let num = 0; num <= 59; num += 1) {
            // res.push(num.toString())
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
        const newValue = event.target.value
        // console.log("actual", actualLabel, value, newMin)
        updateValue(newValue)
    }

    return (
        <select
            className={`form-select p-3 bg-body`}
            style={{ width: "90px" }}
            onChange={(e) => changeSelect(e)}
        >
            {value.length > 0 ?
                <option value="">mm</option>
                :
                <option selected value="">mm</option>
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