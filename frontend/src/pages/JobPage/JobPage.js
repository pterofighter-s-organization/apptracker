import { useContext, useEffect } from "react"
import { useParams } from "react-router-dom"

//sections
import { JobPageHeader } from "./sections/JobPageHeader"
import { JobPageDetails } from "./sections/JobPageDetails"
import { JobPageTasks } from "./sections/JobPageTasks"
import { JobPageNotes } from "./sections/JobPageNotes"

//layouts
import { PageLayout } from "../../layouts/PageLayout"

//contexts
import { JobContext } from "../../hooks/contexts/JobContext"

//providers
import { TasksProvider } from "../../hooks/contexts/TasksContext"
import { NotesProvider } from "../../hooks/contexts/NotesContext"

//helpers
import { handleAPIErrors } from "../../helpers/formHelpers"

//css
import "./JobPage.css"
import { ErrorDisplay } from "../../components/ErrorDisplay"

export default function JobPage() {

    const { id } = useParams()
    const { job, getApplication } = useContext(JobContext)
    // console.log("job-page-app-id:", id)

    useEffect(() => {
        getApplication(id)
    }, [getApplication, id])

    if (job.loading) {
        return <>Loading...</>
    }

    if (job.errors) {
        return (
            <ErrorDisplay
                label={"Job page"}
                errors={job.errors}
            />
        )
    }

    return (
        <PageLayout>
            <JobPageHeader />
            <JobPageDetails />
            <TasksProvider>
                <JobPageTasks />
            </TasksProvider>
            <NotesProvider>
                <JobPageNotes />
            </NotesProvider>
        </PageLayout>
    )
}