


//css
import "../styles/OptionButton.css"
import "./RestoreOptionButton.css"

export default function RestoreOptionButton({ handleRestore }) {

    return (
        <button
            type="button"
            className="option-button restore-option-button"
            onClick={handleRestore}
        >
            <i className="bi bi-arrow-counterclockwise"></i>
        </button>
    )
}