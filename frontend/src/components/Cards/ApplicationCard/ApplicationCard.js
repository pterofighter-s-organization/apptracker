import { Link } from "react-router-dom"

//components
import StatusButton from "../../StatusButton/StatusButton"
import { DateTime } from "../../DateTime"

//helpers
import * as applicationHelpers from "../../../helpers/applicationHelpers"

//css
import "./ApplicationCard.css"

export default function ApplicationCard({ application, updateApplication }) {

    // the problem here is it changed the state of the previous app cards also the old status gets render first then the new one. fixed with not using useeffect to change status
    // console.log("test-looping-problem", status, application.status, application.application_id)
    function updateStatus(newStatus) {
        // console.log("test", newStatus)
        if (newStatus === "applied" && application.status === "interested") {
            const updateInfo = applicationHelpers.updateInfoForAppliedApp(application.date_applied)
            updateApplication(applicationHelpers.updateApplicationInfo(updateInfo, application))
        } else {
            const updateInfo = {
                "status": newStatus
            }
            updateApplication(applicationHelpers.updateApplicationInfo(updateInfo, application))
        }
    }

    function updateArchiveStatus() {
        const updateInfo = {
            "archived": !application.archived
        }
        updateApplication(applicationHelpers.updateApplicationInfo(updateInfo, application))
    }

    return (
        <div className="card border border-0 rounded-0 bg-body-secondary bg-opacity-75 fs-6" id="application-card">

            <div className="card-header d-flex flex-wrap gap-3 border border-0 p-4">
                <div className="flex-grow-1">
                    <StatusButton
                        value={application.status}
                        updateValue={updateStatus}
                    />
                </div>
                <button
                    type="button"
                    className="btn p-0 fs-4"
                    onClick={(e) => {
                        e.preventDefault()
                        updateArchiveStatus()
                    }}
                    data-bs-toggle="tooltip" 
                    data-bs-placement="right" 
                    title={(!application.archived) ? "Archived this application to archived board" : "Restore this application to dashboard"}
                >
                    {!application.archived ?
                        <i class="bi bi-x-lg"></i>
                        :
                        <i class="bi bi-arrow-clockwise"></i>
                    }
                </button>
            </div>

            <div className="card-body d-flex flex-column gap-2 p-4">
                {/* avoid the title overflowing with text-truncate */}
                <div 
                    className="card-title text-truncate text-capitalize h5"
                    data-bs-toggle="tooltip" 
                    data-bs-placement="right" 
                    title={application.position}
                >
                    {application.position}
                </div>
                <div 
                    className="card-subtitle text-capitalize lead"
                    data-bs-toggle="tooltip" 
                    data-bs-placement="right" 
                    title={application.company}
                >
                    - {application.company}
                </div>
            </div>

            <Link
                to={"/application/" + application.application_id}
                className="card-text btn btn-primary m-4 mt-0 p-2"
            >
                More Details
            </Link>

            <div className="border border-0 card-footer text-body-secondary p-4">
                Updated: <DateTime dateTime={application.date_edited} />
            </div>

        </div>
    )
}