import { useContext, useState } from "react"
import { Link, useNavigate } from "react-router-dom"

//components
import { StageDropdown } from "../../../../Dropdowns/StageDropdown"
import { showSuccessNotification, showFailNotification } from "../../../../NotificationList/components/Notification/Notification"
import { EditOptionButton } from "../../../../Buttons/OptionButtons/EditOptionButton"
import { RestoreOptionButton } from "../../../../Buttons/OptionButtons/RestoreOptionButton"
import { DeleteOptionButton } from "../../../../Buttons/OptionButtons/DeleteOptionButton"
import { ArchiveOptionButton } from "../../../../Buttons/OptionButtons/ArchiveOptionButton"
import { LoadingDisplay } from "../../../../Displays/LoadingDisplay"

//private-layouts
import { CardHeaderLayout } from "../layouts/CardHeaderLayout"
import { CardButtonsLayout } from "../layouts/CardButtonsLayout"

//utils
import { dateTimeFormatter } from "../../../../../utils/format"

//helpers
import { updateDateApplied } from "../../../../../helpers/application"

//context-providers
import { JobsContext } from "../../../../../hooks/contexts/JobsContext"

//css
import "./JobCard.css"
import "../styles/Cards.css"

export default function JobCard({ card }) {

    const navigate = useNavigate()
    const { updateApplication, deleteApplication } = useContext(JobsContext)
    //give a loading screen for any action that can cause a chain reaction from updating.
    const [isUpdating, setIsUpdating] = useState(false)

    //event.preventdefault is to prevent the button from accidentally re-directing to the link.
    const handleStage = (e) => {
        e.preventDefault()

        //deleting stage state so usestates from filtered out cards doesn't get accidentally displayed.
        updateApplication(card.application_id, {
            ...card,
            status: e.target.value,
            date_applied: updateDateApplied(e.target.value, card.date_applied, false)
        })
            .then(() => {
                showSuccessNotification({
                    message: "Job stage updated!"
                })
            })
            .catch((errors) => {
                showFailNotification({
                    errors: errors
                })
            })
    }

    const handleArchive = (e) => {
        e.preventDefault()
        setIsUpdating(true)

        updateApplication(
            card.application_id,
            {
                ...card,
                archived: true
            },
            true)
            .then(() => {
                showSuccessNotification({
                    message: "Job got archived!"
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

    const handleDelete = (e) => {
        e.preventDefault()
        setIsUpdating(true)

        deleteApplication(card.application_id)
            .then(() => {
                showSuccessNotification({
                    message: "Job deleted successfully!"
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

        updateApplication(
            card.application_id,
            {
                ...card,
                archived: false
            },
            true)
            .then(() => {
                showSuccessNotification({
                    message: "Job got restored!"
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

    const handleEdit = (e) => {
        e.preventDefault()

        navigate(`/job-edit/${card.application_id}`)
    }

    if (isUpdating) {
        return (
            <LoadingDisplay
                height={"15rem"}
            />
        )
    }

    return (
        <Link
            to={`/job/${card.application_id}`}
            id={`job-card-${card.application_id}`}
            key={`job-card-${card.application_id}`}
            className="tracker-card job-card-layout"
        >
            <CardHeaderLayout>
                <StageDropdown
                    key={card.application_id}
                    id={`job-card-${card.application_id}`}
                    stage={card.status}
                    handleStage={handleStage}
                />
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
                            <>
                                <EditOptionButton
                                    handleEdit={handleEdit}
                                />
                                <ArchiveOptionButton
                                    handleArchive={handleArchive}
                                />
                            </>
                    }
                </CardButtonsLayout>
            </CardHeaderLayout>
            <div className="job-card-details">
                <h6 className="job-card-details-text" style={{ color: "gray" }}>
                    {card.company}
                </h6>
                <h3
                    className="job-card-details-text job-card-title"
                    style={{ marginLeft: "-0.05em" }}
                >
                    {card.position}
                </h3>
                <h5 style={{ textTransform: "initial", color: "#009E60" }}>
                    ${card.salary} /{card.salary_rate}
                </h5>
            </div>
            <div className="job-card-date">
                Updated: {dateTimeFormatter(card.date_edited)}
            </div>
        </Link>
    )
}