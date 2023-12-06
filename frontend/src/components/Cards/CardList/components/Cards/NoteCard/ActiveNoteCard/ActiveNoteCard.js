import { useState, useContext, useEffect } from "react"

//components
import { showSubmitNotification } from "../../../../../../NotificationList/components/Notification/Notification"
import { SaveOptionButton } from "../../../../../../Buttons/OptionButtons/SaveOptionButton"
import { EditOptionButton } from "../../../../../../Buttons/OptionButtons/EditOptionButton"
import { ArchiveOptionButton } from "../../../../../../Buttons/OptionButtons/ArchiveOptionButton"

//private-layout
import { NoteHeaderLayout } from "../layouts/NoteHeaderLayout"

//context
import { NotesContext } from "../../../../../../../hooks/contexts/NotesContext"

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
                message: "Note text saved!"
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
                        <SaveOptionButton
                            handleSave={handleSave}
                        />
                        :
                        <EditOptionButton
                            handleEdit={handleEdit}
                        />
                }
                <ArchiveOptionButton
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