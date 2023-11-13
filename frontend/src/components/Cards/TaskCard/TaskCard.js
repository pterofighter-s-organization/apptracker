import { Link } from "react-router-dom"

//constants
import { ARCHIVED_BIN_ICON } from "../../../constants/components"

//css
import "./TaskCard.css"

export default function TaskCard({ id, isArchived }) {

    const title = "title hello, i am"
    const taskCardId = "task-card-" + id

    const handleDelete = (e) => {
        e.preventDefault()
        //handle delete logic
    }

    const handleRestore = (e) => {
        e.preventDefault()
        //handle restore
    }

    const handleArchive = (e) => {
        e.preventDefault() /*use preventdefault to not activate the link */
        //handle archive
    }

    return (
        <Link
            to={"/job/" + id}
            id={taskCardId}
            key={taskCardId}
            className="task-card"
        >
            <div className="task-card-section">
                {
                    isArchived ?
                        <>
                            <button
                                type="button"
                                className="onclick-bw-button"
                                onClick={(e) => handleDelete(e)}
                            >
                                <i className="bi bi-trash3-fill"></i>
                            </button>
                            <button
                                type="button"
                                className="onclick-bw-button"
                                onClick={(e) => handleRestore(e)}
                            >
                                <i className="bi bi-arrow-counterclockwise"></i>
                            </button>
                        </>
                        :
                        <button
                            type="button"
                            className="onclick-bw-button"
                            onClick={(e) => handleArchive(e)}
                        >
                            <i className={`${ARCHIVED_BIN_ICON}`} />
                        </button>
                }
                <div className="task-card-title">
                    {title}
                </div>
            </div>
            <div className="task-card-section">
                <div className="task-card-job">
                    <div className="task-card-job-text">
                        ux/ui designer ux/ui designer
                    </div>
                    <div className="task-card-job-text">
                        google
                    </div>
                </div>
                <div className="task-card-clock">
                    <div className="task-card-datetime">
                        <i className="bi bi-calendar-fill"></i>
                        2/12/2022 3:08am
                    </div>
                    <div className="task-card-timer">
                        3d
                    </div>
                </div>
            </div>
        </Link>
    )
}