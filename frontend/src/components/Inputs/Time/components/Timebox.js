//helpers
import { inputHourValues, inputMinValues } from "./TimeInputHelper"

export default function Timebox(props) {

    const {
        fontSize,
        formData,
        setFormData,
    } = props

    const displayMins = inputMinValues()
    const displayHours = inputHourValues()

    function changeHoursInput(event) {
        event.preventDefault()
        const newHour = event.target.value
        setFormData(prevFormData => ({ ...prevFormData, "hour": newHour }))
    }

    function changeMinsInput(event) {
        event.preventDefault()
        const newMin = event.target.value
        setFormData(prevFormData => ({ ...prevFormData, "min": newMin }))
    }

    return (
        <>
            <div className="d-flex flex-wrap gap-3 align-items-center">
                <select className={`form-select p-3 bg-body ${fontSize}`} style={{ width: "90px" }} onChange={(e) => changeHoursInput(e)}>
                    {formData.hour.length > 0 ?
                        <option value="">hh</option>
                        :
                        <option selected value="">hh</option>
                    }
                    {displayHours.map((num) => {
                        if (formData.hour !== num) {
                            return <option key={num} value={num}>{num}</option>
                        } else {
                            return <option key={num} selected value={num}>{num}</option>
                        }
                    })}
                </select>
                <select className={`form-select p-3 bg-body ${fontSize}`} style={{ width: "90px" }} onChange={(e) => changeMinsInput(e)}>
                    {formData.min.length > 0 ?
                        <option value="">mm</option>
                        :
                        <option selected value="">mm</option>
                    }
                    {displayMins.map((num) => {
                        if (formData.min !== num) {
                            return <option key={num} value={num}>{num}</option>
                        } else {
                            return <option key={num} selected value={num}>{num}</option>
                        }
                    })}
                </select>
            </div>
        </>
    )
}