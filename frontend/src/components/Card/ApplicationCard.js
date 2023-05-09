import ApplicationCardPresentation from "./ApplicationCardPresentation.js";

export default function ApplicationCard({ application, updateApplication }) {

    //this file should control the button presses and load loading state or the application info itself
    //1. loading the card
    //2. button press action when status changed
    //3. deciding what's being display

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

    function newStatus(status) {

        const newAppInfo = {
            "status": status
        }

        updateApplication(application, newAppInfo)
    }

    const displayData = {
        id: application.id,
        dateEdited: application.dateEdited, //edit this later to (current date minus the date created or changed)
        status: application.status,
        position: application.position,
        company: application.company,
        salary: application.salary,
    }

    //loading state for app list will be a bunch of card in loading state
    return (
        <>
            {application ?
                <>
                    <ApplicationCardPresentation
                        displayData={displayData}
                        newStatus={newStatus}
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