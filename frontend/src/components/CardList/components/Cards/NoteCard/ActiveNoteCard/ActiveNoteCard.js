import { useState } from "react"

//components
import { ActiveOptionButtons } from "../../../../../Buttons/OptionButtons/ActiveOptionButtons"

//private-layout
import { NoteHeaderLayout } from "../layouts/NoteHeaderLayout"

//css
import "../NoteCard.css"

export default function ActiveNoteCard({ id }) {

    const [value, setValue] = useState(``)
    const [isEdit, setIsEdit] = useState(false)
    const noteCardId = `note-card-${id}`

    const handleArchive = (e) => {
        e.preventDefault()
    }

    const handleSave = (e) => {
        e.preventDefault()
        setIsEdit(false)
        //add a method to save it to backend
    }

    const handleEdit = (e) => {
        e.preventDefault()
        setIsEdit(true)
    }

    const handleValue = (e) => {
        e.preventDefault()
        setValue(e.target.value)
    }

    return (
        <div
            className="note-card"
            key={noteCardId}
            id={noteCardId}
        >
            <NoteHeaderLayout id={id}>
                {
                    isEdit ?
                        <button
                            type="button"
                            className="onclick-bw-button"
                            onClick={handleSave}
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            title="Saves the edit."
                        >
                            <i className="bi bi-save-fill"></i>
                        </button>
                        :
                        <button
                            type="button"
                            className="onclick-bw-button"
                            onClick={handleEdit}
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            title="Opens textbox for input."
                        >
                            <i className="bi bi-pencil-fill"></i>
                        </button>
                }
                <ActiveOptionButtons
                    handleArchive={handleArchive}
                />
            </NoteHeaderLayout>
            {
                isEdit ?
                    <textarea
                        id={"textarea-" + id}
                        className="note-card-textarea"
                        value={value}
                        placeholder="Remember to save above after edit."
                        onChange={handleValue}
                    />
                    :
                    <div className="note-card-content">
                        {
                            value.length > 0 ?
                                <>
                                    <pre className="note-card-content-text">
                                        {value}
                                    </pre>
                                    <button
                                        type="button"
                                        className="note-card-starter note-card-content-hover"
                                        onClick={handleEdit}
                                    >
                                        click to continue editing
                                    </button>
                                </>
                                :
                                <button
                                    type="button"
                                    className="note-card-starter"
                                    onClick={handleEdit}
                                >
                                    click to start editing
                                </button>
                        }
                    </div>
            }
        </div>
    )
}