import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

//utils
import { dateFormat } from "../../utils/dateTime/date/date.js";

//css
import "./ApplicationCard.css"

//components
import AppCardHeader from "./components/CardHeader/AppCardHeader.js";
import AppCardBody from "./components/CardBody/AppCardBody.js";
import AppCardFooter from "./components/CardFooter/AppCardFooter.js"


export default function ApplicationCard({ application, updateApplication }) {

    //this file should control the button presses and load loading state or the application info itself
    //1. loading the card
    //2. button press action when status changed
    //3. deciding what's being display

    const [formData, setFormData] = useState({
        "status": application.status
    })
    
    console.log(application.status, "after")
    //updates when status changed
    useEffect(() => {
        //status = new status, app.status is the old status
        const status = formData["status"]

        if (status !== application.status) {
            console.log(status, application.status, application.application_id)
            if (status === "applied" && application.status === "interested") {
                const today = dateFormat("today")
                const newAppInfo = {
                    "status": status,
                    "date_applied": today.dateFormatted,
                }

                updateApplication(application, newAppInfo)
                
            } else {
                const newAppInfo = {
                    "status": status
                }
                updateApplication(application, newAppInfo)
            }
        }
    }, [formData, application, updateApplication])

    return (
        <div className="card border border-0 rounded-0 bg-body-secondary bg-opacity-75">
            {/* <div className="card-header bg-success" /> */}

            <AppCardHeader
                formData={formData}
                setFormData={setFormData}
            />
            <AppCardBody
                position={application.position}
                company={application.company}
            />
            <Link 
                to={"/application/"+application.application_id} 
                className="card-text btn btn-primary p-2 m-4 mt-0"
            >
                More Details
            </Link>
            <AppCardFooter
                dateEdited={application.date_edited}
            />
        </div>
    )

}

//card header - status
//body - app info, title and company
//footer - date updated

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