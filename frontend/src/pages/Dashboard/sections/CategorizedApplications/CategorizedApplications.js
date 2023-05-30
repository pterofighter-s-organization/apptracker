import { useMemo } from "react"

//components
import { ApplicationCard } from "../../../../components/Cards"

//layouts
import { PreviewCollapseLayout } from "../../../../layouts/PreviewCollapseLayout"

//utils
import * as appUtils from "../../../../utils/applicationUtils"
import * as dateTimeUtils from "../../../../utils/dateTimeUtils"

export default function CategorizedApplications({ applications, updateApplication, isLoading }) {

    const categorizedApps = useMemo(() => {
        applications.sort((a, b) => {
            return (-1 * dateTimeUtils.sortDates(a.date_edited, b.date_edited))
        })
        const res = appUtils.categorizeApplications(applications, "status")
        return [...res.interviewing, ...res.applied, ...res.accepted, ...res.interested, ...res.rejected, ...res.ghosted]
    }, [applications])

    if (isLoading) {
        return <>Loading...</>
    }

    return (
        <>
            {categorizedApps.length > 0 ?
                <PreviewCollapseLayout
                    id={"categorized-apps"}
                    text={"Applications"}
                    previewVh={40}
                    dependency={categorizedApps}
                >
                    <div className="d-flex flex-wrap justify-content-evenly justify-content-xl-start gap-3 gap-xl-4" id="dashboard-apps">
                        {categorizedApps.map((app) => (
                            <ApplicationCard
                                application={app}
                                updateApplication={updateApplication}
                            />
                        ))}
                    </div>
                </PreviewCollapseLayout>
                :
                <>
                    No applications found!
                </>
            }
        </>
    )
}