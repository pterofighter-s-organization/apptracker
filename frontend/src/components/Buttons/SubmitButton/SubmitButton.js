
//css
import "./SubmitButton.css"
import "../styles/Buttons.css"

export default function SubmitButton({ label }) {

    //form submit button, no need on click
    return (
        <button
            type="submit"
            className="button submit-button"
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            title={`Submits ${label}`}
        >
            {label || "submit"}
        </button>
    )
}