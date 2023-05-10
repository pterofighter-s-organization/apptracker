import React, { useMemo } from "react"

//utils
import { categorizeApplications } from "../../utils/application.js"
import { findAllTasks } from "../../utils/task.js"

//components
import CategorizedApplicationList from "../../components/List/CategorizedApplicationList.js"
import TaskTable from "../../components/TaskTable/TaskTable.js"
import PreviewCollapse from "../../components/Collapse/PreviewCollapse.js"

//hooks
import useApplicationsManager from "../../hooks/useApplicationsManager.js"

//later will take the user id *
export default function Dashboard() {

    //showing the task that the user needs to finish and the applications they currently have

    const { applications, updateApplication } = useApplicationsManager()

    const taskVh = 40
    const appsVh = 40

    // start of (1): use useMemo for returning the previous val if the dependency (reference) never changed
    //avoid re-rendering

    //categorize applications before displaying
    const categorizedApps = useMemo(() => (
        categorizeApplications(applications, "status")
    ), [applications])

    const tasks = useMemo(() => (
        findAllTasks(categorizedApps.interviewing)
    ), [categorizedApps.interviewing])

    //end of (1)

    //debugging
    // console.log(categorizedApps)

    //loading
    // if(applications.length <= 0) {
    //     return <>Loading...</>
    // }

    //finish
    return (
        <div
            className="d-flex flex-column gap-5 mt-4 mt-xl-0" 
            style={{ padding: "1.25vw 2.5vw" }}
            id="dashboard"
        >
            {/* <h1 className="">
                Dashboard
            </h1>
            <div className="w-100 bg-secondary">
                &emsp;
            </div> */}
            <div className="d-flex flex-column gap-2">
                <div className="d-flex flex-column gap-1">
                    <div className="h2">
                        Your Job Applications
                    </div>
                    {/* <h1 className="text-nowrap">
                        ( {categorizedApps.interviewing.length} )
                    </h1> */}
                    <hr className="" style={{}} />
                </div>
                {/* the collapse (only the buttons and the bg uses same elements)*/}
                {/* giving more flexibility to the container that uses the collapse */}
                <div style={{ position: "relative" }}>
                    <div
                        id="collapse-apps"
                        style={{ maxHeight: appsVh.toString() + "vh", overflow: "hidden" }}
                    >
                        <div
                            className="d-flex flex-wrap justify-content-evenly justify-content-xl-start gap-3 gap-xl-4"
                            id="dashboard-apps"
                        >
                            <CategorizedApplicationList
                                applications={categorizedApps}
                                updateApplication={updateApplication}
                            />
                        </div>

                    </div>
                    {/* it's also flexible to decide when to show these elements, custom function, not req for the elements to work*/}
                    <PreviewCollapse
                        text={"Applications"}
                        maxVhOfCollapse={appsVh}
                        collapseId={"collapse-apps"}
                        overflow={"hidden"}
                        dependency={applications}
                    />
                </div>
            </div>

            <div className="d-flex flex-column gap-2">
                <div className="d-flex flex-column gap-1">
                    <div className="h2">
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
        </div>
    )
}