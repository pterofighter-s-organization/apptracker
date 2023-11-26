


//css
import "./SubmitButton.css"

export default function SubmitButton({ label }) {

    //form submit button, no need on click
    return (
        <button
            type="submit"
            className="submit-button"
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            title={`Submits ${label}`}
        >
            Submit {label}
        </button>
    )
}