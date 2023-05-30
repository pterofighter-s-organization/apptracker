import { useEffect, useState } from 'react'

//components
import { StatusButton } from '../../../../components/Buttons/StatusButton'
import { DateTime } from '../../../../components/DateTime'

//layouts
import { DataLayout } from "../../layouts"

//utils
import * as appUtils from "../../../../utils/applicationUtils"


export default function StatusDates({ application, updateApplication }) {

    const [formData, setFormData] = useState({
        "status": application.status
    })

    //updates when status changed
    useEffect(() => {
        //status = new status, app.status is the old status
        const status = formData["status"]

        if (status !== application.status) {
            if (status === "applied" && application.status === "interested") {
                const updateInfo = appUtils.updateInfoForAppliedApp(application.date_applied)
                updateApplication(appUtils.updateApplicationInfo(updateInfo, application))
            } else {
                const updateInfo = {
                    "status": status
                }
                updateApplication(appUtils.updateApplicationInfo(updateInfo, application))
            }
        }
    }, [formData, application, updateApplication])

    return (
        <div className="d-flex flex-wrap gap-3 gap-md-4 gap-xl-5 align-items-center bg-body-secondary p-4">

            <DataLayout title={"Status"}>
                <StatusButton
                    formData={formData}
                    setFormData={setFormData}
                    label={""}
                />
            </DataLayout>

            <DataLayout title={"Updated"}>
                <DateTime
                    dateTime={application.date_edited}
                />
            </DataLayout>

            {application.status !== "interested" ?
                <DataLayout title={"Applied"}>
                    {application.date_applied.length > 0 ?
                        <DateTime
                            dateTime={application.date_applied}
                        />
                        :
                        <div className="text-dark-emphasis">
                            Not specified
                        </div>
                    }
                </DataLayout>
                :
                <></>
            }

            <DataLayout title={"Created"}>
                <DateTime
                    dateTime={application.date_created}
                />
            </DataLayout>

        </div>
    )
}