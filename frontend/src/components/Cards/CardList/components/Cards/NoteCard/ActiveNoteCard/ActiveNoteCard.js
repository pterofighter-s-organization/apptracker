import { useState, useContext, useEffect } from "react"

//components
import { showSubmitNotification } from "../../../../../../NotificationList/components/Notification/Notification"
import { SaveOptionButton } from "../../../../../../Buttons/OptionButtons/SaveOptionButton"
import { EditOptionButton } from "../../../../../../Buttons/OptionButtons/EditOptionButton"
import { ArchiveOptionButton } from "../../../../../../Buttons/OptionButtons/ArchiveOptionButton"
import { TextareaInput } from "../../../../../../Inputs/TextareaInput"

//private-components
import { NoteHeader } from "../components/NoteHeader"

//private-layout
import { CardHeaderLayout } from "../../layouts/CardHeaderLayout"
import { CardButtonsLayout } from "../../layouts/CardButtonsLayout"

//context
import { NotesContext } from "../../../../../../../hooks/contexts/NotesContext"

//css
import "../NoteCard.css"

export default function ActiveNoteCard({ card }) {

    const { updateJobNote } = useContext(NotesContext)
    const [value, setValue] = useState(``)
    const [isEdit, setIsEdit] = useState(false)

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
        <>
            <CardHeaderLayout>
                <NoteHeader
                    id={card.note_id}
                    job={card.position}
                    link={`/job/${card.application_id}`}
                />
                <CardButtonsLayout>
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
                </CardButtonsLayout>
            </CardHeaderLayout>
            {
                isEdit ?
                    <TextareaInput
                        height={"100%"}
                        name={"note"}
                        value={value}
                        placeholder={"Remember to save above after edit."}
                        handleChange={handleValue}
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
                                        className="note-card-hover-layout note-card-hover-content"
                                        onClick={handleEdit}
                                    >
                                        click to continue editing
                                    </button>
                                </>
                                :
                                <button
                                    type="button"
                                    className="note-card-hover-layout"
                                    onClick={handleEdit}
                                >
                                    click to start editing
                                </button>
                        }
                    </div>
            }
        </>
    )
}