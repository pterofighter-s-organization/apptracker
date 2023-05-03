//utils
import { sortDates } from "../../utils/date.js"

//components
import TaskTablePresentation from "./TaskTablePresentation.js"

export default function TaskTable ({tasks}) {

    //every app that comes into this, expect they have appointment and interview prep property
    //handling task table data

    //find tasks in all the interviewing applications

    //sort it by the time due
    tasks.sort((a,b) => {
        return sortDates(a.timeDue, b.timeDue)
    })

    //this deals with the loading state of it and the actual table
    return(
        <>
            {tasks ? 
                <TaskTablePresentation
                    displayData={tasks}
                />
                :
                <>
                    <h1>Loading...</h1>
                </>
            }
        </>
    )
}