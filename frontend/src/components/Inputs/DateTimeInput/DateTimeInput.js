
//css
import "./DateTimeInput.css"
import "./Input.css"

export default function DateTimeInput({ name, header, footer, formDataObj, handleChange }) {

    //find todays date to put in min
    //find todays date and 3 years later to put in max

    return (
        <div className="input-container">
            <span className={`input-header ${formDataObj.error.length > 0 ? "input-text-error" : ""}`}>
                {header}
            </span>
            <input
                type="datetime-local"
                name={name}
                className={`datetime-input ${formDataObj.error.length > 0 ? "input-error" : ""}`}
                value={formDataObj.value}
                onChange={handleChange}
                min=""
                max=""
            />
            <span className={`input-footer ${formDataObj.error.length > 0 ? "input-text-error" : ""}`}>
                -
                <span className="input-footer-text">
                    {
                        formDataObj.error.length > 0 ?
                            formDataObj.error
                            :
                            footer
                    }
                </span>
            </span>
        </div>
    )
}