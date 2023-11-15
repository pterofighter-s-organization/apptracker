import { Link } from "react-router-dom"

//components
import { ArchivedOptionButtons } from "../../../../../Buttons/OptionButtons/ArchivedOptionButtons"

//css
import "../NoteCard.css"

export default function ArchivedNoteCard({ id }) {

    const value = "t"
    const noteCardId = "note-card-" + id

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
            <div className="note-card-header">
                <Link
                    to={"/job-edit/" + id}
                    className="note-card-title"
                >
                    UX/UI Designer/ Google
                </Link>
                <ArchivedOptionButtons
                    handleDelete={handleDelete}
                    handleRestore={handleRestore}
                />
            </div>
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