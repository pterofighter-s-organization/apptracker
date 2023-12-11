import { useContext } from "react"
import { Link } from "react-router-dom"

//components
import { showSubmitNotification } from "../../../../NotificationList/components/Notification/Notification"
import { RestoreOptionButton } from "../../../../Buttons/OptionButtons/RestoreOptionButton"
import { DeleteOptionButton } from "../../../../Buttons/OptionButtons/DeleteOptionButton"
import { ArchiveOptionButton } from "../../../../Buttons/OptionButtons/ArchiveOptionButton"

//private-layouts
import { CardHeaderLayout } from "../layouts/CardHeaderLayout"
import { CardButtonsLayout } from "../layouts/CardButtonsLayout"

//utils
import { dateTimeFormatter, timerFormatter } from "../../../../../utils/format"

//contexts
import { TasksContext } from "../../../../../hooks/contexts/TasksContext"

//css
import "./TaskCard.css"
import "../styles/Cards.css"

export default function TaskCard({ card }) {

    const taskCardId = "task-card-" + card.task_id
    const { updateJobTask, deleteJobTask } = useContext(TasksContext)

    const handleDelete = (e) => {
        e.preventDefault()
        //handle delete logic
        deleteJobTask(card.task_id)
            .then((result) => {
                showSubmitNotification({
                    status: result.success,
                    errors: result.errors,
                    message: "task deleted successfully!"
                })
            })
    }

    const handleRestore = (e) => {
        e.preventDefault()
        //handle restore
        updateJobTask(card.task_id, {
            ...card,
            archived: false
        }).then((result) => {
            showSubmitNotification({
                status: result.success,
                errors: result.errors,
                message: "task got restored!"
            })
        })
    }

    const handleArchive = (e) => {
        e.preventDefault() /*use preventdefault to not activate the link */
        //handle archive
        updateJobTask(card.task_id, {
            ...card,
            archived: true
        }).then((result) => {
            showSubmitNotification({
                status: result.success,
                errors: result.errors,
                message: "task got archived!"
            })
        })
    }

    const TASK_STAGE_COLORS = {
        // Red: #ff6666
        // Blue: #4099ff
        // Green: #009E60
        years: "#009E60",
        months: "#009E60",
        days: "#009E60",
        hours: "#4099ff",
        minutes: "#4099ff",
        secs: "#ff6666",
        overdue: "#ff6666",
        due: "#ff6666"
    }

    const taskTimerObj = timerFormatter(card.date_due) //decides the color and value it displays

    return (
        <Link
            to={"/job/" + card.application_id}
            key={taskCardId}
            id={taskCardId}
            className="tracker-card task-card-layout"
        >
            <CardHeaderLayout>
                <h5 className="task-card-job">
                    {card.company} / {card.position}
                </h5>
                <CardButtonsLayout>
                    {
                        card.archived ?
                            <>
                                <RestoreOptionButton
                                    handleRestore={handleRestore}
                                />
                                <DeleteOptionButton
                                    handleDelete={handleDelete}
                                />
                            </>
                            :
                            <ArchiveOptionButton
                                handleArchive={handleArchive}
                            />
                    }
                </CardButtonsLayout>
            </CardHeaderLayout>
            <div className="task-card-title">
                {card.title}
            </div>
            <div className="task-card-clock">
                <div
                    className="task-card-datetime"
                    style={{ color: TASK_STAGE_COLORS[taskTimerObj.label] }}
                >
                    <i className="bi bi-calendar-fill"></i>
                    {dateTimeFormatter(card.date_due)}
                </div>
                <div
                    className="task-card-timer"
                    style={{ paddingRight: "0.5em", color: TASK_STAGE_COLORS[taskTimerObj.label] }}
                >
                    {taskTimerObj.value}
                </div>
            </div>
        </Link>
    )
}