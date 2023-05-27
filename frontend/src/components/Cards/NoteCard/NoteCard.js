import { useState, useEffect } from "react"

//components
import { TextAreaInput } from "../../Inputs"

//css
import "./NoteCard.css"

export default function NoteCard({ note, updateNote }) {

    const [formData, setFormData] = useState({
        "text": note.text
    })
    const [prevText, setPrevText] = useState(note.text)

    useEffect(() => {
        if (formData && formData["text"] !== prevText) {
            updateNote({
                "note_id": note.note_id,
                "application_id": note.application_id,
                "title": "",
                "text": formData["text"],
            })
            setPrevText(formData["text"])
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
                    label={"text"}
                />
            </div>
        </div>
    )
}