import React from "react"
import UrgentTaskContainer from "../UrgentTask/UrgentTaskContainer.js"
import CategorizeCardContainer from "../CategorizeCard/CategorizeCardContainer.js"

export default function DashboardContainer({}) {

    //we going to define a simple layout grid here for these two containers

    return(
        <>
            <h1>Dashboard</h1>
            <UrgentTaskContainer/>

            {/* this could be 1 - n containers (depending on categories) */}
            <CategorizeCardContainer/>
        </>
    )
}