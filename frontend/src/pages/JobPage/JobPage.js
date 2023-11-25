import { useContext, useEffect } from "react"
import { useParams } from "react-router-dom"

//sections
import { JobPageHeader } from "./sections/JobPageHeader"
import { JobPageDetails } from "./sections/JobPageDetails"
import { JobPageTasks } from "./sections/JobPageTasks"
import { JobPageNotes } from "./sections/JobPageNotes"

//layouts
import { PageLayout } from "../../layouts/PageLayout"

//context-providers
import { JobContext } from "../../hooks/contexts/JobContext"

//css
import "./JobPage.css"

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

    return (
        <PageLayout>
            <JobPageHeader />
            <JobPageDetails />
            <JobPageTasks id={id} />
            <div />
            <JobPageNotes id={id} />
        </PageLayout>
    )
}