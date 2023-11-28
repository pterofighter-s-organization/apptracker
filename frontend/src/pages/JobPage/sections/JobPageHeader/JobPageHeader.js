import { useState, useContext } from "react"
import { Link, useNavigate } from "react-router-dom"

//components
import { StageDropdown } from "../../../../components/Dropdowns/StageDropdown"
import { ActiveOptionButtons } from "../../../../components/Buttons/OptionButtons/ActiveOptionButtons"
import { ArchivedOptionButtons } from "../../../../components/Buttons/OptionButtons/ArchivedOptionButtons"
import { showSubmitNotification } from "../../../../components/NotificationList/components/Notification/Notification"

//context-providers
import { JobContext } from "../../../../hooks/contexts/JobContext"

//helpers
import { updateDateApplied } from "../../../../helpers/applicationHelpers"

//css
import "./JobPageHeader.css"
import "../../JobPage.css"

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

                if(result.success){
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

    return (
        <div className="job-page-content-bg job-page-top">
            <div style={{ flexGrow: 1 }}>
                <StageDropdown
                    id={"stage-dropdown-" + job.data.application_id}
                    stage={stage}
                    handleStage={handleStage}
                />
            </div>
            <div className="job-page-top-buttons">
                {job.data.archived ?
                    <ArchivedOptionButtons
                        handleDelete={handleDelete}
                        handleRestore={handleRestore}
                    />
                    :
                    <>
                        <Link
                            to={"/job-edit/" + job.data.application_id}
                            className="onclick-bw-button"
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            title={`Redirects to /job-edit/${job.data.application_id}`}
                        >
                            <i className="bi bi-pencil-fill"></i>
                        </Link>
                        <ActiveOptionButtons
                            handleArchive={handleArchive}
                        />
                    </>
                }
            </div>
        </div>
    )
}