import { useEffect, useState } from "react";
import ApplicationCardPresentation from "./ApplicationCardPresentation.js";

export default function ApplicationCardContainer({ appObject }) {

    const { app, updateAppStatus } = appObject;
    const [newStatus, setNewStatus] = useState(app["status"])
    //this file should control the button presses and load loading state or the app info itself
    //1. loading the card
    //2. the actual look of the card
    //3. deciding what's being display

    useEffect(() => {
        //that's when the status gets changed and a new card needs to be made
        if (app.status != newStatus) {
            updateAppStatus(app, newStatus);
        }
    }, [newStatus])

    const displayData = {
        id: app.id,
        dateEdited: app.dateEdited, //edit this later to (current date minus the date created or changed)
        status: app.status,
        position: app.position,
        company: app.company,
        salary: app.salary,
        link: "",
    }

    return (
        <>
            {app ?
                <>
                    <ApplicationCardPresentation
                        displayData={displayData}
                        newStatus={setNewStatus}
                    />
                </>
                :
                <>
                    <h1>Loading...</h1>
                </>
            }
        </>
    )

}

