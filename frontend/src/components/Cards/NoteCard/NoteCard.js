import { useState, useEffect } from "react"

//components
import { TextAreaInput } from "../../Inputs"

//css
import "./NoteCard.css"

export default function NoteCard({ note, updateNote }) {

    const [formData, setFormData] = useState({
        "note": note.note
    })
    const [prevText, setPrevText] = useState(note.note)

    useEffect(() => {
        if (formData && formData["note"] !== prevText) {
            updateNote({
                "note_id": note.note_id,
                "application_id": note.application_id,
                "title": "",
                "note": formData["note"],
            })
            setPrevText(formData["note"])
        }
    }, [formData, updateNote, prevText, note])

    return (
        <div
            className="card bg-warning bg-opacity-50"
            style={{ height: "300px" }}
            id="note-card"
        >
            <div className="card-body" style={{ height: "100%" }}>
                <TextAreaInput
                    formData={formData}
                    setFormData={setFormData}
                    label={"note"}
                />
            </div>
        </div>
    )
}