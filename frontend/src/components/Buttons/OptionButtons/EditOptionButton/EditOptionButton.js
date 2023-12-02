


//css
import "../styles/OptionButton.css"

export default function EditOptionButton({ handleEdit }) {

    return (
        <button
            type="button"
            className="button option-button"
            onClick={handleEdit}
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            title={`Press to edit.`}
        >
            <i className="bi bi-pencil-fill"></i>
        </button>
    )
}