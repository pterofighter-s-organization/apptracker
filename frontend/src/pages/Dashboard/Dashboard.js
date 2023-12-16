import { useContext } from "react";

//layouts
import { PageLayout } from "../../layouts/PageLayout";
import { HeaderLayout } from "../../layouts/HeaderLayout";
import { CardsLayout } from "../../layouts/CardsLayout";

//providers
import { JobsProvider } from "../../hooks/contexts/JobsContext";
import { TasksProvider } from "../../hooks/contexts/TasksContext";
import { NotesProvider } from "../../hooks/contexts/NotesContext";

//contexts
import { AuthContext } from "../../hooks/contexts/AuthContext";

//utils
import { strFormatter } from "../../utils/format";

//sections
import { DashboardJobs } from "./sections/DashboardJobs";
import { DashboardTasks } from "./sections/DashboardTasks";
import { DashboardNotes } from "./sections/DashboardNotes";

export default function Dashboard() {

    const isPreview = true
    const isShow = false

    const { auth } = useContext(AuthContext)

    return (
        <PageLayout>
            <HeaderLayout>
                <h1>
                    Dashboard
                </h1>
                <h6>
                    Welcome, <i>{auth.data.username ? strFormatter(auth.data.username) : "User"}</i>
                </h6>
            </HeaderLayout>
            <CardsLayout>
                <JobsProvider>
                    <DashboardJobs
                        isPreview={isPreview}
                        isShow={isShow}
                    />
                </JobsProvider>
                <TasksProvider>
                    <DashboardTasks
                        isPreview={isPreview}
                        isShow={isShow}
                    />
                </TasksProvider>
                <NotesProvider>
                    <DashboardNotes
                        isPreview={isPreview}
                        isShow={isShow}
                    />
                </NotesProvider>
            </CardsLayout>
        </PageLayout>
    )
} 