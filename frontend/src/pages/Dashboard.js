import React, { useMemo, useState } from "react"

//utils
import { debounce } from "../utils/time.js"
import { categorizeApplications } from "../utils/application.js"
import { findAllTasks } from "../utils/task.js"

//components
import ApplicationList from "../components/List/ApplicationList.js"
import TaskTable from "../components/TaskTable/TaskTable.js"

//hooks
import useAppManager from "../hooks/useAppManager.js"

//helpers
import { checkShowCollapseApps, checkShowCollapseTasks, showRemainingContent } from "./DashboardHelpers.js"

//css
import "./Dashboard.css"

//later will take the user id *
export default function Dashboard () {

    //showing the task that the user needs to finish and the applications they currently have
    const { applications , updateApplication } = useAppManager()
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)
    //categorize applications before displaying

    //use useMemo for returning the previous val if the dependency (reference) never changed
    //avoid re-rendering
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

    //usecallback is for functions that are in child components and
    //prevent it from rendering the child components when it is not needed
    function updateAppStatus (app, newStatus) {
        updateApplication(app, newStatus)
    }

    //debugging
    // console.log(categorizedApps)

    //delay 250 secs after the user finish resizing to start using the function
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
                <div style={{ position: "relative" }}>
                    <div
                        className="d-flex flex-wrap justify-content-evenly justify-content-xl-start gap-3 gap-xl-4"
                        id="collapse-apps"
                        style={{ maxHeight: "40vh", overflow: "hidden" }}
                    >
                        <ApplicationList
                            applications={categorizedApps}
                            updateAppStatus={updateAppStatus}
                        />
                    </div>
                    {showCollapseApps ?
                        <>
                            <div
                                className="blur-bg w-100"
                                style={{ position: "absolute", bottom: 0, height: "15vh" }}
                                id="collapse-apps-bg"
                            />

                            <div className="d-flex justify-content-center">
                                <button
                                    className="btn btn-primary p-3 px-5 mt-5" type="button" onClick={(e) => {
                                        // e.preventDefault()
                                        showRemainingContent("collapse-apps-button", "collapse-apps", "collapse-apps-bg")
                                    }}
                                    aria-expanded="false"
                                    data-text="Applications"
                                    id="collapse-apps-button"
                                >
                                    Show All Applications
                                </button>
                            </div>
                        </>
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
                        <>
                            <div
                                className="blur-bg w-100"
                                style={{ position: "absolute", bottom: 0, height: "15vh" }}
                                id="collapse-tasks-bg"
                            />
                            <div className="d-flex justify-content-center">
                                <button
                                    className="btn btn-primary p-3 px-5 mt-5" type="button" onClick={(e) => {
                                        // e.preventDefault()
                                        showRemainingContent("collapse-tasks-button", "collapse-tasks", "collapse-tasks-bg")
                                    }}
                                    aria-expanded="false"
                                    data-text="Tasks"
                                    id="collapse-tasks-button"
                                >
                                    Show All Tasks
                                </button>
                            </div>
                        </>
                        :
                        <></>
                    }
                </div>
            </div>
        </div>
    )
}