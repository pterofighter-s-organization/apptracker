

//css
import "../styles/OptionButton.css"
import "../../styles/Buttons.css"

export default function SaveOptionButton({ handleSave }) {

    return (
        <button
            type="button"
            className="button option-button"
            onClick={handleSave}
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            title={`Press to save.`}
        >
            <i className="bi bi-save-fill"></i>
        </button>
    )
}