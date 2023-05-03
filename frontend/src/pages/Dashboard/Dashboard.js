import React, { useMemo, useState } from "react"

//utils
import { debounce } from "../../utils/time.js"
import { categorizeApplications } from "../../utils/application.js"
import { findAllTasks } from "../../utils/task.js"

//components
import CategorizedApplicationList from "../../components/List/CategorizedApplicationList.js"
import TaskTable from "../../components/TaskTable/TaskTable.js"
import PreviewcollapseElements from "../../components/Collapse/PreviewCollapseElements.js"

//hooks
import useAppManager from "../../hooks/useAppManager.js"

//helpers
import { checkShowCollapseApps, checkShowCollapseTasks } from "./DashboardHelpers.js"

//later will take the user id *
export default function Dashboard() {

    //showing the task that the user needs to finish and the applications they currently have

    const { applications, updateApplication } = useAppManager()
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)

    // start of (1): use useMemo for returning the previous val if the dependency (reference) never changed
    //avoid re-rendering

    //categorize applications before displaying
    const categorizedApps = useMemo(() => (
        categorizeApplications(applications, "status")
    ), [applications])

    const tasks = useMemo(() => (
        findAllTasks(categorizedApps.interviewing)
    ), [categorizedApps.interviewing])

    const showCollapseApps = useMemo(() => (
        checkShowCollapseApps(applications, windowWidth)
    ), [windowWidth, applications])

    const showCollapseTasks = useMemo(() => (
        checkShowCollapseTasks(tasks)
    ), [tasks])

    //end of (1)

    //useCallback is for functions that are in child components and
    //prevent it from rendering the child components when it is not needed
    function updateAppStatus(app, newStatus) {
        updateApplication(app, newStatus)
    }

    //debugging
    // console.log(categorizedApps)

    //delay 250 secs after the user starts resizing to start using the function
    window.onresize = debounce(() => {
        setWindowWidth(window.innerWidth)
    }, 250)

    //loading
    // if(applications.length <= 0) {
    //     return <>Loading...</>
    // }

    //finish
    return (
        <div className="d-flex flex-column gap-5 mt-3 mt-lg-0" style={{ padding: "1vw 2.5vw" }}>
            {/* <h1 className="">
                Dashboard
            </h1>
            <div className="w-100 bg-secondary">
                &emsp;
            </div> */}
            <div className="d-flex flex-column gap-2">
                <div className="d-flex flex-column gap-1">
                    <h1 className="">
                        Your Job Applications
                    </h1>
                    {/* <h1 className="text-nowrap">
                        ( {categorizedApps.interviewing.length} )
                    </h1> */}
                    <hr className="" style={{}} />
                </div>
                {/* the collapse (only the buttons and the bg uses same elements)*/}
                {/* giving more flexibility to the container that uses the collapse */}
                <div style={{ position: "relative" }}>
                    <div
                        className="d-flex flex-wrap justify-content-evenly justify-content-xl-start gap-3 gap-xl-4"
                        id="collapse-apps"
                        style={{ maxHeight: "40vh", overflow: "hidden" }}
                    >
                        <CategorizedApplicationList
                            applications={categorizedApps}
                            updateAppStatus={updateAppStatus}
                        />
                    </div>
                    {showCollapseApps ?
                        <PreviewcollapseElements
                            text={"Applications"}
                            containerId={"collapse-apps"}
                            backgroundId={"collapse-apps-bg"}
                            buttonId={"collapse-apps-button"}
                            maxHeight={"40vh"}
                            overflow={"hidden"}
                        />
                        :
                        <></>
                    }
                </div>
            </div>

            <div className="d-flex flex-column gap-2">
                <div className="d-flex flex-column gap-1">
                    <h1 className="">
                        Upcoming Task
                    </h1>
                    <hr className="" style={{}} />
                </div>
                {/* the collapse (only the buttons and the bg uses same elements) */}
                <div style={{ position: "relative" }}>
                    <div
                        className="table-responsive"
                        id="collapse-tasks"
                        style={{ maxHeight: "40vh", overflow: "hidden" }}
                    >
                        <TaskTable
                            tasks={tasks}
                        />
                    </div>
                    {showCollapseTasks ?
                        <PreviewcollapseElements
                            text={"Tasks"}
                            containerId={"collapse-tasks"}
                            backgroundId={"collapse-tasks-bg"}
                            buttonId={"collapse-tasks-button"}
                            maxHeight={"40vh"}
                            overflow={"hidden"}
                        />
                        :
                        <></>
                    }
                </div>
            </div>
        </div>
    )
}