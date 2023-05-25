
//css
import "./AddNoteButton.css"

export default function AddNoteButton({ application_id, createNote }) {

    return (
        <button
            className="btn btn-primary d-flex flex-column justify-content-center align-items-center p-4"
            onClick={(e) => {
                e.preventDefault()
                createNote(application_id)
            }}
            id="addNoteButton"
            style={{ height: "300px" }}
        >
            <div className="fs-5">
                Add Note
            </div>
        </button>
    )
}