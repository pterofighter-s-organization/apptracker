//components
import PreviewCollapse from "../../../components/Collapse/PreviewCollapse.js"
import TaskTable from "../../../components/TaskTable/TaskTable.js"

export default function ApplicationTask({ tasks, status }) {

    //add tasks for accepted apps (later)*
    const showTasks = status === "interviewing" || status === "accepted"

    return (
        <>
            {showTasks ?
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
                :
                <></>
            }
        </>
    )
}