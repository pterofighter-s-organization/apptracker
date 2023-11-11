

//css
import { PageLayout } from "../../layouts/PageLayout"
import "./JobPage.css"
import { JobPageTop } from "./JobPageTop"

export default function JobPage({ isArchived, id }) {

    return (
        <PageLayout>
            <JobPageTop id={1}/>
            
        </PageLayout>
    )
}