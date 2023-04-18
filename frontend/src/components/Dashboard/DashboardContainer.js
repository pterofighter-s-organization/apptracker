import React from "react"
import UrgentTaskContainer from "../UrgentTask/UrgentTaskContainer.js"
import ApplicationCardContainer from "../ApplicationCard/ApplicationCardContainer.js"
import CategorizeCardContainer from "../CategorizeCard/CategorizeCardContainer.js"

export default function DashboardContainer({}) {

    //we going to define a simple layout grid here for these two containers

    const {categorizedApps, updateAppStatus } = CategorizeCardContainer("status")
    const card = {
        id: 1,
        status: "ghosted",
        position: "software engineer",
        dateCreated: "2-3-2023",
        company: "google",
        salary: "60k - 100k",
        dateApplied: "2-3-2023",
    }

    return(
        <>
            <h1>Dashboard</h1>
            {/* <UrgentTaskContainer/> */}
            <button onClick={(e) => {
                e.preventDefault()
                updateAppStatus(card, "interviewing", "ghosted")
            }
            }>Test</button>
            {/* this could be 1 - n containers (depending on categories) */}
            
        </>
    )
}