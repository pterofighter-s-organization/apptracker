
//private-layouts
import { InputLayout } from "../layouts/InputLayout"

//css
import "./DateTimeInput.css"

export default function DateTimeInput({ name, formDataObj, handleChange, ...props }) {

    //find todays date to put in min
    //find todays date and 3 years later to put in max

    // console.log("date", formDataObj.value)
    return (
        <InputLayout
            formDataObj={formDataObj}
            {...props}
        >
            <input
                type="datetime-local"
                name={name}
                className={`datetime-input-box input-box ${formDataObj.error.length > 0 ? "input-error" : ""}`}
                value={formDataObj.value}
                onChange={handleChange}
                min=""
                max=""
            />
        </InputLayout>
    )
}