import { useContext, useEffect, useState, useRef } from "react"
import { Link } from "react-router-dom"

//components
import { showFailNotification, showSuccessNotification } from "../../../NotificationList/Notification/Notification"
import { RestoreOptionButton } from "../../../Buttons/OptionButtons/RestoreOptionButton"
import { DeleteOptionButton } from "../../../Buttons/OptionButtons/DeleteOptionButton"
import { ArchiveOptionButton } from "../../../Buttons/OptionButtons/ArchiveOptionButton"
import { LoadingDisplay } from "../../../Displays/LoadingDisplay"
import { EditableTextInput } from "../../../Inputs/EditableTextInput"

//private-layouts
import { CardHeaderLayout } from "../layouts/CardHeaderLayout"
import { CardButtonsLayout } from "../layouts/CardButtonsLayout"

//utils
import { dateTimeFormatter, timerFormatter } from "../../../../utils/format"
import { strFormatter } from "../../../../utils/format"

//contexts
import { TasksContext } from "../../../../hooks/contexts/TasksContext"

//css
import "./TaskCard.css"
import "../styles/Cards.css"

export default function TaskCard({ card }) {

    const taskCardId = "task-card-" + card.task_id
    const { updateJobTask, deleteJobTask } = useContext(TasksContext)
    const [isUpdating, setIsUpdating] = useState(false)
    const [isEditing, setIsEditing] = useState(false)
    const [value, setValue] = useState(``)
    const [prevValue, setPrevValue] = useState(``) //this is to ensure the user gets the latest last val back when they got an error

    const titleSaveTimerRef = useRef(null)

    useEffect(() => {
        setValue(card.title)
        setPrevValue(card.title)
    }, [card.title, setValue, setPrevValue])

    const handleChange = (e) => {
        e.preventDefault()
        setValue(e.target.value)

        if (titleSaveTimerRef.current) {
            clearTimeout(titleSaveTimerRef.current)
        }

        titleSaveTimerRef.current = setTimeout(() => {
            setIsEditing(true)

            updateJobTask(card.task_id, {
                ...card,
                title: strFormatter(e.target.value)
            })
                .then(() => {
                    showSuccessNotification({
                        message: "Task successfully edited!"
                    })
                    setPrevValue(e.target.value)
                })
                .catch((errors) => {
                    showFailNotification({
                        errors: errors,
                        message: "Task title didn't save! Can't be empty!"
                    })
                    setValue(prevValue)
                })
                .finally(() => {
                    setIsEditing(false)
                })

            clearTimeout(titleSaveTimerRef.current)
        }, 1000)
    }

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
                    errors: errors,
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
        return <LoadingDisplay height={"10rem"} />
    }

    return (
        <div
            key={taskCardId}
            id={taskCardId}
            className="tracker-card task-card-layout"
        >
            <CardHeaderLayout>
                <Link
                    to={`/auth/job/${card.application}`}
                    className="tracker-card-link-header-layout"
                >
                    <div className="tracker-card-company">
                        {card.company}
                    </div>
                    /
                    <div className="tracker-card-job">
                        {card.position}
                    </div>
                </Link>
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
            <EditableTextInput
                isArchived={card.archived}
                isEditing={isEditing}
                value={value}
                handleChange={handleChange}
                height={"100%"}
            />
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
        </div>
    )
}