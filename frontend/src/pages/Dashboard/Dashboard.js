//layouts
import { PageLayout } from "../../layouts/PageLayout";
import { HeaderLayout } from "../../layouts/HeaderLayout";
import { CardsPageLayout } from "../../layouts/CardsLayout/CardsPageLayout";

//providers
import { JobsProvider } from "../../hooks/contexts/JobsContext";
import { TasksProvider } from "../../hooks/contexts/TasksContext";
import { NotesProvider } from "../../hooks/contexts/NotesContext";

//sections
import { DashboardJobs } from "./sections/DashboardJobs";
import { DashboardTasks } from "./sections/DashboardTasks";
import { DashboardNotes } from "./sections/DashboardNotes";

export default function Dashboard() {

    const isPreview = true
    const isShow = false

    return (
        <PageLayout>
            <HeaderLayout>
                <h1>
                    Dashboard
                </h1>
                <h6>
                    Welcome, <i>User 1</i>
                </h6>
            </HeaderLayout>
                <CardsPageLayout>
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
                </CardsPageLayout>
        </PageLayout>
    )
} 