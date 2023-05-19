import { useEffect, useState } from "react"

//components
import StatusButtons from "../../../../components/Inputs/Status/components/StatusButtons"
import DateAndTime from "../../../../components/Date/DateAndTime"

//utils
import { dateFormat } from "../../../../utils/dateTime/date/date"

export default function StatusAndDates(props) {

    const {
        application,
        updateApplication,
        fontSize,
    } = props

    const [formData, setFormData] = useState({
        "status": application.status
    })

    //updates when status changed
    useEffect(() => {
        if (formData["status"] !== application.status) {
            if (formData["status"] === "applied" && application.status === "interested") {
                const today = dateFormat("today")
                const newAppInfo = {
                    "status": formData["status"],
                    "dateApplied": today.dateFormatted,
                }
                updateApplication(application, newAppInfo)
            } else {
                const newAppInfo = {
                    "status": formData["status"]
                }
                updateApplication(application, newAppInfo)
            }
        }
    }, [formData, application, updateApplication])

    return (
        <div className={`${fontSize}`}>

            {/* the title of this section */}
            <div className="d-flex flex-column gap-0">
                <div className='h4 text-nowrap'>
                    Status and Dates :
                </div>
                <hr className='w-100' />
            </div>

            <div className="d-flex flex-wrap gap-3 gap-md-4 gap-xl-5 align-items-center bg-body-secondary p-4">

                {/* status */}
                <div className="d-flex flex-row gap-3 align-items-center">
                    <div>
                        Status :
                    </div>
                    {/* making sure the width doesnt get stretch with a div */}
                    <div>
                        <StatusButtons
                            formData={formData}
                            setFormData={setFormData}
                            fontSize={"fs-6"}
                            label={""}
                        />
                    </div>
                </div>

                {/* updated date */}
                <div className="d-flex flex-row gap-3">
                    <div className="">
                        Updated :
                    </div>
                    <div className="text-dark-emphasis">
                        <DateAndTime date={application.dateEdited} />
                    </div>
                </div>

                {/* applied date */}
                {application.status !== "interested" ?
                    <div className="d-flex flex-row gap-3" id="dateApplied">
                        <div className="">
                            Applied :
                        </div>
                        {application.dateApplied.length > 0 ?
                            <div className="text-dark-emphasis">
                                <DateAndTime date={application.dateApplied} />
                            </div>
                            :
                            <div className="text-dark-emphasis">
                                Not specified
                            </div>
                        }
                    </div>
                    :
                    <></>
                }

                {/* created date */}
                <div className="d-flex flex-row gap-3">
                    <div className="">
                        Created :
                    </div>
                    <div className="text-dark-emphasis">
                        <DateAndTime date={application.dateCreated} />
                    </div>
                </div>

            </div>

        </div>
    )
}