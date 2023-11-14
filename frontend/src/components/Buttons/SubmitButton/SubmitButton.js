


//css
import "./SubmitButton.css"

export default function SubmitButton({ label }) {

    //form submit button, no need on click
    return (
        <button
            type="button"
            className="submit-button"
        >
            Submit {label}
        </button>
    )
}