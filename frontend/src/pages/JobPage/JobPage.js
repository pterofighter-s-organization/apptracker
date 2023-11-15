
//sections
import { JobPageHeader } from "./sections/JobPageHeader"
import { JobPageDetails } from "./sections/JobPageDetails"
import { JobPageTasks } from "./sections/JobPageTasks"
import { JobPageNotes } from "./sections/JobPageNotes"

//layouts
import { PageLayout } from "../../layouts/PageLayout"

//css
import "./JobPage.css"

export default function JobPage() {

    //here fetch application and where provider sits using hoc.

    return (
        <PageLayout>
            <JobPageHeader id={1} />
            <JobPageDetails />
            <JobPageTasks />
            <div />
            <JobPageNotes />
        </PageLayout>
    )
}