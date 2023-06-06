
//utils
import { dateFormat } from "../../../../../utils/dateTime/date/date"


export default function YearBox(props) {

    const {
        formData,
        setFormData,
        label,
        fontSize,
    } = props

    const actualLabel = "year" + label
    const displayYears = inputYearValues()

    function changeYearInput(event) {
        event.preventDefault()
        const newYear = event.target.value
        setFormData(prevFormData => ({ ...prevFormData, [actualLabel]: newYear }))
    }

    function inputYearValues() {
        
        const res = []
        const dateOfTodayObj = dateFormat("today").date.split("-")
        const currentYearInInt = parseInt(dateOfTodayObj[2])

        for (let i = currentYearInInt - 5; i <= currentYearInInt + 10; i += 1) {
            const stringInt = i.toString()
            res.push(stringInt)
        }

        return res
    }


    return (
        <select 
            className={`form-select p-3 bg-body ${fontSize}`} 
            style={{ width: "115px" }} 
            onChange={(e) => changeYearInput(e)}
        >
            {formData[actualLabel].length > 0 ?
                <option value="">YYYY</option>
                :
                <option selected value="">YYYY</option>
            }
            {displayYears.map((num) => {
                if (formData[actualLabel] !== num) {
                    return <option key={num} value={num}>{num}</option>
                } else {
                    return <option key={num} selected value={num}>{num}</option>
                }
            })}
        </select>
    )
}