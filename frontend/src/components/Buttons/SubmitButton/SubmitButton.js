


//css
import "./SubmitButton.css"

export default function SubmitButton({ label }) {

    //form submit button, no need on click
    return (
        <button
            type="submit"
            className="submit-button"
        >
            Submit {label}
        </button>
    )
}