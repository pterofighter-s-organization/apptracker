import React from "react"
import ApplicationCardContainer from "../ApplicationCard/ApplicationCardContainer.js"
import CategorizeCardContainer from "../CategorizeCard/CategorizeCardContainer.js"

export default function DashboardContainer() {

    //we going to define a simple layout grid here for these two containers

    //only getting the function that change app status and all apps info
    const { categorizedApps, updateAppStatus } = CategorizeCardContainer("status")
    const appliedApps = "applied" in categorizedApps ? categorizedApps["applied"] : []
    const interviewingApps = "interviewing" in categorizedApps ? categorizedApps["interviewing"] : [] //i should make a constants file

    // const card = {
    //     id: 1,
    //     status: "ghosted",
    //     position: "software engineer",
    //     dateCreated: "2-3-2023",
    //     company: "google",
    //     salary: "60k - 100k",
    //     dateApplied: "2-3-2023",
    // }


    return (
        <>
            <h1>Dashboard</h1>
            {/* have to use map because forEach wont render */}
            {/* make a list with grid and gap here to store cards */}
            <div className="d-flex justify-content-center flex-wrap gap-5 px-3">
                {interviewingApps.map((app) => (
                    <ApplicationCardContainer
                        key={app.id}
                        appObject={{ app, updateAppStatus }}
                    />
                ))}
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
            {/* <UrgentTaskContainer/> */}
            {/* <button onClick={(e) => {
                e.preventDefault()
                updateAppStatus(card, "interviewing", "ghosted")
            }
            }>Test</button> */}
            {/* this could be 1 - n containers (depending on categories) */}

        </>
    )
}