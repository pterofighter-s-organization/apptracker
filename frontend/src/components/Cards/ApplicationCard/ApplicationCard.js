import { useState, useEffect } from "react"

//components
import { StatusButton } from "../../Buttons"
import { DateAndTime } from "../../DateTime"

//utils
import * as applicationUtils from "../utils/applicationUtils"
import * as formatters from "../../utils/formatters"

//css
import "./ApplicationCard.css"

export default function ApplicationCard({ application, updateApplication }) {

    const [formData, setFormData] = useState({
        "status": application.status
    })

    //updates when status changed
    useEffect(() => {
        //status = new status, app.status is the old status
        const status = formData["status"]

        if (status !== application.status) {
            if (status === "applied" && application.status === "interested") {
                const updateInfo = applicationUtils.updateInfoForAppliedApp()
                updateApplication(applicationUtils.updateApplicationInfo(updateInfo, application))
            } else {
                const updateInfo = {
                    "status": status
                }
                updateApplication(applicationUtils.updateApplicationInfo(updateInfo, application))
            }
        }
    }, [formData, application, updateApplication])

    return (
        <div className="card border border-0 rounded-0 bg-body-secondary bg-opacity-75 fs-6" id="application-card">

            <div className="card-header d-flex flex-wrap gap-3 border border-0 p-4">
                <StatusButton
                    formData={formData}
                    setFormData={setFormData}
                    label={""}
                />
            </div>

            <div className="card-body d-flex flex-column gap-2 p-4">
                {/* avoid the title overflowing with text-truncate */}
                <div className="card-title text-truncate h5">
                    {formatters.textFormatter(application.position)}
                </div>
                <div className="card-subtitle lead">
                    - {formatters.textFormatter(application.company)}
                </div>
            </div>

            <div className="border border-0 card-footer text-body-secondary p-4">
                Updated: <DateAndTime dateTime={application.dateEdited} />
            </div>

        </div>
    )
}