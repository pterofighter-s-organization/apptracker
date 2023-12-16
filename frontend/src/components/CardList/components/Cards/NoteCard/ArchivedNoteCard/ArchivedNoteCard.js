import { useContext } from "react"

//components
import { showSubmitNotification } from "../../../../../NotificationList/components/Notification/Notification"
import { RestoreOptionButton } from "../../../../../Buttons/OptionButtons/RestoreOptionButton"
import { DeleteOptionButton } from "../../../../../Buttons/OptionButtons/DeleteOptionButton"

//private-components
import { NoteHeader } from "../components/NoteHeader"

//private-layouts
import { CardHeaderLayout } from "../../layouts/CardHeaderLayout"
import { CardButtonsLayout } from "../../layouts/CardButtonsLayout"

//contexts
import { NotesContext } from "../../../../../../hooks/contexts/NotesContext"

//css
import "../NoteCard.css"

export default function ArchivedNoteCard({ card }) {

    const { updateJobNote, deleteJobNote } = useContext(NotesContext)

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
        <>
            <CardHeaderLayout>
                <NoteHeader
                    id={card.note_id}
                    job={card.position}
                    link={`/job/${card.application}`}
                />
                <CardButtonsLayout>
                    <RestoreOptionButton
                        handleRestore={handleRestore}
                    />
                    <DeleteOptionButton
                        handleDelete={handleDelete}
                    />
                </CardButtonsLayout>
            </CardHeaderLayout>
            <div className="note-card-content">
                {
                    card.note.length > 0 ?
                        <>
                            <pre className="note-card-content-text">
                                {card.note}
                            </pre>
                            <div className="note-card-hover-layout note-card-hover-content">
                                Please restore to edit.
                            </div>
                        </>
                        :
                        <div>
                            No text, please restore to edit.
                        </div>
                }
            </div>
        </>
    )
}