//components
import TaskTable from "../../../../components/TaskTable/TaskTable.js"
import PreviewCollapse from "../../../../components/PreviewCollapse/PreviewCollapse.js"

export default function TasksSection({ tasks }) {

    const taskVh = 40
    
    return (
        <div className="d-flex flex-column gap-2">
            <div className="d-flex flex-column gap-1">
                <div className="h3">
                    Upcoming Tasks
                </div>
                <hr className="" style={{}} />
            </div>
            {/* the collapse (only the buttons and the bg uses same elements) */}
            <div style={{ position: "relative" }}>
                <div
                    id="collapse-tasks"
                    style={{ maxHeight: taskVh.toString() + "vh", overflow: "hidden" }}
                >
                    <div
                        className="table-responsive"
                        id="dashboard-tasks"
                    >
                        <TaskTable
                            tasks={tasks}
                        />
                    </div>
                </div>
                <PreviewCollapse
                    text={"Tasks"}
                    maxVhOfCollapse={taskVh}
                    collapseId={"collapse-tasks"}
                    overflow={"hidden"}
                    dependency={tasks}
                />
            </div>
        </div>
    )
}