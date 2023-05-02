import React, { useEffect, useState } from "react"

//utils
import { dateFormat } from "../utils/date.js"
import { debounce } from "../utils/time.js"
import { categorizeApplications, updateInterviewApp } from "../utils/application.js"
import { updateApp, getApps } from "../data/mimicBackendStatic.js"

//components
import ApplicationList from "../components/List/ApplicationList.js"
import TaskTable from "../components/TaskTable/TaskTable.js"

//helpers
import { checkShowCollapseApps, checkShowCollapseTasks, showRemainingContent } from "./DashboardHelpers.js"

import "./Dashboard.css"

//later will take the user id *
export default function Dashboard() {

    //showing the task that the user needs to finish and the applications they currently have

    const [apps, setApps] = useState([]);
    const [change, setChange] = useState(0);
    const [categorizedApps, setCategorizedApps] = useState(categorizeApplications([], "status"))
    //categorize applications before displaying

    useEffect(() => {

        //change later when backend is done
        let applications = []
        try {
            //set loading state here
            applications = getApps()
        } catch (err) {
            //remove loading state here
            console.log(err)
        }
        //or remove loading here

        setApps(applications)
        setCategorizedApps(categorizeApplications(applications, "status"))
    }, [])

    //** adding, changing the application */
    //figure out usecallback
    const updateAppStatus = ((app, newStatus) => {

        const { id } = app
        const today = dateFormat("today")

        //set the app status to the new one (these should not be done here instead in backend as a json)
        app.status = newStatus
        app.dateEdited = today.dateFormatted
        //making sure the application fits what an interview app needs
        updateInterviewApp(app)

        //add a history list of when the status was changed *
        //for ex: an array of the (time edited, status updated to)

        //up here is the backend update (code later)
        //mimic backend code (replace later)
        //this is a backend response
        let res = []
        try {
            res = updateApp(app, id)
        } catch (err) {
            console.log(err)
        }

        //this is frontend update (modify according to response, should be getting only one app back which is the app changed)
        //right now it shouldn't trigger a re-render because apps is not subscribed yet *
        //can do it by adding it to the render part (return) *
        setApps(res)
        setCategorizedApps(categorizeApplications(apps, "status"))
        //we will temp use this for now
        setChange((change ? 0 : 1))
    })

    let showCollapseApps = checkShowCollapseApps(apps)
    let showCollapseTasks = checkShowCollapseTasks(categorizedApps.interviewing)
    console.log(categorizedApps)

    //delay 250 secs after the user finish resizing to start using the function
    window.onresize = debounce(() => {
        setChange((change ? 0 : 1))
    }, 250)

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
                                style={{ position: "absolute", bottom: 0, height: "10vh" }}
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
                            applications={categorizedApps.interviewing}
                        />
                    </div>
                    {showCollapseTasks ?
                        <>
                            <div
                                className="blur-bg w-100"
                                style={{ position: "absolute", bottom: 0, height: "10vh" }}
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