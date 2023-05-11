//components
import TaskTable from "../../../../../components/TaskTable/TaskTable.js"
import PreviewCollapse from "../../../../../components/PreviewCollapse/PreviewCollapse.js"

export default function TaskTableInfo({ tasks }) {

    return (
        <div style={{ position: "relative" }}>
            <div
                id="collapse-app-tasks"
                style={{ maxHeight: "35vh", overflow: "hidden" }}
            >
                <div
                    className="text-dark-emphasis"
                    id="application-description"
                >
                    <TaskTable
                        tasks={tasks}
                    />
                </div>
            </div>
            <PreviewCollapse
                text={"Tasks"}
                maxVhOfCollapse={35}
                collapseId={"collapse-app-tasks"}
                overflow={"hidden"}
                dependency={tasks}
            />
        </div>
    )
}