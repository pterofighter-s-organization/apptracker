import { useEffect } from "react"

//shared-sections
import { CategorizedApplications, RelevantTasks, NoteList } from "../sections"

//layouts
import { SectionLayout } from "../../../layouts/SectionLayout"

//hooks
import useApplicationsManager from "../../../hooks/useApplicationsManager"


export default function ArchivedBoard() {

    const { applications, updateApplication, isLoading: appsLoading } = useApplicationsManager()

    useEffect(() => {
        document.title = 'Archived Board - Job Tracker App';
        return () => document.title = 'Job Tracker App';
    }, [])

    return (
        <div className="d-flex flex-column gap-5">
            <SectionLayout title={"Archived Applications"}>
                <CategorizedApplications
                    applications={applications}
                    updateApplication={updateApplication}
                    isLoading={appsLoading}
                    isArchived={true}
                />
            </SectionLayout>

            <SectionLayout title={"Archived Tasks"}>
                <RelevantTasks
                    applications={applications}
                    isArchived={true}
                />
            </SectionLayout>

            <SectionLayout title={"Archived notes"}>
                <NoteList
                    isArchived={true}
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