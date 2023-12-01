import { useContext } from "react"
import { Link, useNavigate } from "react-router-dom"

//components
import { StageDropdown } from "../../../../Dropdowns/StageDropdown"
import { showSubmitNotification } from "../../../../NotificationList/components/Notification/Notification"
import { EditOptionButton } from "../../../../Buttons/OptionButtons/EditOptionButton"
import { RestoreOptionButton } from "../../../../Buttons/OptionButtons/RestoreOptionButton"
import { DeleteOptionButton } from "../../../../Buttons/OptionButtons/DeleteOptionButton"
import { ArchiveOptionButton } from "../../../../Buttons/OptionButtons/ArchiveOptionButton"

//utils
import { dateTimeFormatter } from "../../../../../utils/formatUtils"

//helpers
import { updateDateApplied } from "../../../../../helpers/applicationHelpers"

//context-providers
import { JobsContext } from "../../../../../hooks/contexts/JobsContext"

//css
import "./JobCard.css"

export default function JobCard({ card }) {

    const navigate = useNavigate()
    const jobCardId = `job-card-${card.application_id}`
    const { updateApplication, deleteApplication } = useContext(JobsContext)

    //event.preventdefault is to prevent the button from accidentally re-directing to the link.
    const handleStage = (e) => {
        e.preventDefault()
        //deleting stage state so usestates from filtered out cards doesn't get accidentally displayed.
        updateApplication(card.application_id, {
            ...card,
            status: e.target.value,
            date_applied: updateDateApplied(e.target.value, card.date_applied, false)
        }).then((result) => {
            showSubmitNotification({
                status: result.success,
                errors: result.errors,
                message: "Job stage updated!"
            })
        })
    }

    const handleArchive = (e) => {
        e.preventDefault()
        updateApplication(card.application_id, {
            ...card,
            archived: true
        }).then((result) => {
            showSubmitNotification({
                status: result.success,
                errors: result.errors,
                message: "Job got archived!"
            })
        })
    }

    const handleDelete = (e) => {
        e.preventDefault()
        deleteApplication(card.application_id)
            .then((result) => {
                showSubmitNotification({
                    status: result.success,
                    errors: result.errors,
                    message: "Job deleted successfully!"
                })
            })
    }

    const handleRestore = (e) => {
        e.preventDefault()
        updateApplication(card.application_id, {
            ...card,
            archived: false
        }).then((result) => {
            showSubmitNotification({
                status: result.success,
                errors: result.errors,
                message: "Job got restored!"
            })
        })
    }

    const handleEdit = (e) => {
        e.preventDefault()
        navigate(`/job-edit/${card.application_id}`)
    }

    return (
        <Link
            to={`/job/${card.application_id}`}
            id={jobCardId}
            key={jobCardId}
            className="job-card"
        >
            <div className="job-card-top">
                <div style={{ flexGrow: 1 }}>
                    <StageDropdown
                        key={card.application_id}
                        id={jobCardId}
                        stage={card.status}
                        handleStage={handleStage}
                    />
                </div>
                <div className="job-card-top-buttons">
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
                </div>
            </div>
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