import { useState, useContext, useEffect } from "react"

//components
import { ActiveOptionButtons } from "../../../../../Buttons/OptionButtons/ActiveOptionButtons"
import { showSubmitNotification } from "../../../../../NotificationList/components/Notification/Notification"

//private-layout
import { NoteHeaderLayout } from "../layouts/NoteHeaderLayout"

//context
import { NotesContext } from "../../../../../../hooks/contexts/NotesContext"

//css
import "../NoteCard.css"

export default function ActiveNoteCard({ card }) {

    const { updateJobNote } = useContext(NotesContext)
    const [value, setValue] = useState(``)
    const [isEdit, setIsEdit] = useState(false)
    const noteCardId = `note-card-${card.note_id}`

    useEffect(() => {
        setValue(card.note)
    }, [card.note])

    const handleArchive = (e) => {
        e.preventDefault()
        updateJobNote(card.note_id, {
            ...card,
            archived: true
        }).then((result) => {
            showSubmitNotification({
                status: result.success,
                errors: result.errors,
                message: "Note got archived!"
            })
        })
    }

    const handleSave = (e) => {
        e.preventDefault()
        setIsEdit(false)

        updateJobNote(card.note_id, {
            ...card,
            note: value
        }).then((result) => {
            showSubmitNotification({
                status: result.success,
                errors: result.errors,
                message:  "Note text saved!"
            })
        })
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
            <NoteHeaderLayout 
                id={card.note_id}
                jobId={card.application_id}
                job={card.position}
            >
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
                        id={"textarea-" + card.note_id}
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