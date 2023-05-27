//utils
import { findTodayDate } from "./dateTimeUtils"
import { validateDateTime } from "./validators"
import { sortDates } from "./dateTimeUtils"

export function checkIfNeedTask(applicationStatus) {
    return applicationStatus === "applied" || applicationStatus === "interviewing" || applicationStatus === "accepted"
}

// export function findAllExtraTasks(applications) {

//     let tasks = []

//     if (applications) {
//         applications.forEach((application) => {
//             if (checkIfNeedTask(application.status)) {
//                 allExtraTasks = allExtraTasks.concat(findExtraTasks(application))
//             }
//         })
//     }

//     return tasks
// }

export function processAllTasks(tasks) {

    application.tasks.sort((a, b) => sortDates(a.date, b.date))
    
}

export function processTaskInfo(task) {

    const {
        task_id,
        application_id,
        title,
        company,
        position,
        type,
        date_due
    } = task


}

export function findExtraTasks(application) {

    const extraTasks = []

    const {
        application_id,
        position,
        company,
        status,
        date_applied,
        resume_link
    } = application

    const today = findTodayDate()
    const taskId = application_id + position + company

    //finding some of the major task the user needs to finish
    //upload resume, upload the time you applied to this application
    if (status !== "interested") {
        if (!validateDateTime(date_applied)) {
            extraTasks.push(
                {
                    id: taskId,
                    position: position,
                    company: company,
                    priority: 1,
                    type: "edit",
                    title: "Please give the time you applied to the application",
                    date: today,
                    timeDue: today,
                }
            )
        } if (resume_link.length <= 0) {
            extraTasks.push(
                {
                    id: taskId,
                    position: position,
                    company: company,
                    priority: 1,
                    type: "edit",
                    title: "Insert the link for your resume",
                    date: today,
                    timeDue: today,
                }
            )
        }
    }

    return extraTasks
}

export function findPrioritizedTask(task1, task2) {

    const taskDateWhen = sortDates(task1.date, task2.date)

    //same day
    if (taskDateWhen === 0) {
        //num smaller is higher priority
        if (task1.priority < task2.priority) {
            return -1 //goes first
        } else if (task1.priority > task2.priority) {
            return 1
        } else {
            return 0 //same priority
        }
    } else {
        //different day, then we sort by date instead
        return taskDateWhen
    }
}