import { findTasksOnApp } from "../../utils/task.js"
import TaskTablePresentation from "./TaskTablePresentation.js"

export default function TaskTable( { applications } ){

    //every app that comes into this, expect they have appointment and interview prep property
    //handling task table data

    applications.map((application) => {
        application.appointments.sort((a, b) => new Date(a.date) - new Date(b.date))
    })

    //find tasks in all the interviewing applications
    let taskData = []
    applications.map((application) => {
        taskData = taskData.concat(findTasksOnApp(application))
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