import { useMemo } from "react"

//components
import { TaskTable } from "../../../../components/TaskTable"

//layouts
import { PreviewCollapseLayout } from "../../../../layouts/PreviewCollapseLayout"

//hooks
import useTasksManager from "../../../../hooks/useTasksManager"

//utils
import * as taskUtils from "../../../../utils/taskUtils"

export default function RelevantTasks({ applications }) {

    const { tasks, isLoading } = useTasksManager()

    const combinedTasks = useMemo(() => {
        const extraTasks = taskUtils.findAllExtraTasks(applications)
        return [...extraTasks, ...tasks]
    }, [applications, tasks])

    if (isLoading) {
        return <>Loading...</>
    }

    return (
        <PreviewCollapseLayout
            id={"relevant-tasks"}
            text={"Tasks"}
            previewVh={40}
            dependency={combinedTasks}
        >
            <div className="table-responsive" id="dashboard-tasktable">
                <TaskTable tasks={combinedTasks} />
            </div>
        </PreviewCollapseLayout>
    )
}