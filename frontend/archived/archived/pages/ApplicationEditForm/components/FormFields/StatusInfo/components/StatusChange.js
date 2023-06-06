import { useEffect, useState } from "react"

import StatusButton from "../../../../../../components/StatusButton/StatusButton"
import { dateFormat } from "../../../../../../utils/date"

export default function StatusChange({ application, updateApplication, fontSize }) {

    const [status, setStatus] = useState(application.status)

    //updates when status changed
    useEffect(() => {
        //status = new status, app.status is the old status
        if (status !== application.status) {
            if (status === "applied" && application.status === "interested") {
                const today = dateFormat("today")
                const newAppInfo = {
                    "status": status,
                    "dateApplied": today.dateFormatted,
                }

                updateApplication(application, newAppInfo)

            } else {
                const newAppInfo = {
                    "status": status
                }
                updateApplication(application, newAppInfo)
            }
        }
    }, [status, application, updateApplication])

    return (
        <div className="d-flex flex-wrap gap-4 gap-xl-5 bg-body-secondary align-self-stretch p-4">
            <div className="d-flex flex-column gap-4" style={{ maxWidth: "100vw" }}>
                <div className={`${fontSize}`}>
                    - Application status *
                </div>
                <div className="">
                    <StatusButton
                        status={status}
                        setStatus={setStatus}
                    />
                </div>
                <div className={`blockquote-footer mt-2 ${fontSize}`}>
                    - Ex: interviewing, applied, accepted etc.
                </div>
            </div>
        </div>
    )
}