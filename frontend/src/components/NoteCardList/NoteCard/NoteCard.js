import { useState, useEffect } from "react"

//css
import "./NoteCard.css"

//components
import MultiLineTextBox from "../../Inputs/MultiLineText/components/MultiLineTextBox"

export default function NoteCard(props) {

    const { 
        note, 
        fontSize,
        updateNote 
    } = props

    const [formData, setFormData] = useState({
        "text": note.text
    })
    const [prevText, setPrevText] = useState(note.text)

    useEffect(() => {
        if (formData && formData["text"] !== prevText) {
            updateNote({
                "id": note.id,
                "appId": note.appId,
                "text": formData["text"],
            })
            setPrevText(formData["text"])
        }
    }, [formData, updateNote, prevText, note])

    return (
        <div 
            className="card bg-warning bg-opacity-50" 
            id="noteCard" 
            style={{ height: "300px" }}
        >
            <div className="card-body" style={{ height: "100%" }}>
                <MultiLineTextBox
                    formData={formData}
                    setFormData={setFormData}
                    label={"text"}
                    fontSize={fontSize}
                />
            </div>
        </div>
    )
}