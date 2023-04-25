import { useEffect, useState } from "react"
import { findDaysLeftOnTask, findTaskOnApp, findTimeDifference } from "./TaskOrganization/TaskOrganization"
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

    apps.map((app) => {
        app.appointments.sort((a, b) => new Date(a.date) - new Date(b.date))
    })

    let taskData = []
    //unwrap to find specific task
    apps.map((app) => {
        findTaskOnApp(app, taskData)
    })

    taskData.map((task) => {
        findDaysLeftOnTask(task)
    })

    taskData.sort((a,b) => {
        const time1 = new Date(a.timeDue).getTime() - new Date(Date.now())
        const time2 = new Date(b.timeDue).getTime() - new Date(Date.now())
        return time1 - time2
    })

    //this deals with the loading state of it and the actual table
    return(
        <>
            {taskData ? 
                <UrgentTaskPresentation displayData={taskData}/>
                :
                <>
                    <h1>Loading...</h1>
                </>
            }
        </>
    )
}