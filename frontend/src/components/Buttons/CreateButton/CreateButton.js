
//css
import "./CreateButton.css"

export default function CreateButton({ handleCreate, label }) {

    return(
        <button
            type="button"
            className="create-button"
            onClick={handleCreate}
        >
            Create {label}
        </button>
    )
}