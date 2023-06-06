import { useMemo } from 'react';

//helpers
import { inputDayValues, inputMonthValues, inputYearValues } from './DateInputInitializer';

export default function Datebox(props) {

    const {
        fontSize,
        formData,
        setFormData,
    } = props

    const displayMonths = inputMonthValues()
    const displayYears = inputYearValues()

    const displayDays = useMemo(() => {
        return inputDayValues(formData.month, formData.year)
    }, [formData.month, formData.year])

    function changeMonthInput(event) {
        event.preventDefault()
        const newMonth = event.target.value
        setFormData(prevFormData => ({ ...prevFormData, "month": newMonth }))
    }

    function changeDayInput(event) {
        event.preventDefault()
        const newDay = event.target.value
        setFormData(prevFormData => ({ ...prevFormData, "day": newDay }))
    }

    function changeYearInput(event) {
        event.preventDefault()
        const newYear = event.target.value
        setFormData(prevFormData => ({ ...prevFormData, "year": newYear }))
    }

    // console.log(displayMonths, days, displayYears)

    return (
        <>
            <div className="d-flex flex-wrap gap-3 align-items-center">
                <select className={`form-select p-3 bg-body ${fontSize}`} style={{ width: "90px" }} onChange={(e) => changeMonthInput(e)}>
                    {formData.month.length > 0 ?
                        <option value="">MM</option>
                        :
                        <option selected value="">MM</option>
                    }
                    {displayMonths.map((num) => {
                        if (formData.month !== num) {
                            return <option key={num} value={num}>{num}</option>
                        } else {
                            return <option key={num} selected value={num}>{num}</option>
                        }
                    })}
                </select>
                <select className={`form-select p-3 bg-body ${fontSize}`} style={{ width: "90px" }} onChange={(e) => changeDayInput(e)}>
                    {formData.day.length > 0 ?
                        <option value="">DD</option>
                        :
                        <option selected value="">DD</option>
                    }
                    {displayDays.map((num) => {
                        if (formData.day !== num) {
                            return <option key={num} value={num}>{num}</option>
                        } else {
                            return <option key={num} selected value={num}>{num}</option>
                        }
                    })}
                </select>
                <select className={`form-select p-3 bg-body ${fontSize}`} style={{ width: "115px" }} onChange={(e) => changeYearInput(e)}>
                    {formData.year.length > 0 ?
                        <option value="">YYYY</option>
                        :
                        <option selected value="">YYYY</option>
                    }
                    {displayYears.map((num) => {
                        if (formData.year !== num) {
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