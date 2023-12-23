import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

//components
import { ErrorDisplay } from "../../components/Displays/ErrorDisplay";
import { LoadingDisplay } from "../../components/Displays/LoadingDisplay";

//layouts
import { PageLayout } from "../../layouts/PageLayout";
import { CardsLayout } from "../../layouts/CardsLayout";

//utils
import { strFormatter } from "../../utils/format";

//contexts
import { JobContext } from "../../hooks/contexts/JobContext";

//providers
import { NotesProvider } from "../../hooks/contexts/NotesContext";
import { TasksProvider } from "../../hooks/contexts/TasksContext";

//sections
import { JobPageHeader } from "./sections/JobPageHeader";
import { JobPageDetails } from "./sections/JobPageDetails";
import { JobPageDescription } from "./sections/JobPageDescription";
import { JobPageTasks } from "./sections/JobPageTasks";
import { JobPageNotes } from "./sections/JobPageNotes";

export default function JobPage() {

    const { id } = useParams()
    const isPreview = true
    const isShow = true

    const { job, getApplication } = useContext(JobContext)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        setIsLoading(true)
        getApplication(id)
            .then((result) => {
                document.title = `${strFormatter(result.position)}, ${strFormatter(result.company)} - Job Tracker App`
            }).finally(() => {
                setIsLoading(false)
            })

        return () => document.title = "Job Tracker App"
    }, [getApplication, id])

    //preventing accidental errors that rarely happens
    if (isLoading || (!job.data && !job.errors)) {
        return (
            <LoadingDisplay />
        )
    }

    if (job.errors) {
        return (
            <ErrorDisplay
                label={"Job page"}
                errors={job.errors}
            />
        )
    }

    return (
        <PageLayout>
            <JobPageHeader setIsLoading={setIsLoading}/>
            <JobPageDetails />
            <JobPageDescription />
            <CardsLayout>
                <TasksProvider>
                    <JobPageTasks
                        isPreview={isPreview}
                        isShow={isShow}
                    />
                </TasksProvider>
                <NotesProvider>
                    <JobPageNotes
                        isPreview={isPreview}
                        isShow={isShow}
                    />
                </NotesProvider>
            </CardsLayout>
        </PageLayout>
    )
}