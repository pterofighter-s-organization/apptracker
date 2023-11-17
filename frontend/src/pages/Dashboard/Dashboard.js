
//components
import { CardList } from "../../components/CardList"
import { SectionHeader } from "../../components/SectionHeader"
import { RedirectButton } from "../../components/Buttons/RedirectButton"

//layout
import { HeaderLayout } from "../../layouts/HeaderLayout"
import { PageLayout } from "../../layouts/PageLayout"

//hocs
import withStatusControl from "../../hocs/withStatusControl"

//css
import "./Dashboard.css"

function Dashboard({ status, handleStatus }) {

    const isPreview = true
    const isShow = false
    const jobCards = Array.from({ length: 25 }).fill({
        value: "",
        status: status,
    })
    const taskCards = Array.from({ length: 0 }).fill({
        value: "",
        status: status,
    })
    const noteCards = Array.from({ length: 35 }).fill({
        value: "",
        status: status,
    })

    return (
        <PageLayout>
            <HeaderLayout
                title={"my dashboard"}
                status={status}
                handleStatus={handleStatus}
            >
                Welcome, <i>User 1</i>
            </HeaderLayout>
            <>
                <SectionHeader
                    IconComponent={<i className="bi bi-file-post-fill" />}
                    title={`${jobCards.length} jobs ${status === "archived" ? "to dispose" : "tracked"}`}
                    ButtonComponent={
                        <RedirectButton
                            link={"/all-jobs/" + status}
                            label={`all jobs`}
                        />
                    }
                />
                <CardList
                    type={"jobs"}
                    cards={jobCards}
                    isPreview={isPreview}
                    isShow={isShow}
                />
            </>
            <>
                <SectionHeader
                    IconComponent={<i className="bi bi-view-list" />}
                    title={`${taskCards.length} tasks ${status === "archived" ? "to delete" : "coming up"}`}
                    ButtonComponent={
                        <RedirectButton
                            link={"/all-tasks/" + status}
                            label={`all tasks`}
                        />
                    }
                />
                <CardList
                    type={"tasks"}
                    cards={taskCards}
                    isPreview={isPreview}
                    isShow={isShow}
                />
            </>
            <>
                <SectionHeader
                    IconComponent={<i className="bi bi-stickies-fill" />}
                    title={`${noteCards.length} notes ${status === "archived" ? "to restore" : "taken"}`}
                    ButtonComponent={
                        <RedirectButton
                            link={"/all-notes/" + status}
                            label={`all notes`}
                        />
                    }
                />
                <CardList
                    type={"notes"}
                    cards={noteCards}
                    isPreview={isPreview}
                    isShow={isShow}
                />
            </>
        </PageLayout>
    )
}

export default withStatusControl(Dashboard)