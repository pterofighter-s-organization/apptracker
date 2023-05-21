import React, { useEffect } from "react"

//hooks
import useApplicationsManager from "../../hooks/useApplicationsManager.js"

//sections
import CategorizedApplications from "./sections/Applications/CategorizedApplications.js"
import CombinedAppTasks from "./sections/Tasks/CombinedAppTasks.js"

//later will take the user id *
export default function Dashboard() {

    //showing the task that the user needs to finish and the applications they currently have

    const { applications, updateApplication } = useApplicationsManager()

    useEffect(() => {
        document.title = 'Dashboard - Job Tracker App';
        return () => document.title = 'Job Tracker App';
    }, [])

    //debugging
    // console.log(applications)

    //loading
    if(!applications) {
        return <>Loading...</>
    }

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
            <CategorizedApplications
                applications={applications}
                updateApplication={updateApplication}
            />

            {/* task table */}
            <CombinedAppTasks
                applications={applications}
                updateApplication={updateApplication}
            />

        </div>
    )
}