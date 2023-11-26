import { Link } from "react-router-dom"

//css
import "./NoteHeaderLayout.css"

export default function NoteHeaderLayout({ id, children }) {

    return (
        <div className="note-card-header">
            <Link
                to={`/job/${id}`}
                className="note-card-title"
                data-bs-toggle="tooltip"
                data-bs-placement="top"
                title={`Redirects to /job/${id}`}
            >
                UX/UI Designer/ Google
            </Link>
            {children}
        </div>
    )
}