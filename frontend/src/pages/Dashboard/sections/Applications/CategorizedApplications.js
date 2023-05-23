import { useMemo } from "react"

//utils
import { categorizeApplications } from "../../../../utils/application.js"
import { sortDates } from "../../../../utils/dateTime/date/date.js"

//components
import PreviewCollapse from "../../../../components/PreviewCollapse/PreviewCollapse.js"
import ApplicationCard from "../../../../components/ApplicationCard/ApplicationCard.js"

export default function CategorizedApplications({ applications, updateApplication }) {

    const appsVh = 40

    applications.sort((a, b) => {
        return (-1 * sortDates(a.dateEdited, b.dateEdited))
    })

    const categorizedApps = useMemo(() => {
        const res = categorizeApplications(applications, "status")
        return [...res.interviewing, ...res.applied, ...res.accepted,...res.interested,...res.rejected, ...res.ghosted]
    }, [applications])

    //sorts the apps to the most updated one for each status
    // Object.entries(categorizedApps).forEach((apps) => {
    //     apps[1].sort((a, b) => {
    //         //-1 because this method returns the earliest to latest and we need to flip it
    //         return (-1 * sortDates(a.dateEdited, b.dateEdited))
    //     })
    // })


    return (
        <div className="d-flex flex-column gap-2">
            <div className="d-flex flex-column gap-1">
                <div className="h3">
                    Your Job Applications
                </div>
                {/* <h1 className="text-nowrap">
                        ( {categorizedApps.interviewing.length} )
                    </h1> */}
                <hr className="" style={{}} />
            </div>
            {/* the collapse (only the buttons and the bg uses same elements)*/}
            {/* giving more flexibility to the container that uses the collapse */}
            <div style={{ position: "relative" }}>
                <div
                    id="collapse-apps"
                    style={{ maxHeight: appsVh.toString() + "vh", overflow: "hidden" }}
                >
                    <div
                        className="d-flex flex-wrap justify-content-evenly justify-content-xl-start gap-3 gap-xl-4"
                        id="dashboard-apps"
                    >
                        {categorizedApps.map((app) => {
                            return (
                                <ApplicationCard
                                    application={app}
                                    updateApplication={updateApplication}
                                />
                            )
                        })}
                    </div>

                </div>
                {/* it's also flexible to decide when to show these elements, custom function, not req for the elements to work*/}
                <PreviewCollapse
                    text={"Applications"}
                    maxVhOfCollapse={appsVh}
                    collapseId={"collapse-apps"}
                    overflow={"hidden"}
                    dependency={applications}
                />
            </div>
        </div>
    )
}