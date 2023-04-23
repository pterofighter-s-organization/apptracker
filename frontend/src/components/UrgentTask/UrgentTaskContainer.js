import { useEffect, useState } from "react"
import { FindDaysLeftOnTask, FindTaskOnApp } from "./TaskOrganization/TaskOrganization"
import UrgentTaskPresentation from "./UrgentTaskPresentation"

export default function UrgentTaskContainer( { apps } ){

    //make a container that only fetches data
    //so this container pass on the status to take to the list container
    //this container only categorizes the apps //categorizecontainer
    //so the list presentation decides how the list looks not the container
    //maybe can try categorizecontainer only return states
    //categorize container should also have a status change function to update (takes in id and status changed)
    //so i can decide on how the list looks

    //every app that comes into this container, expect they have appointment and interview prep property

   
    let unwrappedData = []

    //unwrap
    apps.map((app) => {
        FindTaskOnApp(app, unwrappedData)
    })

    // const dateData = apps.fill().map((app) => {
    //     return FindDaysLeftOnTask(app)
    // })

    const rankedData = []

    //this deals with the loading state of it and the actual table
    return(
        <>
            <UrgentTaskPresentation displayData={rankedData}/>
        </>
    )
}