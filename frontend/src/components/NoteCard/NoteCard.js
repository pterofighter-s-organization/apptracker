
//components
import { useEffect, useState } from "react"
import MultiLineTextBox from "../Inputs/MultiLineText/components/MultiLineTextBox.js"
import { debounce } from "../../utils/dateTime/time/time.js"


export default function NoteCard(props) {

    const {
        noteText,
        updateNote,
        id,
        fontSize,
    } = props

    const [formData, setFormData] = useState(null)
    const [prevNoteText, setPrevNoteText] = useState(null)

    useEffect(() => {
        if (noteText.length >= 0) {
            setFormData({ "noteText": noteText })
            setPrevNoteText(noteText)
        }
    }, [noteText])

    useEffect(() => {
        if (formData && formData["noteText"] !== prevNoteText) {
            debounce(() => {
                updateNote({
                    "text": formData["noteText"],
                    "id": id
                }, id)
                setPrevNoteText(formData["noteText"])
            }, 250)
        }
    }, [formData, noteText, id, updateNote, prevNoteText])

    console.log(formData, noteText, id)
    if (!formData) {
        return <></>
    }

    return (
        <div className="card">
            <div className="card-body" >
                <MultiLineTextBox
                    formData={formData}
                    setFormData={setFormData}
                    label={"noteText"}
                    fontSize={fontSize}
                />
            </div>
        </div>
    )

}