import { Link } from "react-router-dom"

//private-components
import { ArchivedOptionButtons } from "../../../../Buttons/OptionButtons/ArchivedOptionButtons"
import { ActiveOptionButtons } from "../../../../Buttons/OptionButtons/ActiveOptionButtons"

//css
import "./TaskCard.css"

export default function TaskCard({ id, isArchived }) {

    const title = "title hello, i am lorep ipsum looking for ipsum"
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

    // Red: #ff6666
    // Yellow: #ffff66
    // Green: #66ff66

    return (
        <Link
            to={"/job/" + id}
            id={taskCardId}
            className="task-card-container"
        >
            <div style={{ border: `2.5px double ${"#ff6666"}` }} />
            <div className="task-card-header">
                <h5 className="task-card-job">
                    ux/ui designer / google
                </h5>
                {isArchived ?
                    <ArchivedOptionButtons
                        handleDelete={handleDelete}
                        handleRestore={handleRestore}
                    />
                    :
                    <ActiveOptionButtons />
                }
            </div>
            <div className="task-card-title">
                {title}
            </div>
            <div className="task-card-clock">
                <div className="task-card-datetime">
                    <i className="bi bi-calendar-fill"></i>
                    2/12/2022 3:08am
                </div>
                <div className="task-card-timer" style={{ paddingRight: "0.5em" }}>
                    3d
                </div>
            </div>
        </Link>
    )
}