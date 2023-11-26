import { Link } from "react-router-dom"

//components
import { ArchivedOptionButtons } from "../../../../../Buttons/OptionButtons/ArchivedOptionButtons"

//private-layouts
import { NoteHeaderLayout } from "../layouts/NoteHeaderLayout"

//css
import "../NoteCard.css"

export default function ArchivedNoteCard({ id }) {

    const value = "t"
    const noteCardId = `note-card-${id}`

    const handleRestore = (e) => {
        e.preventDefault()
        //now restore this.
    }

    const handleDelete = (e) => {
        e.preventDefault()
    }

    return (
        <div
            className="note-card"
            key={noteCardId}
            id={noteCardId}
        >
            <NoteHeaderLayout id={id}>
                <Link
                    to={`/job/${id}`}
                    className="note-card-title"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title={`Redirects to /job/${id}`}
                >
                    UX/UI Designer/ Google
                </Link>
                <ArchivedOptionButtons
                    handleDelete={handleDelete}
                    handleRestore={handleRestore}
                />
            </NoteHeaderLayout>
            <div className="note-card-content">
                {
                    value.length > 0 ?
                        <>
                            <pre className="note-card-content-text">
                                {value}
                            </pre>
                            <div className="note-card-starter note-card-content-hover">
                                Please restore and edit in job page/dashboard.
                            </div>
                        </>
                        :
                        <div>
                            No text, Please restore and edit in job page/dashboard.
                        </div>
                }
            </div>
        </div>
    )
}