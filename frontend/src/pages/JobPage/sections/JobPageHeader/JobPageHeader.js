import { useState, useContext } from "react"
import { useNavigate } from "react-router-dom"

//components
import { StageDropdown } from "../../../../components/Dropdowns/StageDropdown"
import { showSubmitNotification } from "../../../../components/NotificationList/components/Notification/Notification"
import { EditOptionButton } from "../../../../components/Buttons/OptionButtons/EditOptionButton"
import { RestoreOptionButton } from "../../../../components/Buttons/OptionButtons/RestoreOptionButton"
import { DeleteOptionButton } from "../../../../components/Buttons/OptionButtons/DeleteOptionButton"
import { ArchiveOptionButton } from "../../../../components/Buttons/OptionButtons/ArchiveOptionButton"

//helpers
import { updateDateApplied } from "../../../../helpers/application"

//contexts
import { JobContext } from "../../../../hooks/contexts/JobContext"

//css
import "./JobPageHeader.css"
import "../styles/JobPageSection.css"

export default function JobPageHeader() {

    const navigate = useNavigate()
    const { job, updateApplication, deleteApplication } = useContext(JobContext)
    const [stage, setStage] = useState(job.data.status)

    const handleStage = (e) => {
        e.preventDefault()
        setStage(e.target.value)
        updateApplication(job.data.application_id, {
            ...job.data,
            status: e.target.value,
            date_applied: updateDateApplied(e.target.value, job.data.date_applied, false)
        }).then((result) => {
            showSubmitNotification({
                status: result.success,
                errors: result.errors,
                message: "job stage updated!"
            })
        })
    }

    const handleRestore = (e) => {
        e.preventDefault()
        updateApplication(job.data.application_id, {
            ...job.data,
            archived: false
        }).then((result) => {
            showSubmitNotification({
                status: result.success,
                errors: result.errors,
                message: "job got restored!"
            })
        })
    }

    const handleDelete = (e) => {
        e.preventDefault()
        deleteApplication(job.data.application_id)
            .then((result) => {
                showSubmitNotification({
                    status: result.success,
                    errors: result.errors,
                    message: "job deleted successfully!"
                })

                if (result.success) {
                    //later change this to backend triggered.
                    navigate("/")
                }
            })
    }

    const handleArchive = (e) => {
        e.preventDefault()
        updateApplication(job.data.application_id, {
            ...job.data,
            archived: true
        }).then((result) => {
            showSubmitNotification({
                status: result.success,
                errors: result.errors,
                message: "job got archived!"
            })
        })
    }

    const handleEdit = (e) => {
        e.preventDefault()
        navigate(`/job-edit/${job.data.application_id}`)
    }

    return (
        <div className="job-page-section job-page-header">
            <StageDropdown
                id={"stage-dropdown-" + job.data.application_id}
                stage={stage}
                handleStage={handleStage}
            />
            {
                job.data.archived ?
                    <div className="job-page-option-buttons-layout">
                        <RestoreOptionButton
                            handleRestore={handleRestore}
                        />
                        <DeleteOptionButton
                            handleDelete={handleDelete}
                        />
                    </div>
                    :
                    <div className="job-page-option-buttons-layout">
                        <EditOptionButton
                            handleEdit={handleEdit}
                        />
                        <ArchiveOptionButton
                            handleArchive={handleArchive}
                        />
                    </div>
            }
        </div>
    )
}