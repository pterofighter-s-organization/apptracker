
//css
import "../styles/OptionButton.css"
import "../../styles/Buttons.css"

export default function DeleteOptionButton({ handleDelete }) {

    return (
        <button
            type="button"
            className="button option-button"
            onClick={handleDelete}
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            title={`Press to delete forever.`}
        >
            <i className="bi bi-trash3-fill"></i>
        </button>
    )
}