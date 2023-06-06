
//components
import { NoteCard } from "../../../../components/Cards/NoteCard"

//hooks
import useAppNotesManager from "../../../../hooks/useAppNotesManager"

export default function ApplicationNotes({ application, isArchived }) {

    const { notes, createNote, updateNote, isLoading } = useAppNotesManager(application.application_id)
    const categorizedNotes = (notes) ? notes.filter(note => note.archived === isArchived) : null

    if (isLoading) {
        return <>Loading...</>
    }

    if (!categorizedNotes) {
        return <>Get application notes error!</>
    }

    return (
        <div className="d-flex flex-wrap gap-3 gap-md-4 gap-xl-5 w-100 align-items-stretch pb-3">
            {categorizedNotes.map((note) => {
                return (
                    <NoteCard
                        note={note}
                        updateNote={updateNote}
                    />
                )
            })}
            <button
                className={`btn btn-primary d-flex flex-column justify-content-center align-items-center p-4 ${"add-form-button"}`}
                onClick={(e) => {
                    e.preventDefault()
                    //archived automatically is false
                    createNote({
                        "application_id": application.application_id,
                        "note": ""
                    })
                }}
            >
                <div className="form-button-label">
                    {categorizedNotes.length > 0 ?
                        "Add Note"
                        :
                        "Start note taking for this application"
                    }
                </div>
            </button>
        </div>
    )
}