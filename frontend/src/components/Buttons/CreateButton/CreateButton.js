
//css
import "./CreateButton.css"

export default function CreateButton({ handleCreate, label }) {

    return(
        <button
            type="button"
            className="create-button"
            onClick={handleCreate}
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            title={`Creates a ${label}`}
        >
            Create {label}
        </button>
    )
}