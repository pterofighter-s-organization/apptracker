
//components
import { JobCard } from "../../components/Cards/JobCard"
import { TaskCard } from "../../components/Cards/TaskCard"
import { NoteCard } from "../../components/Cards/NoteCard"
import { CardList } from "../../components/CardList"

//layout
import { HeaderLayout } from "../../layouts/HeaderLayout"
import { PageLayout } from "../../layouts/PageLayout"

//hocs
import withStatusControl from "../../hoc/withStatusControl"

//css
import "./Dashboard.css"

function Dashboard({ status, handleStatus }) {

    const isPreview = true
    const isRedirect = true
    const cards = Array.from({ length: 30 }, (_, index) => index + 1)

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
                cards={cards}
                status={status}
                isPreview={isPreview}
                isRedirect={isRedirect}
            />
            <CardList
                type={"tasks"}
                CardComponent={TaskCard}
                cards={cards}
                status={status}
                isPreview={isPreview}
                isRedirect={isRedirect}
            />
            <CardList
                type={"notes"}
                CardComponent={NoteCard}
                cards={cards}
                status={status}
                isPreview={isPreview}
                isRedirect={isRedirect}
            />
        </PageLayout>
    )
}

export default withStatusControl(Dashboard)