import { useContext, useEffect, useState, useRef } from "react"
import { Link } from "react-router-dom"

//components
import { showSuccessNotification, showFailNotification } from "../../../NotificationList/Notification/Notification"
import { RestoreOptionButton } from "../../../Buttons/OptionButtons/RestoreOptionButton"
import { DeleteOptionButton } from "../../../Buttons/OptionButtons/DeleteOptionButton"
import { ArchiveOptionButton } from "../../../Buttons/OptionButtons/ArchiveOptionButton"
import { LoadingDisplay } from "../../../Displays/LoadingDisplay"
import { EditableTextInput } from "../../../Inputs/EditableTextInput"

//private-layouts
import { CardHeaderLayout } from "../layouts/CardHeaderLayout"
import { CardButtonsLayout } from "../layouts/CardButtonsLayout"

//contexts
import { NotesContext } from "../../../../hooks/contexts/NotesContext"

//css
import "../styles/Cards.css"
import "./NoteCard.css"

export default function NoteCard({ card }) {

    const { updateJobNote, deleteJobNote } = useContext(NotesContext)
    const [value, setValue] = useState(``)
    const [isEditing, setIsEditing] = useState(false)
    const [isUpdating, setIsUpdating] = useState(false)
    //use ref doesn't cause re-render for values that persist (basically values that doesnt need to re-render for updating purposes)
    const noteSaveTimerRef = useRef(null)

    useEffect(() => {
        setValue(card.note)
    }, [card.note])

    const handleChange = (e) => {
        e.preventDefault()
        setValue(e.target.value)

        //when user stops typing, it will count a 1.0s timer to see if user still edits.
        //if not, we save, if is we reset.
        if (noteSaveTimerRef.current) {
            clearTimeout(noteSaveTimerRef.current)
        }

        noteSaveTimerRef.current = setTimeout(() => {
            setIsEditing(true)
            const prevValue = value //once error, this will replace the changes

            updateJobNote(card.note_id, {
                ...card,
                note: e.target.value
            }).then(() => {
                showSuccessNotification({
                    message: "Note saved successfully!"
                })
            }).catch((errors) => {
                showFailNotification({
                    errors: errors
                })
                setValue(prevValue)
            }).finally(() => {
                setIsEditing(false)
            })

            clearTimeout(noteSaveTimerRef.current)
        }, 1000) //1.5s
    }

    const handleArchive = (e) => {
        e.preventDefault()
        setIsUpdating(true)

        updateJobNote(card.note_id, {
            ...card,
            archived: true
        }).then(() => {
            showSuccessNotification({
                message: "Note got archived!"
            })
        }).catch((errors) => {
            showFailNotification({
                errors: errors
            })
        }).finally(() => {
            setIsUpdating(false)
        })
    }

    const handleRestore = (e) => {
        e.preventDefault()
        setIsUpdating(true)

        updateJobNote(card.note_id, {
            ...card,
            archived: false
        }).then(() => {
            showSuccessNotification({
                message: "Note got restored!"
            })
        }).catch((errors) => {
            showFailNotification({
                errors: errors
            })
        }).finally(() => {
            setIsUpdating(false)
        })
    }

    const handleDelete = (e) => {
        e.preventDefault()
        setIsUpdating(true)

        deleteJobNote(card.note_id)
            .then(() => {
                showSuccessNotification({
                    message: "Note deleted successfully!"
                })
            })
            .catch((errors) => {
                showFailNotification({
                    errors: errors
                })
            })
            .finally(() => {
                setIsUpdating(false)
            })
    }

    if (isUpdating) {
        return (
            <LoadingDisplay
                height={"15rem"}
            />
        )
    }

    return (
        <div className="note-card-layout">
            <CardHeaderLayout>
                <Link
                    to={`/job/${card.application}`}
                    className="tracker-card-link-header-layout"
                >
                    <div className="tracker-card-company">
                        {card.company}
                    </div>
                    /
                    <div className="tracker-card-job">
                        {card.position}
                    </div>
                </Link>
                <CardButtonsLayout>
                    {
                        card.archived ?
                            <>
                                <RestoreOptionButton
                                    handleRestore={handleRestore}
                                />
                                <DeleteOptionButton
                                    handleDelete={handleDelete}
                                />
                            </>
                            :
                            <ArchiveOptionButton
                                handleArchive={handleArchive}
                            />
                    }
                </CardButtonsLayout>
            </CardHeaderLayout>
            <EditableTextInput
                isArchived={card.archived}
                isEditing={isEditing}
                value={value}
                height={"100%"}
                handleChange={handleChange}
            />
        </div>
    )
}