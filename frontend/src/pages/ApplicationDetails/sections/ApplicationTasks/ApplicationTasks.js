import { useMemo } from "react"

//components
import { TaskTable } from "../../../../components/TaskTable"

//layouts
import { PreviewCollapseLayout } from "../../../../layouts/PreviewCollapseLayout"

//hooks
import useAppTasksManager from "../../../../hooks/useAppTasksManager"

//utils
import * as taskUtils from "../../../../utils/taskUtils"
import { TaskForm } from "../../../../components/TaskForm"

export default function ApplicationTasks({ application }) {

    const { tasks, createAppTask, isLoading } = useAppTasksManager(application.application_id)

    const combinedTasks = useMemo(() => {
        const extraTasks = taskUtils.findExtraTasks(application)
        return [...extraTasks, ...tasks]
    }, [application, tasks])

    if (isLoading) {
        return <>Loading...</>
    }

    return (
        <div className="d-flex flex-column gap-3">

            <PreviewCollapseLayout
                id={"application-tasks"}
                text={"Tasks"}
                previewVh={40}
                dependency={combinedTasks}
            >
                <div className="table-responsive fs-6" id="app-tasktable">
                    <TaskTable tasks={combinedTasks} />
                </div>
            </PreviewCollapseLayout>

            <TaskForm
                createTask={createAppTask}
                application={application}
            />

        </div>
    )
}