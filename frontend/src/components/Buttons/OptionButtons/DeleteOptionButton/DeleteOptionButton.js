
//css
import "../styles/OptionButton.css"

export default function DeleteOptionButton({ handleDelete }) {

    return (
        <button
            type="button"
            className="option-button"
            onClick={handleDelete}
        >
            <i className="bi bi-trash3-fill"></i>
        </button>
    )
}