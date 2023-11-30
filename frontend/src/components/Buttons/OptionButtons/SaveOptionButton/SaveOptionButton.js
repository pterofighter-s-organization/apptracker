

//css
import "../styles/OptionButton.css"

export default function SaveOptionButton({ handleSave }) {

    return (
        <button
            type="button"
            className="option-button"
            onClick={handleSave}
        >
            <i className="bi bi-save-fill"></i>
        </button>
    )
}