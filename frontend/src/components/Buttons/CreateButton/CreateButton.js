
//css
import "./CreateButton.css"
import "../styles/Buttons.css"

export default function CreateButton({ handleCreate, label }) {

    return (
        <button
            id={label}
            type="button"
            className="button create-button"
            onClick={handleCreate}
            // data-bs-toggle="tooltip"
            // data-bs-placement="top"
            // title={`Creates a ${label}`}
        >
            Create {label}
        </button>
    )
}