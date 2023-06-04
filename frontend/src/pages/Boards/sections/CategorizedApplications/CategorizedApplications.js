import { useMemo } from "react"
import { Link } from "react-router-dom"

//components
import { ApplicationCard } from "../../../../components/Cards"

//layouts
import { PreviewCollapseLayout } from "../../../../layouts/PreviewCollapseLayout"

//utils
import * as dateTimeUtils from "../../../../utils/dateTimeUtils"

//helpers
import * as applicationHelpers from "../../../../helpers/applicationHelpers"

//css
import "./CategorizedApplications.css"

export default function CategorizedApplications({ applications, updateApplication, isLoading, isArchived }) {

    const categorizedApps = useMemo(() => {
        if (applications) {
            applications.sort((a, b) => {
                return (-1 * dateTimeUtils.compareDates(a.date_edited, b.date_edited))
            })
            const res = applicationHelpers.categorizeApplications(applications, "status")
            return [...res.interviewing, ...res.applied, ...res.accepted, ...res.interested, ...res.rejected, ...res.ghosted].filter(app => app.archived === isArchived)
        }
        return null
    }, [applications, isArchived])

    if (isLoading) {
        return <>Loading...</>
    }

    if (!categorizedApps) {
        return <>Applications cannot be fetched</>
    }

    return (
        <div className="d-flex flex-column gap-3">
            {categorizedApps.length > 0 ?
                <PreviewCollapseLayout
                    id={"categorized-apps"}
                    text={"Applications"}
                    previewVh={60}
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

                    {!isArchived ?
                        <Link
                            to="/application/new/interested"
                            className="btn btn-primary d-flex align-items-center justify-content-center fs-5 p-4"
                            id="application-add"
                        >
                            <div className="fs-5">
                                Click me to start tracking applications
                            </div>
                        </Link>
                        :
                        <div className="fs-5">
                            No archived applications
                        </div>
                    }
                </>
            }
        </div>
    )
}