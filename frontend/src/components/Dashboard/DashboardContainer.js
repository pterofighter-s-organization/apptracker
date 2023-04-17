import React from "react"
import UrgentTaskContainer from "../UrgentTask/UrgentTaskContainer.js"
import ApplicationCardContainer from "../ApplicationCard/ApplicationCardContainer.js"

export default function DashboardContainer({}) {
    //we going to define a simple layout grid here for these two containers

    return(
        <>
            <h1>Dashboard</h1>
            <UrgentTaskContainer/>
            <ApplicationCardContainer/>
        </>
    )
}