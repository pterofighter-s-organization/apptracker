
export default function MonthSelect({ value, updateValue }) {

    const selectValues = selectMonthValues()

    function selectMonthValues() {
        const res = []
        for (let num = 1; num <= 12; num += 1) {
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
            style={{ width: "90px" }}
            onChange={(e) => changeSelect(e)}
        >
            {value.length > 0 ?
                <option value="">MM</option>
                :
                <option selected value="">MM</option>
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