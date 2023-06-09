//components
import { StatusButton } from '../../../../components/StatusButton'
import { DateTime } from '../../../../components/DateTime'

//layouts
import { DataLayout } from "../../layouts"

//helpers
import * as applicationHelpers from "../../../../helpers/applicationHelpers"
import * as validationHelpers from "../../../../helpers/validationHelpers"


export default function StatusDates({ application, updateApplication }) {

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

    return (
        <div className="d-flex flex-wrap gap-3 gap-sm-4 gap-xl-5 align-items-center bg-body-secondary p-4">

            <DataLayout title={"Status"}>
                <StatusButton
                    value={application.status}
                    updateValue={updateStatus}
                />
            </DataLayout>

            <DataLayout title={"Updated"}>
                <DateTime
                    dateTime={application.date_edited}
                />
            </DataLayout>

            {application.status !== "interested" ?
                <DataLayout title={"Applied"}>
                    {!application.date_applied || application.date_applied.length <= 0?
                        <div className="text-dark-emphasis">
                            Not specified
                        </div>
                        :
                        <>
                            {validationHelpers.isValidIsoDateTime(application.date_applied) ?
                                <DateTime
                                    dateTime={application.date_applied}
                                />
                                :
                                <div className="text-dark-emphasis">
                                    Unfinished date, please edit.
                                </div>
                            }
                        </>
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