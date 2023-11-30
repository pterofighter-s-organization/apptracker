
//layout
import { HeaderLayout } from "../../layouts/HeaderLayout"
import { PageLayout } from "../../layouts/PageLayout"

//hocs
import { withStatusControl } from "../../hocs/withStatusControl"

//private-sections
import { DashboardJobs } from "./sections/DashboardJobs"
import { DashboardTasks } from "./sections/DashboardTasks"
import { DashboardNotes } from "./sections/DashboardNotes"

//context-providers
import { JobsProvider } from "../../hooks/contexts/JobsContext"
import { TasksProvider } from "../../hooks/contexts/TasksContext"
import { NotesProvider } from "../../hooks/contexts/NotesContext"

//css
import "./Dashboard.css"

function Dashboard({ status, handleStatus }) {

    const isPreview = true
    const isShow = false

    return (
        <PageLayout>
            <HeaderLayout
                title={"my dashboard"}
                status={status}
                handleStatus={handleStatus}
                text={
                    <>
                        Welcome, <i>User 1</i>
                    </>
                }
            />
            <JobsProvider>
                <DashboardJobs
                    status={status}
                    isPreview={isPreview}
                    isShow={isShow}
                />
            </JobsProvider>
            <TasksProvider>
                <DashboardTasks
                    status={status}
                    isPreview={isPreview}
                    isShow={isShow}
                />
            </TasksProvider>
            <NotesProvider>
                <DashboardNotes
                    status={status}
                    isPreview={isPreview}
                    isShow={isShow}
                />
            </NotesProvider>
        </PageLayout>
    )
}

export default withStatusControl(Dashboard)