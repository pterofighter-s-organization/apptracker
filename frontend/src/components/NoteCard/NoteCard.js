
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
        appId,
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
            // console.log(formData, formData.noteText !== prevNoteText, prevNoteText, formData["noteText"])
            // const test = debounce(() => {
            //     console.log("test")
            //     updateNote({
            //         "text": formData["noteText"],
            //         "id": id,
            //         "appId": appId
            //     }, id)
            //     setPrevNoteText(formData["noteText"])
            // }, 250)

            console.log("test", formData["text"])
            updateNote({
                "id": id,
                "appId": appId,
                "text": formData["noteText"],
            }, id)
            setPrevNoteText(formData["noteText"])


            // window.addEventListener("test", test)
        }
    }, [formData, noteText, id, updateNote, prevNoteText, appId])

    // console.log(formData, noteText, id)
    if (!formData) {
        return <></>
    }

    return (
        <div className="card" style={{ height: "300px" }}>
            <div className="card-body" style={{ height: "300px" }}>
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