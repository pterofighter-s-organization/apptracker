import React, { useEffect, useState } from "react"
import ApplicationCardContainer from "../ApplicationCard/ApplicationCardContainer.js"
import TaskTableContainer from "../TaskTable/TaskTableContainer.js"
import { dateToString } from "../utils/date.js"
import { categorizeApplications, updateInterviewApp } from "../utils/application.js"
import { updateApp, getApps } from "../data/mimicBackend.js"

export default function Dashboard () {

    //showing the task that the user needs to finish and the applications they currently have

    const [apps, setApps] = useState([]);
    const [change, setChange] = useState(0);

    useEffect(() => {
        //calling the applications from backend
        //later these going to be async
        //mimic code for backend
        let applications = []
        try{
            //set loading state here
            applications = getApps()
        } catch (err) {
            //remove loading state here
            console.log(err)
        }
        //or remove loading here

        //this is correct, because we need to call backend again everytime we change pages
        setApps(applications)
    })

    //categorize applications before displaying
    const categorizedApps = categorizeApplications(apps)

    //** adding, changing the application */
    function updateAppStatus(app, newStatus) {

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
        try{
            res = updateApp(app, id)
        } catch (err) {
            console.log(err)
        }

        //this is frontend update (modify according to response, should be getting only one app back which is the app changed)
        setApps(res)
        setChange((change ? 0 : 1))
    }

    return (
        <>
            <h1>Dashboard</h1>
            <TaskTableContainer apps={interviewingApps} />
            {/* have to use map because forEach wont render */}
            {/* make a list with grid and gap here to store cards */}
            <div className="">
                <div className="">
                    Interviewing
                </div>
                <div className="d-flex flex-wrap gap-3 gap-lg-5">
                    {interviewingApps.map((app) => (
                        <ApplicationCardContainer
                            key={app.id}
                            appObject={{ app, updateAppStatus }}
                        />
                    ))}
                </div>
            </div>
            <div className="">
                <div className="d-flex">
                    Applied
                </div>
                <div className="d-flex flex-wrap gap-3">
                    {appliedApps.map((app) => (
                        <ApplicationCardContainer
                            key={app.id}
                            appObject={{ app, updateAppStatus }}
                        />
                    ))}
                </div>
            </div>
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

        </>
    )
}