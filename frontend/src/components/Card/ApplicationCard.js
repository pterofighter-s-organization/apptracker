import { useEffect, useState } from "react";
import ApplicationCardPresentation from "./ApplicationCardPresentation.js";

export default function ApplicationCard ({ application, updateAppStatus }) {

    //this file should control the button presses and load loading state or the application info itself
    //1. loading the card
    //2. button press action when status changed
    //3. deciding what's being display

    const [newStatus, setNewStatus] = useState(application.status)

    //listens to when the status gets changed
    useEffect(() => {
        //that's when the status gets changed and a new card needs to be made
        if (application.status !== newStatus) {
            updateAppStatus(application, newStatus);
        }
    }, [newStatus, application])

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

    const displayData = {
        id: application.id,
        dateEdited: application.dateEdited, //edit this later to (current date minus the date created or changed)
        status: application.status,
        position: application.position,
        company: application.company,
        salary: application.salary,
        link: "",
    }

    //loading state for app list will be a bunch of card in loading state
    return (
        <>
            {application ?
                <>
                    <ApplicationCardPresentation
                        displayData={displayData}
                        newStatus={setNewStatus}
                    />
                </>
                :
                <>
                    {/* this loading state will happen when it is not in a list */}
                    <h1>Loading...</h1>
                </>
            }
        </>
    )

}