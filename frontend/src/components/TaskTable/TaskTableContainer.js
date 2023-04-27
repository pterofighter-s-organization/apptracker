import { findTasksOnApp } from "./TaskOrganizeFunctions"
import TaskTablePresentation from "./TaskTablePresentation.js"

export default function TaskTableContainer( { apps } ){

    //make a container that only fetches data
    //so this container pass on the status to take to the list container
    //this container only categorizes the apps //categorizecontainer
    //so the list presentation decides how the list looks not the container
    //maybe can try categorizecontainer only return states
    //categorize container should also have a status change function to update (takes in id and status changed)
    //so i can decide on how the list looks

    //every app that comes into this container, expect they have appointment and interview prep property


    //handling task table data

    apps.map((app) => {
        app.appointments.sort((a, b) => new Date(a.date) - new Date(b.date))
    })

    let taskData = []

    //find tasks in all the interviewing apps
    apps.map((app) => {
        taskData = taskData.concat(findTasksOnApp(app))
    })

    //sort it by the time due
    taskData.sort((a,b) => {
        const time1 = new Date(a.timeDue).getTime() - new Date(Date.now())
        const time2 = new Date(b.timeDue).getTime() - new Date(Date.now())
        return time1 - time2
    })

    //this deals with the loading state of it and the actual table
    return(
        <>
            {taskData ? 
                <TaskTablePresentation displayData={taskData}/>
                :
                <>
                    <h1>Loading...</h1>
                </>
            }
        </>
    )
}