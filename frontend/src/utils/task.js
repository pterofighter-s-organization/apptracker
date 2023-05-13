//utils
import { findTimeDifference } from "./time.js"
import { sortDates, validateDate } from "./date.js"
import { checkIfNeedTask } from "./application.js"
import { textFormat } from "./text.js"

//task.js
//functions here all help into organizing the details of the tasks being display

export function findAllTasks(applications) {

    let tasks = []

    if (applications) {
        applications.forEach((application) => {
            if (checkIfNeedTask(application.status)) {
                tasks = tasks.concat(findTasksOnApp(application))
            }
        })
    }

    return tasks
}

export function findTasksOnApp(application) {

    //checks out the task for every app
    //and adds task that people forgot to do

    const tasks = []

    //sort the task by date first
    application.tasks.sort((a, b) => sortDates(a.date, b.date))

    const {
        id,
        position,
        company
    } = application

    const today = "today"
    const earliestTask = findEarliestTask(application.tasks)
    const indexForEarliestTask = earliestTask.index

    if (indexForEarliestTask === -1) {
        tasks.push(
            {
                id: id,
                position: position,
                company: company,
                priority: 0,
                type: "tasks",
                title: "Track your next upcoming interview or related task",
                date: today,
                timeDue: today,
            }
        )
    } else {
        application.tasks.slice(indexForEarliestTask).forEach((task) => {
            tasks.push(
                {
                    id: id,
                    position: position,
                    company: company,
                    priority: 0,
                    type: "tasks",
                    title: textFormat(task.title),
                    date: task.date,
                    timeDue: task.date,
                }
            )
        })
    }

    //finding some of the major task the user needs to finish
    //upload resume, upload the time you applied to this application
    if (application.status !== "interested") {
        if (!validateDate(application.dateApplied)) {
            tasks.push(
                {
                    id: id,
                    position: position,
                    company: company,
                    priority: 1,
                    type: "dateApplied",
                    title: "Please give the time you applied to the application",
                    date: today,
                    timeDue: today,
                }
            )
        } if (application.resume.length <= 0) {
            tasks.push(
                {
                    id: id,
                    position: position,
                    company: company,
                    priority: 1,
                    type: "resume",
                    title: "Insert the link for your resume",
                    date: today,
                    timeDue: today,
                }
            )
        }
    }

    return tasks
}


export function findEarliestTask(tasks) {

    //input: tasks array
    //returns the index of the earliest up to date appointment possible
    //up to date meaning it has to be later than today

    const today = "today"
    for (let i = 0; i < tasks.length; i++) {
        const task = tasks[i]
        const timeDiffObject = findTimeDifference(today, task.date)
        if (timeDiffObject.daysLeft >= 0) {
            return { date: task.date, index: i }
        }
    }

    //index of that appointment
    return { date: today, index: -1 }
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