
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

//css
import "./Dashboard.css"

function Dashboard({ status, handleStatus }) {

    const isPreview = true
    const isRedirect = true
    const jobCards = Array.from({ length: 25 }, (_, index) => index + 1)
    const taskCards = Array.from({ length: 30 }, (_, index) => index + 1)
    const noteCards = Array.from({ length: 30 }, (_, index) => index + 1)

    return (
        <PageLayout>
            <HeaderLayout
                title={"my dashboard"}
                status={status}
                handleStatus={handleStatus}
            >
                Welcome, <i>User 1</i>
            </HeaderLayout>
            <CardList
                type={"jobs"}
                CardComponent={JobCard}
                cards={jobCards}
                status={status}
                isPreview={isPreview}
                isRedirect={isRedirect}
            />
            <CardList
                type={"tasks"}
                CardComponent={TaskCard}
                cards={taskCards}
                status={status}
                isPreview={isPreview}
                isRedirect={isRedirect}
            />
            <CardList
                type={"notes"}
                CardComponent={NoteCard}
                cards={noteCards}
                status={status}
                isPreview={isPreview}
                isRedirect={isRedirect}
            />
        </PageLayout>
    )
}

export default withStatusControl(Dashboard)