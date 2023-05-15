import React, { useEffect, useMemo } from "react"

//utils
import { findAllTasks } from "../../utils/task.js"

//hooks
import useApplicationsManager from "../../hooks/useApplicationsManager.js"

//sections
import ApplicationsSection from "./sections/Applications/ApplicationsSection.js"
import TasksSection from "./sections/Tasks/TasksSection.js"

//later will take the user id *
export default function Dashboard() {

    //showing the task that the user needs to finish and the applications they currently have

    const { applications, updateApplication } = useApplicationsManager()

    useEffect(() => {
        document.title = 'Dashboard - Job Tracker App';
        return () => document.title = 'Job Tracker App';
    }, [])

    // start of (1): use useMemo for returning the previous val if the dependency (reference) never changed
    //avoid re-rendering

    const tasks = useMemo(() => {
        return findAllTasks(applications)
    }, [applications])

    //end of (1)

    //debugging
    // console.log(applications)

    //loading
    // if(applications.length <= 0) {
    //     return <>Loading...</>
    // }

    //finish
    return (
        <div
            className="d-flex flex-column gap-5 mt-4 mt-xl-0 w-100"
            style={{ padding: "1.25vw 2.5vw" }}
            id="dashboard"
        >
            {/* <h1 className="">
                Dashboard
            </h1>
            <div className="w-100 bg-secondary">
                &emsp;
            </div> */}

            {/* job application cards in list */}
            <ApplicationsSection
                applications={applications}
                updateApplication={updateApplication}
            />

            {/* task table */}
            <TasksSection
                tasks={tasks}
            />

        </div>
    )
}