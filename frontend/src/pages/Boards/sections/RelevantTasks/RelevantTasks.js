import { useMemo } from "react"

//components
import { TaskTable } from "../../../../components/TaskTable"

//layouts
import { PreviewCollapseLayout } from "../../../../layouts/PreviewCollapseLayout"

//hooks
import useTasksManager from "../../../../hooks/useTasksManager"

//helpers
import * as taskHelpers from "../../../../helpers/taskHelpers"

export default function RelevantTasks({ applications, isArchived }) {

    const { tasks, updateTask, isLoading } = useTasksManager()

    const combinedTasks = useMemo(() => {
        const extraTasks = (!isArchived) ? taskHelpers.findAllExtraTasks(applications) : []
        const { archivedTasks, relevantTasks } = taskHelpers.categorizeTasks(tasks)
        return [...extraTasks, ...((!isArchived) ? relevantTasks : archivedTasks)]
    }, [applications, tasks, isArchived])

    if (isLoading) {
        return <>Loading...</>
    }

    return (
        <div className="d-flex flex-column gap-3">
            <PreviewCollapseLayout
                id={"relevant-tasks"}
                text={"Tasks"}
                previewVh={40}
                dependency={combinedTasks}
            >
                {/* id dashboard-tasktable only for name purposes */}
                <div className="table-responsive fs-6" id="dashboard-tasktable">
                    <TaskTable
                        tasks={combinedTasks}
                        updateTask={updateTask}
                        isArchived={isArchived}
                    />
                </div>
            </PreviewCollapseLayout>
        </div>
    )
}