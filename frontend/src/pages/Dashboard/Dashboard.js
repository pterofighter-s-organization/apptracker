
//components
import { ApplicationCard } from "../../components/Cards/ApplicationCard"
import { TaskCard } from "../../components/Cards/TaskCard"
import { NoteCard } from "../../components/Cards/NoteCard"

//layout
import { HeaderLayout } from "../../layouts/HeaderLayout"
import { PageLayout } from "../../layouts/PageLayout"

//hocs
import withStatusControl from "../../hoc/withStatusControl"

//css
import "./Dashboard.css"

function Dashboard({ status, handleStatus }) {

    const isPreview = true
    const cards = Array.from({ length: 0 }, (_, index) => index + 1)

    return (
        <PageLayout>
            <HeaderLayout
                title={"my dashboard"}
                status={status}
                handleStatus={handleStatus}
            >
                Welcome, <i>User 1</i>
            </HeaderLayout>
            <ApplicationList
                id={"app-list"}
                cards={cards}
                isPreview={isPreview}
                status={status}
            />
            <TaskList
                id={"task-list"}
                cards={cards}
                isPreview={isPreview}
                status={status}
            />
            <NoteList
                id={"note-list"}
                cards={cards}
                isPreview={isPreview}
                status={status}
            />
        </PageLayout>
    )
}

export default withStatusControl(Dashboard)