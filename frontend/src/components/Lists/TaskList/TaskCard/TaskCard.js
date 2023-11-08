import { Link } from "react-router-dom"

//constants
import { ARCHIVED_BIN_ICON } from "../../../../constants/components"

//css
import "./TaskCard.css"

export default function TaskCard({ title }) {

    return (
        <Link
            to={"/all-jobs"}
            className="task-card"
        >
            <div className="task-card-section">
                <div className="task-card-buttons">
                    <button
                        type="button"
                        className="onclick-bw-button"
                        onClick={(e) => {
                            e.preventDefault() /*use preventdefault to not activate the link */
                        }}
                    >
                        <i className={`${ARCHIVED_BIN_ICON}`} />
                    </button>
                </div>
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