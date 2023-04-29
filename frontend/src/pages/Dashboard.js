import React, { useEffect, useState } from "react"
import ApplicationCardList from "../components/List/ApplicationCardList.js"
import TaskTable from "../components/TaskTable/TaskTable.js"
import { dateToString } from "../utils/date.js"
import { categorizeApplications, updateInterviewApp } from "../utils/application.js"
import { updateApp, getApps } from "../data/mimicBackendStatic.js"
import ApplicationList from "../components/List/ApplicationList.js"

import "./Test.css"

//later will take the user id *
export default function Dashboard() {

    //showing the task that the user needs to finish and the applications they currently have

    const statuses = ["interviewing", "applied", "interested", "ghosted", "rejected", "accepted"]
    const [apps, setApps] = useState([]);
    const [change, setChange] = useState(0);

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
    }, [])

    //categorize applications before displaying
    const categorizedApps = categorizeApplications(apps, "status")

    //** adding, changing the application */
    //figure out usecallback
    const updateAppStatus = ((app, newStatus) => {

        const { id } = app
        const today = dateToString(new Date(Date.now()))

        //set the app status to the new one (these should not be done here instead in backend as a json)
        app.status = newStatus
        app.dateEdited = today
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
        //we will temp use this for now
        setChange((change ? 0 : 1))
    })

    console.log(categorizedApps)

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
                <div className="d-flex flex-wrap justify-content-evenly justify-content-xl-start gap-3 gap-xl-4">
                    <ApplicationList
                        applications={categorizedApps}
                        updateAppStatus={updateAppStatus}
                    />
                </div>
            </div>

            <div className="d-flex flex-column gap-2">
                <div className="d-flex flex-column gap-1">
                    <h1 className="">
                        Upcoming Task
                    </h1>
                    {/* <h1 className="text-nowrap">
                        ( {categorizedApps.interviewing.length} )
                    </h1> */}
                    <hr className="" style={{}} />
                </div>
                <div className="table-responsive">
                    <TaskTable
                        applications={categorizedApps.interviewing}
                    />
                </div>
            </div>
            <div class="container">
                <div class="row">
                    <div class="col">
                        <div class="collapse show" id="toggleContent">
                            <p>This content is only visible in the first 200 pixels.</p>
                            <p>Click the button below to reveal the rest of the content.</p>
                            <p>More content goes here...</p>
                        </div>
                        <button class="btn btn-primary mt-2" type="button" data-toggle="collapse" data-target="#toggleContent" aria-expanded="false" aria-controls="toggleContent">
                            Show more
                        </button>
                    </div>
                </div>
            </div>

            {/* have to use map because forEach wont render */}
            {/* make a list with grid and gap here to store cards */}
            {/* <div class="">
                <div class="">
                    <ApplicationCardList
                        applications={categorizedApps.interviewing}
                        updateAppStatus={updateAppStatus}
                        nameOfList={"interviewing"}
                    />
                </div>
                <div class="">
                    <ApplicationCardList
                        applications={categorizedApps.applied}
                        updateAppStatus={updateAppStatus}
                        nameOfList={"applied"}
                    />
                </div>
            </div> */}

            {/* <div className="">
                <div className="d-flex">
                    Applied
                </div>
                <div className="d-flex flex-wrap gap-3">
                    {categorizedApps.applied.map((application) => (
                        <ApplicationCard
                            key={application.id}
                            application={application}
                            updateAppStatus={updateAppStatus}
                        />
                    ))}
                </div>
            </div> */}
            {/* <div className="row row-cols-xxl-4 row-cols-md-2 row-cols-sm-1 d-flex justify-content-between gap-5">
                    {appliedApps.map((app) => (
                        <ApplicationCardContainer
                            key={app.id}
                            appObject={{ app, updateAppStatus }}
                        />
                    ))}
                </div> */}

            {/* <ApplicationCardContainer appObject={{ card, updateAppStatus }} /> */}
            {/* <TaskTableContainer/> */}
            {/* <button onClick={(e) => {
                e.preventDefault()
                updateAppStatus(card, "interviewing", "ghosted")
            }
            }>Test</button> */}
            {/* this could be 1 - n containers (depending on categories) */}

        </div>
    )
}