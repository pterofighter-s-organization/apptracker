import { useContext, useState } from "react"
import { Link } from "react-router-dom"

//components
import { showFailNotification, showSuccessNotification } from "../../../../NotificationList/components/Notification/Notification"
import { RestoreOptionButton } from "../../../../Buttons/OptionButtons/RestoreOptionButton"
import { DeleteOptionButton } from "../../../../Buttons/OptionButtons/DeleteOptionButton"
import { ArchiveOptionButton } from "../../../../Buttons/OptionButtons/ArchiveOptionButton"
import { LoadingDisplay } from "../../../../Displays/LoadingDisplay"

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
    const [isUpdating, setIsUpdating] = useState(false)

    const handleDelete = (e) => {
        e.preventDefault()
        setIsUpdating(true)

        //handle delete logic
        deleteJobTask(card.task_id)
            .then((result) => {
                showSuccessNotification({
                    message: "Task deleted successfully!"
                })
            })
            .catch((errors) => {
                showFailNotification({
                    errors: errors
                })
            })
            .finally(() => {
                setIsUpdating(false)
            })
    }

    const handleRestore = (e) => {
        e.preventDefault()
        setIsUpdating(true)

        //handle restore
        updateJobTask(card.task_id, {
            ...card,
            archived: false
        })
            .then(() => {
                showSuccessNotification({
                    message: "Task got restored!"
                })
            })
            .catch((errors) => {
                showFailNotification({
                    errors: errors
                })
            })
            .finally(() => {
                setIsUpdating(false)
            })
    }

    const handleArchive = (e) => {
        e.preventDefault() /*use preventdefault to not activate the link */
        setIsUpdating(true)

        //handle archive
        updateJobTask(card.task_id, {
            ...card,
            archived: true
        })
            .then(() => {
                showSuccessNotification({
                    message: "Task got archived!"
                })
            })
            .catch((errors) => {
                showFailNotification({
                    errors: errors
                })
            })
            .finally(() => {
                setIsUpdating(false)
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

    if (isUpdating) {
        return <LoadingDisplay height={"10.75rem"} />
    }

    return (
        <Link
            to={"/job/" + card.application}
            key={taskCardId}
            id={taskCardId}
            className="tracker-card task-card-layout"
        >
            <CardHeaderLayout>
                <div className="tracker-card-link-header-layout">
                    <div className="task-card-company">
                        {card.company}
                    </div>
                    /
                    <div className="task-card-job">
                        {card.position}
                    </div>
                </div>
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