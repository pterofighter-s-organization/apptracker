import { findTasksOnApp } from "../../utils/task.js"
import { sortTime } from "../../utils/time.js"
import TaskTablePresentation from "./TaskTablePresentation.js"

export default function TaskTable( { applications } ){

    //every app that comes into this, expect they have appointment and interview prep property
    //handling task table data

    applications.forEach((application) => {
        application.appointments.sort((a, b) => sortTime(a.date, b.date))
    })

    //find tasks in all the interviewing applications
    let taskData = []
    applications.forEach((application) => {
        taskData = taskData.concat(findTasksOnApp(application))
    })

    //sort it by the time due
    taskData.sort((a,b) => {
        return sortTime(a.timeDue, b.timeDue)
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