import { useState } from "react"

//components
import { CardList } from "../../components/CardList"
import { SectionHeader } from "../../components/SectionHeader"

//layout
import { HeaderLayout } from "../../layouts/HeaderLayout"
import { PageLayout } from "../../layouts/PageLayout"

//hocs
import withStatusControl from "../../hocs/withStatusControl"

//helpers
import { filterCardsByStatus } from "../../helpers/applicationHelpers"

//css
import "./Dashboard.css"

function Dashboard({ status, handleStatus }) {

    const isPreview = true
    const isShow = false
    const jobCards = Array.from({ length: 25 }).fill({
        value: "",
        isArchived: false,
    })
    const taskCards = Array.from({ length: 20 }).fill({
        value: "",
        isArchived: false,
    })
    const noteCards = Array.from({ length: 35 }).fill({
        value: "",
        isArchived: false,
    })

    const [notes, setNotes] = useState(noteCards)
    const [jobs, setJobs] = useState(jobCards)
    const [tasks, setTasks] = useState(taskCards)

    return (
        <PageLayout>
            <HeaderLayout
                title={"my dashboard"}
                status={status}
                handleStatus={handleStatus}
            >
                Welcome, <i>User 1</i>
            </HeaderLayout>
            <SectionHeader
                IconComponent={<i className="bi bi-file-post-fill" />}
                title={`${jobs.length} jobs ${status === "archived" ? "to dispose" : "tracked"}`}
                link={"/all-jobs/" + status}
            />
            <CardList
                type={"jobs"}
                cards={filterCardsByStatus(jobs, status)}
                status={status}
                isPreview={isPreview}
                isShow={isShow}
            />
            <SectionHeader
                IconComponent={<i className="bi bi-view-list" />}
                title={`${tasks.length} tasks ${status === "archived" ? "to delete" : "coming up"}`}
                link={"/all-tasks/" + status}
            />
            <CardList
                type={"tasks"}
                cards={filterCardsByStatus(tasks, status)}
                status={status}
                isPreview={isPreview}
                isShow={isShow}
            />
            <SectionHeader
                IconComponent={<i className="bi bi-stickies-fill" />}
                title={`${notes.length} notes ${status === "archived" ? "to restore" : "taken"}`}
                link={"/all-notes/" + status}
            />
            <CardList
                type={"notes"}
                cards={filterCardsByStatus(notes, status)}
                status={status}
                isPreview={isPreview}
                isShow={isShow}
            />
        </PageLayout>
    )
}

export default withStatusControl(Dashboard)