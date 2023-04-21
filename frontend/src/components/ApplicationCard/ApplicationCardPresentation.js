import { Link } from "react-router-dom";
import StatusButtonPresentation from "../StatusButton/StatusButtonPresentation";

export default function ApplicationCardPresentation({ appObject, displayData }) {

    const { app, updateAppStatus } = appObject;

    // "id": app["id"],
    // "timeDifference" : "3 days", //edit this later to (current date minus the date created or changed)
    // "status" : app["status"],
    // "color": colorMapToCategory[app["status"]],
    // "position": app["position"],
    // "company": app["company"],
    // "salary": app["salary"],
    // "buttons": buttonsToShow[app["status"]],
    // "link": "",

    //present the following
    //1. (Status, time diff)
    //2. (color)
    //3. (Position, <tab>, Company, <tab>, salary)
    //4. (buttons to change status)
    //5. (the button to the app)

    return (
        <>
            <div className="border border-0 card bg-body-secondary p-0" style={{ maxWidth: "350px" }}>
                {/* <div className="card-header bg-success" /> */}
                <div className="border border-0 card-header p-4 d-flex flex-wrap gap-3">
                    <div className="btn-group" role="group" aria-label="Basic radio toggle button group">
                        <StatusButtonPresentation color={"primary"} text={"interviewing"} id="1" checked={true} name={displayData.id}/>
                        <StatusButtonPresentation color={"secondary"} text={"ghosted"} id="2" name={displayData.id}/>
                        <StatusButtonPresentation color={"success"} text={"Accepted"} id="3" name={displayData.id}/>
                        <StatusButtonPresentation color={"danger"} text={"Rejected"} id="4" name={displayData.id}/>
                        <StatusButtonPresentation color={"warning"} text={"Applied"} id="5" name={displayData.id}/>
                    </div>
                </div>
                <div className="card-body p-4 d-flex flex-column gap-2">
                    <div className="card-title h5">
                        {displayData.position} Application
                    </div>
                    <div className="card-subtitle h6">
                        - {displayData.company}
                    </div>
                </div>

                <Link to={displayData.link} className="card-text btn btn-primary p-2 m-4 mt-0">
                    <div className="">
                        More Details
                    </div>
                </Link>

                <div className="border border-0 card-footer text-body-secondary p-4">
                    Updated on 2/21/2022
                </div>

                <>
                    {/* buttons onchange */}
                </>
                <>
                    {/* this going to be replaced with <Link></Link> */}

                </>
            </div>
        </>
    )
}