
//utils
import { findTodayDate, compareDates } from "../utils/dateTimeUtils"

//helpers
import { isValidDateTime } from "./validationHelpers"

export function isTaskNeeded(applicationStatus) {
    return applicationStatus === "applied" || applicationStatus === "interviewing" || applicationStatus === "accepted"
}

export function findRelevantTasks(tasks, isArchived) {

    const relevantTasks = []
    const today = findTodayDate()

    tasks.forEach((task, _) => {
        // console.log(compareDates(today, task.date_due), compareDates(today, task.date_due)===-1, tasks.slice(index))
        const res = compareDates(today, task.date_due)
        if (isArchived === null || isArchived) {
            relevantTasks.push(task)
        } else if (!isArchived && res <= 0) {
            relevantTasks.push(task)
        }
    })

    return relevantTasks
}

export function findAllExtraTasks(applications) {

    let allExtraTasks = []

    if (applications) {
        applications.forEach((application) => {
            if (isTaskNeeded(application.status)) {
                allExtraTasks = allExtraTasks.concat(findExtraTasks(application))
            }
        })
    }

    return allExtraTasks
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
        if (!isValidDateTime(date_applied)) {
            extraTasks.push(
                {
                    task_id: taskId,
                    application_id: application_id,
                    position: position,
                    company: company,
                    priority: 1,
                    section: "edit",
                    title: "Please give the time you applied to the application",
                    date_due: today,
                }
            )
        } if (resume_link.length <= 0) {
            extraTasks.push(
                {
                    task_id: taskId,
                    application_id: application_id,
                    position: position,
                    company: company,
                    priority: 1,
                    section: "edit",
                    title: "Insert the link for your resume",
                    date_due: today,
                }
            )
        }
    }

    return extraTasks
}

export function findPrioritizedTask(task1, task2) {

    const res = compareDates(task1.date_due, task2.date_due)

    //same day
    if (res === 0) {
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
        return res
    }
}