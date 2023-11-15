import { Link } from "react-router-dom"

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
                <button
                    type="button"
                    className="onclick-bw-button"
                    onClick={(e) => handleRestore(e)}
                >
                    <i className="bi bi-arrow-counterclockwise"></i>
                </button>
                <button
                    type="button"
                    className="onclick-bw-button"
                    onClick={(e) => handleDelete(e)}
                >
                    <i className="bi bi-trash3-fill"></i>
                </button>
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