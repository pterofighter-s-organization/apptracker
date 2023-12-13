import { Link } from "react-router-dom"

//css
import "./NoteHeader.css"

export default function NoteHeader({ id, job, link }) {

    return (
        <Link
            to={link}
            className="note-card-header"
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            title={`Redirects to ${link}`}
        >
            <div className="note-card-job">
                {job}
            </div>
            <div className="note-card-number">
                #{id}
            </div>
        </Link>
    )
}