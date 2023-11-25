
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
            >
                Welcome, <i>User 1</i>
            </HeaderLayout>
            <JobsProvider>
                <DashboardJobs
                    status={status}
                    isPreview={isPreview}
                    isShow={isShow}
                />
            </JobsProvider>
            <DashboardTasks
                status={status}
                isPreview={isPreview}
                isShow={isShow}
            />
            <DashboardNotes
                status={status}
                isPreview={isPreview}
                isShow={isShow}
            />
        </PageLayout>
    )
}

export default withStatusControl(Dashboard)