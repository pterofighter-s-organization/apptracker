import { useMemo } from "react"

//components
import { TaskTable } from "../../../../components/TaskTable"
import { TaskForm } from "../../../../components/TaskForm"

//layouts
import { PreviewCollapseLayout } from "../../../../layouts/PreviewCollapseLayout"

//hooks
import useAppTasksManager from "../../../../hooks/useAppTasksManager"

//helpers
import * as taskHelpers from "../../../../helpers/taskHelpers"

export default function ApplicationTasks({ application, isArchived }) {

    const { tasks, createNewTask, errorMsgs, isLoading } = useAppTasksManager(application.application_id)

    const combinedTasks = useMemo(() => {
        const extraTasks = (!isArchived) ? taskHelpers.findExtraTasks(application) : []
        return [...extraTasks, ...tasks]
    }, [application, tasks, isArchived])

    if (isLoading) {
        return <>Loading...</>
    }

    return (
        <div className="d-flex flex-column gap-5 gap-sm-3">

            <PreviewCollapseLayout
                id={"application-tasks"}
                text={"Tasks"}
                previewVh={40}
                dependency={combinedTasks}
            >
                <div className="table-responsive fs-6" id="app-tasktable">
                    <TaskTable
                        tasks={combinedTasks}
                        isArchived={isArchived}
                    />
                </div>
            </PreviewCollapseLayout>

            <TaskForm
                createNewTask={createNewTask}
                application={application}
                errorMsgs={errorMsgs}
            />

        </div>
    )
}