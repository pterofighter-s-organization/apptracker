
//components
import { JobCard } from "../../components/Cards/JobCard"
import { TaskCard } from "../../components/Cards/TaskCard"
import { NoteCard } from "../../components/Cards/NoteCard"
import { CardList } from "../../components/CardList"

//layout
import { HeaderLayout } from "../../layouts/HeaderLayout"
import { PageLayout } from "../../layouts/PageLayout"

//hocs
import withStatusControl from "../../hocs/withStatusControl"

//helpers
import { filterCardsByStatus } from "../../helpers/applicationHelpers"

//css
import "./Dashboard.css"
import { useState } from "react"
import { SectionHeader } from "../../components/SectionHeader"

function Dashboard({ status, handleStatus }) {

    const isPreview = true
    const isRedirect = true
    const jobCards = Array.from({ length: 25 }).fill({
        value: "",
        isArchived: false,
    })
    const taskCards = Array.from({ length: 20 }).fill({
        value: "",
        isArchived: true,
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
                icon={<i className="bi bi-file-post-fill" />}
                title={`${jobs.length} jobs ${status === "archived" ? "to dispose" : "tracked"}`}
                link={"/all-jobs/" + status}
            />
            <CardList
                type={"jobs"}
                CardComponent={JobCard}
                cards={filterCardsByStatus(jobs, status)}
                status={status}
                isPreview={isPreview}
                isRedirect={isRedirect}
            />
            <SectionHeader
                icon={<i className="bi bi-view-list" />}
                title={`${tasks.length} tasks ${status === "archived" ? "to delete" : "coming up"}`}
                link={"/all-tasks/" + status}
            />
            <CardList
                type={"tasks"}
                CardComponent={TaskCard}
                cards={filterCardsByStatus(tasks, status)}
                status={status}
                isPreview={isPreview}
                isRedirect={isRedirect}
            />
            <SectionHeader
                icon={<i className="bi bi-stickies-fill" />}
                title={`${notes.length} notes ${status === "archived" ? "to restore" : "taken"}`}
                link={"/all-notes/" + status}
            />
            <CardList
                type={"notes"}
                CardComponent={NoteCard}
                cards={filterCardsByStatus(notes, status)}
                status={status}
                isPreview={isPreview}
                isRedirect={isRedirect}
            />
        </PageLayout>
    )
}

export default withStatusControl(Dashboard)