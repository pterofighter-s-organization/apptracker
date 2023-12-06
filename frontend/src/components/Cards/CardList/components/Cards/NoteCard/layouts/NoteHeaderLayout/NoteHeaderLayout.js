import { Link } from "react-router-dom"

//css
import "./NoteHeaderLayout.css"

export default function NoteHeaderLayout({ id, jobId, job, children }) {

    return (
        <div className="note-card-header">
            <Link
                to={`/job/${jobId}`}
                className="note-card-title"
                data-bs-toggle="tooltip"
                data-bs-placement="top"
                title={`Redirects to /job/${jobId}`}
            >
                <div className="note-card-job-title">
                    {job}
                </div>
                <div className="note-card-number">
                    #{id}
                </div>
            </Link>
            {children}
        </div>
    )
}