
//utils
import * as dateTimeUtils from '../utils/dateTimeUtils'

//helpers
import { isValidIsoDateTime } from "./validationHelpers"

export function isTaskNeeded(status, isArchived) {
    return (status === "applied" || status === "interviewing" || status === "accepted") && !isArchived
}

export function categorizeTasks(tasks){

    const archivedTasks = []
    const relevantTasks = []
    const today = dateTimeUtils.findTodayUTCDate()

    tasks.forEach((task) => {
        const res = dateTimeUtils.compareDates(today, task.date_due)
        //1 meaning the the date due is before today
        if(res === 1){
            archivedTasks.push(task)
        }else{
            relevantTasks.push(task)
        }
    })

    return {
        archivedTasks,
        relevantTasks,
    }
}

export function findAllExtraTasks(applications) {

    let allExtraTasks = []

    if (applications) {
        applications.forEach((application) => {
            allExtraTasks = allExtraTasks.concat(findExtraTasks(application))
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
        resume_link,
        archived
    } = application

    const today = dateTimeUtils.findTodayUTCDate()
    const taskId = application_id + position + company

    //finding some of the major task the user needs to finish
    //upload resume, upload the time you applied to this application
    if (isTaskNeeded(status, archived)) {
        if (!isValidIsoDateTime(date_applied)) {
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

    const res = dateTimeUtils.compareDates(task1.date_due, task2.date_due)

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