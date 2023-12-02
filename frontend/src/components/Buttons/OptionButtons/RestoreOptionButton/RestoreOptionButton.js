


//css
import "../styles/OptionButton.css"
import "./RestoreOptionButton.css"

export default function RestoreOptionButton({ handleRestore }) {

    return (
        <button
            type="button"
            className="button option-button restore-option-button"
            onClick={handleRestore}
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            title={`Press to restore.`}
        >
            <i className="bi bi-arrow-counterclockwise"></i>
        </button>
    )
}