


//css
import "../styles/OptionButton.css"

export default function EditOptionButton({ handleEdit }) {

    return (
        <button
            type="button"
            className="option-button"
            onClick={handleEdit}
        >
            <i className="bi bi-pencil-fill"></i>
        </button>
    )
}