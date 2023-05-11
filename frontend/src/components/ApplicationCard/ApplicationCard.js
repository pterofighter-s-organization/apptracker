import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

//utils
import { dateFormat } from "../../utils/date.js";

//css
import "./ApplicationCard.css"

//components
import AppCardHeader from "./Sections/CardHeader/AppCardHeader.js";
import AppCardBody from "./Sections/CardBody/AppCardBody.js";
import AppCardFooter from "./Sections/CardFooter/AppCardFooter.js"


export default function ApplicationCard({ application, updateApplication }) {

    //this file should control the button presses and load loading state or the application info itself
    //1. loading the card
    //2. button press action when status changed
    //3. deciding what's being display

    const [status, setStatus] = useState(application.status)

    //updates when status changed
    useEffect(() => {
        if (status !== application.status) {
            if (status === "applied" && application.status === "interested") {
                const today = dateFormat("today")
                const newAppInfo = {
                    "status": status,
                    "dateApplied": today.dateFormatted,
                }
                updateApplication(application, newAppInfo)
            } else {
                const newAppInfo = {
                    "status": status
                }
                updateApplication(application, newAppInfo)
            }
        }
    }, [status, application, updateApplication])

    return (
        <div className="card border border-0 rounded-0 bg-body-secondary bg-opacity-75">
            {/* <div className="card-header bg-success" /> */}

            <AppCardHeader
                status={status}
                setStatus={setStatus}
            />
            <AppCardBody
                position={application.position}
                company={application.company}
            />
            <Link 
                to={"/application/"+application.id} 
                className="card-text btn btn-primary p-2 m-4 mt-0"
            >
                More Details
            </Link>
            <AppCardFooter
                dateEdited={application.dateEdited}
            />
        </div>
    )

}

// reference to application details
    // const card = {
    //     id: 1,
    //     status: "ghosted",
    //     position: "software engineer",
    //     dateCreated: "2-3-2023",
    //     company: "google",
    //     salary: "60k - 100k",
    //     dateapplied: "2-3-2023",
    // }