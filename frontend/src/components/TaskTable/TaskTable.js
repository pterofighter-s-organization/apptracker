//utils
import { sortDates } from "../../utils/date.js"

//components
import TaskTablePresentation from "./TaskTablePresentation.js"

export default function TaskTable ({tasks}) {

    //handling task table data and its modification, also handling its loading state

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