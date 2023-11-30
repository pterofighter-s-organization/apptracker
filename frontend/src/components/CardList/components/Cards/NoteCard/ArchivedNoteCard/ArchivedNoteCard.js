import { useContext } from "react"

//components
import { ArchivedOptionButtons } from "../../../../../Buttons/OptionButtons/ArchivedOptionButtons"
import { showSubmitNotification } from "../../../../../NotificationList/components/Notification/Notification"

//private-layouts
import { NoteHeaderLayout } from "../layouts/NoteHeaderLayout"

//contexts
import { NotesContext } from "../../../../../../hooks/contexts/NotesContext"

//css
import "../NoteCard.css"

export default function ArchivedNoteCard({ card }) {

    const { updateJobNote, deleteJobNote } = useContext(NotesContext)
    const noteCardId = `note-card-${card.note_id}`

    const handleRestore = (e) => {
        e.preventDefault()

        updateJobNote(card.note_id, {
            ...card,
            archived: false
        }).then((result) => {
            showSubmitNotification({
                status: result.success,
                errors: result.errors,
                message: "Note got restored!"
            })
        })
    }

    const handleDelete = (e) => {
        e.preventDefault()

        deleteJobNote(card.note_id)
            .then((result) => {
                showSubmitNotification({
                    status: result.success,
                    errors: result.errors,
                    message: "Note deleted successfully!"
                })
            })
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
                <ArchivedOptionButtons
                    handleDelete={handleDelete}
                    handleRestore={handleRestore}
                />
            </NoteHeaderLayout>
            <div className="note-card-content">
                {
                    card.note.length > 0 ?
                        <>
                            <pre className="note-card-content-text">
                                {card.note}
                            </pre>
                            <div className="note-card-starter note-card-content-hover">
                                Please restore and edit in job page/dashboard.
                            </div>
                        </>
                        :
                        <div>
                            No text, please restore to edit.
                        </div>
                }
            </div>
        </div>
    )
}