import { useContext, useEffect, useState, useRef } from "react"
import { Link } from "react-router-dom"

//components
import { showNotification, showSubmitNotification } from "../../../../NotificationList/components/Notification/Notification"
import { TextareaInput } from "../../../../Inputs/TextareaInput"
import { RestoreOptionButton } from "../../../../Buttons/OptionButtons/RestoreOptionButton"
import { DeleteOptionButton } from "../../../../Buttons/OptionButtons/DeleteOptionButton"
import { ArchiveOptionButton } from "../../../../Buttons/OptionButtons/ArchiveOptionButton"
import { LoadingDisplay } from "../../../../Displays/LoadingDisplay"
import { TooltipText } from "../../../../TooltipText"

//private-layouts
import { CardHeaderLayout } from "../layouts/CardHeaderLayout"
import { CardButtonsLayout } from "../layouts/CardButtonsLayout"

//contexts
import { NotesContext } from "../../../../../hooks/contexts/NotesContext"

//css
import "../styles/Cards.css"
import "./NoteCard.css"

export default function NoteCard({ card }) {

    const { updateJobNote, deleteJobNote } = useContext(NotesContext)
    const [value, setValue] = useState(``)
    const [isLoading, setIsLoading] = useState(false)
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
            setIsLoading(true)
            showNotification({
                status: "WARNING",
                message: "Wait... Saving text at the moment."
            })
            updateJobNote(card.note_id, {
                ...card,
                note: e.target.value
            }).then((result) => {
                showSubmitNotification({
                    status: result.success,
                    message: "Note text saved!",
                    errors: result.errors,
                })
                setIsLoading(false)
            })
            clearTimeout(noteSaveTimerRef.current)
        }, 1000) //1.5s
    }

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
        <div className="note-card-layout">
            <CardHeaderLayout>
                <Link
                    to={`/job/${card.application}`}
                    className="tracker-card-link-header-layout"
                >
                    <div className="note-card-job-title">
                        {card.position}
                    </div>
                    <div className="note-card-number">
                        #{card.note_id}
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
            <div className="note-card-content-layout">
                {
                    card.archived ?
                        <pre className="note-text">
                            {
                                value.length > 0 ?
                                    value
                                    :
                                    "This note has no text."
                            }
                        </pre>
                        :
                        <TextareaInput
                            height={"100%"}
                            name={"note"}
                            value={value}
                            placeholder={"Edit directly here, saves 3s after your last edit."}
                            handleChange={handleChange}
                        />
                }
                {
                    isLoading ?
                        <LoadingDisplay />
                        :
                        null
                }
            </div>
            <TooltipText
                id={"note-tooltip-active"}
                text={
                    card.archived ?
                        "Please restore this note to edit."
                        :
                        "Click to edit, it will save 1s after you finish editing."
                }
            />

        </div>
    )
}