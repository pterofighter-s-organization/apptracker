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
            <div className="border border-0 card bg-body-secondary p-0" style={{maxWidth: "475px"}}>
                {/* <div className="card-header bg-success" /> */}
                <div className="border border-0 card-header p-4 d-flex flex-wrap gap-3">
                <StatusButtonPresentation color={"primary"} text={"interviewing"}/>
                    <StatusButtonPresentation color={"secondary"} text={"ghosted"}/>
                    <StatusButtonPresentation color={"success"} text={"Accepted"}/>
                    <StatusButtonPresentation color={"danger"} text={"Rejected"}/>
                    <StatusButtonPresentation color={"warning"} text={"Applied"}/>
                </div>
                <div className="card-body p-4 d-flex flex-column gap-2">
                    <div className="card-title h4">
                        {displayData.position} Application
                    </div>
                    <div className="card-subtitle h5">
                        - {displayData.company}
                    </div>
                    <Link to={displayData.link} className="card-text btn btn-primary p-3 mt-4">
                        <div className="">
                            More Details
                        </div>
                    </Link>
                </div>

                <div class="border border-0 card-footer text-body-secondary p-4">
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