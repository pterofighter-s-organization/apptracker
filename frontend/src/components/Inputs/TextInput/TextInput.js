
//css
import "./TextInput.css"
import "../Input.css"

export default function TextInput({ name, header, footer, isRequired, formDataObj, handleChange }) {

    return (
        <div className="input-container">
            <span className={`input-header ${formDataObj.error.length > 0 ? "input-text-error" : ""}`}>
                {header} {isRequired ? "*" : null}
            </span>
            <input
                type="text"
                name={name}
                className={`input-box ${formDataObj.error.length > 0 ? "input-error" : ""}`}
                placeholder={name.toUpperCase()}
                value={formDataObj.value}
                onChange={handleChange}
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