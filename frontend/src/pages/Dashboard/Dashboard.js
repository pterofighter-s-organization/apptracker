import { useEffect } from "react"

//sections
import { CategorizedApplications, RelevantTasks } from "./sections"

//layouts
import { SectionLayout } from "../../layouts/SectionLayout"

//hooks
import useApplicationsManager from "../../hooks/useApplicationsManager"

export default function Dashboard() {

    const { applications, updateApplication, isLoading: appsLoading } = useApplicationsManager()

    useEffect(() => {
        document.title = 'Dashboard - Job Tracker App';
        return () => document.title = 'Job Tracker App';
    }, [])

    return (
        <div className="d-flex flex-column gap-5">
            <SectionLayout title={"Your Job Applications"}>
                <CategorizedApplications
                    applications={applications}
                    updateApplication={updateApplication}
                    isLoading={appsLoading}
                />
            </SectionLayout>

            <SectionLayout title={"Your Relevant Tasks"}>
                <RelevantTasks
                    applications={applications}         
                />
            </SectionLayout>
            {/* <button
                type="button"
                onClick={(e) => {
                    e.preventDefault()
                    setChange(change ? 0 : 1)
                }}>
                change
            </button> */}
        </div>
    )
}