import { useState } from "react"

//components
import { TextAreaInput } from "../../Inputs/TextAreaInput"

//css
import "./NoteCard.css"

export default function NoteCard({ note, updateNote }) {

    const [text, setText] = useState(note.note)

    function updateNoteText(newText) {
        updateNote({
            "note_id": note.note_id,
            "application_id": note.application_id,
            "title": "",
            "note": newText,
            "archived": note.archived
        })
        setText(newText)
    }

    function updateArchiveStatus() {
        updateNote({
            "note_id": note.note_id,
            "application_id": note.application_id,
            "title": "",
            "note": text,
            "archived": !note.archived
        })
    }

    return (
        <div className={`card bg-warning bg-opacity-50 d-flex flex-column ${"note-card"}`} style={{height: "300px"}}>
            <div className="d-flex flex-wrap card-header fs-6 px-3">
                <div className="flex-grow-1">
                    Note #{note.note_id}
                </div>
                <button
                    className="btn p-0"
                    onClick={(e) => {
                        e.preventDefault()
                        updateArchiveStatus()
                    }}
                    data-bs-toggle="tooltip" data-bs-placement="right"
                    title={(!note.archived) ? "Archived this note" : ("Restore this note to application " + note.application_id)}
                >
                    <div className="">
                        {!note.archived ?
                            <i class="bi bi-x-lg"></i>
                            :
                            <i class="bi bi-arrow-clockwise"></i>
                        }
                    </div>
                </button>
            </div>
            <div className="card-body d-flex p-1">
                <TextAreaInput
                    value={text}
                    updateValue={updateNoteText}
                />
            </div>
        </div>
    )
}