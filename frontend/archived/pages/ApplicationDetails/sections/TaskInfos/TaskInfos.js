import { useMemo } from "react"

//utils
import { findTasksOnApp } from "../../../../utils/task"

//components
import TaskForm from "../../../../components/TaskForm/TaskForm"
import TaskTable from "../../../../components/TaskTable/TaskTable"
import PreviewCollapse from "../../../../components/PreviewCollapse/PreviewCollapse"

export default function TaskInfos(props) {

    const {
        application,
        updateApplication,
        fontSize,
    } = props

    const tasks = useMemo(() => {
        if (application) {
            return findTasksOnApp(application)
        }
        return null
    }, [application])

    return (
        <div
            className={`d-flex flex-column ${fontSize}`}
            id="tasks"
        >

            {/* title */}
            <div className="d-flex flex-column gap-0">
                <div className='h4 text-nowrap'>
                    Application Tasks :
                </div>
                <hr className='w-100' />
            </div>

            <div className="d-flex flex-column gap-3">
                {/* task table */}
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
                                fontSize={fontSize}
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

                {/* form */}
                <TaskForm
                    fontSize={fontSize}
                    application={application}
                    updateApplication={updateApplication}
                />
            </div>

        </div>
    )
}