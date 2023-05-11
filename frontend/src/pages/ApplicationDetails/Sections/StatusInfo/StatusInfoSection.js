import { useEffect, useState } from "react"

//utils
import { dateFormat } from "../../../../utils/date"

//parts
import StatusChange from "./Parts/StatusChange"
import UpdatedDate from "./Parts/UpdatedDate"
import CreatedDate from "./Parts/CreatedDate"
import AppliedDate from "./Parts/AppliedDate"

export default function StatusInfoSection({ application, updateApplication }) {

    const [showAppliedDate, setShowAppliedDate] = useState(false)
    const [status, setStatus] = useState(application.status)

    //updates when status changed
    useEffect(() => {
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

    //when status changes, we change whether the date should be shown
    useEffect(() => {
        setShowAppliedDate(application.status !== "interested")
    }, [application])

    return (
        <div className="d-flex flex-column gap-lg-3">

            {/* the title of this section */}
            <div className="d-flex flex-column gap-0">
                <div className='h2 text-nowrap'>
                    Status Info :
                </div>
                <hr className='w-100' />
            </div>

            {/* the parts in this section */}
            <div className="d-flex flex-wrap gap-3 gap-md-4 gap-xl-5 align-items-center bg-body-secondary p-4 fs-4">
                <StatusChange
                    status={status}
                    setStatus={setStatus}
                />
                <UpdatedDate
                    dateEdited={application.dateEdited}
                />
                <CreatedDate
                    dateCreated={application.dateCreated}
                />
                {showAppliedDate ?
                    <AppliedDate
                        dateApplied={application.dateApplied}
                    />
                    :
                    <></>
                }
            </div>
        </div>
    )
}