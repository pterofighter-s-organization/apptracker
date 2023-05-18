import { useMemo } from "react"

export default function MonthBox(props) {

    const {
        formData,
        setFormData,
        label,
        fontSize,
    } = props

    const actualLabel = "month"+label

    const displayMonths = useMemo(() => {
        return inputMonthValues()
    }, [formData[actualLabel]])
    
    function inputMonthValues() {
        const res = []
        for (let i = 1; i <= 12; i += 1) {
            const stringInt = i.toString()
            res.push(stringInt)
        }
        return res
    }

    function changeMonthInput(event) {
        event.preventDefault()
        const newMonth = event.target.value
        setFormData(prevFormData => ({ ...prevFormData, [actualLabel]: newMonth }))
    }


    return (
        <select 
            className={`form-select p-3 bg-body ${fontSize}`} 
            style={{ width: "90px" }} 
            onChange={(e) => changeMonthInput(e)}
        >
            {formData[actualLabel].length > 0 ?
                <option value="">MM</option>
                :
                <option selected value="">MM</option>
            }
            {displayMonths.map((num) => {
                if (formData[actualLabel] !== num) {
                    return <option key={num} value={num}>{num}</option>
                } else {
                    return <option key={num} selected value={num}>{num}</option>
                }
            })}
        </select>
    )
}