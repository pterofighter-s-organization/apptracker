import { useState } from "react"

//components
import { TextAreaInput } from "../../Inputs"

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
        })
        setText(newText)
    }

    return (
        <div className="card bg-warning bg-opacity-50" id="note-card">
            <div className="d-flex card-body" style={{ height: "300px" }}>
                <TextAreaInput
                    value={text}
                    updateValue={updateNoteText}
                />
            </div>
        </div>
    )
}