
//components
import { NoteCard } from "../../../../components/Cards/NoteCard"

//hooks
import useAppNotesManager from "../../../../hooks/useAppNotesManager"

//css
import "./ApplicationNotes.css"

export default function ApplicationNotes({ application }) {

    const { notes, createNote, updateNote, isLoading: notesLoading } = useAppNotesManager(application.application_id)

    if (notesLoading) {
        return <>Loading...</>
    }

    if (!notes) {
        return <>Get application notes error!</>
    }

    return (
        <div className="d-flex flex-wrap gap-3 gap-md-4 gap-xl-5 w-100 pb-3">
            {notes.map((note) => {
                return (
                    <NoteCard
                        note={note}
                        updateNote={updateNote}
                    />
                )
            })}
            <button
                className="btn btn-primary d-flex flex-column justify-content-center align-items-center p-4"
                onClick={(e) => {
                    e.preventDefault()
                    createNote({
                        "application_id": application.application_id,
                        "note": ""
                    })
                }}
                id="note-add-button"
            >
                {notes.length > 0 ?
                    <div className="fs-5">
                        Add Note
                    </div>
                    :
                    <div className="fs-5">
                        Click me to start note taking for this application
                    </div>
                }
            </button>
        </div>
    )
}