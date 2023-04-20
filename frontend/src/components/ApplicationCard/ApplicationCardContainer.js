import ApplicationCardPresentation from "./ApplicationCardPresentation.js"

export default function ApplicationCardContainer ( {appObject} ) {

    const { app } = appObject;
    //this file should control the button presses and load loading state or the app info itself
    //1. loading the card
    //2. the actual look of the card
    //3. deciding the color of the card
    //4. deciding what's being displayed (do later)

    //define which color correspond with what status
    const colorMapToCategory = {
        "interviewing": "warning",
        "applied": "info",
        "ghosted": "tertiary",
        "rejected": "danger",
        "accepted": "success"
    }

    const buttonsToShow = {
        "ghosted": ["applied", "rejected", "interviewing", "interested", "accepted"],
        "interested": ["applied", "rejected", "interviewing", "accepted", "ghosted"],
        "interviewing": ["rejected", "accepted", "ghosted"],
        "applied": ["rejected", "interviewing","ghosted"],
        "accepted": []
    }

    const displayData = {
        "id": app["id"],
        "timeDifference" : "3 days", //edit this later to (current date minus the date created or changed)
        "status" : app["status"],
        "color": colorMapToCategory[app["status"]],
        "position": app["position"],
        "company": app["company"],
        "salary": app["salary"],
        "buttons": buttonsToShow[app["status"]],
        "link": "",
    }

    // {  reference of the app data
    //     id: 1,
    //     status: "ghosted",
    //     position: "software engineer",
    //     dateCreated: "2-3-2023",
    //     company: "google",
    //     salary: "60k - 100k",
    //     dateApplied: "2-3-2023",
    // },
    //actual data on the card

    return(
        <>
            {app ? 
                <>
                    <ApplicationCardPresentation 
                        appObject={appObject}
                        displayData={displayData}
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

