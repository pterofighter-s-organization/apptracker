import { findTimeDifference } from "./time.js"
import { sortDates } from "./date.js"

//task.js
//functions here all help into organizing the details of the tasks being display

export function findAllTasks ( applications ) {

    let tasks = []
    applications.forEach((application) => {
        tasks = tasks.concat(findTasksOnApp(application))
    })

    return tasks
}

export function findTasksOnApp ( app ) {

    //input: the app and the tasks list for updating
    
    //0 - appointment
    //1 - Finish interview prep
    //find and organize task

    const tasks = []

    //gotta ensure the appointments sorted before going on
    app.appointments.sort((a, b) => sortDates(a.date, b.date))
    
    //app informations for task displaying
    const id = app.id
    const position = app.position
    const company = app.company
    const appointments = app.appointments

    //need to find from when to when the task is valid
    const today = "today"
    const earliestAppointment = findEarliestAppointment(appointments)
    const timeDue = earliestAppointment.date
    const indexOftheAppointment = earliestAppointment.index

    //insert task
    // if -1 then theres no appointment
    if(indexOftheAppointment === -1){
        tasks.push(
            {
                appId: id,
                position: position,
                company: company,
                priority : 0,
                type: "appointments",
                title: "Track your next meeting time",
                date: today,
                timeDue: today,
            }
        )
    }else{
        //Start from today's appointment date and beyond
        appointments.slice(indexOftheAppointment).forEach(appointment =>{
            tasks.push(
                {
                    appId: id,
                    position: position,
                    company: company,
                    priority: 0,
                    type: "appointments",
                    title: appointment.title,
                    date: appointment.date,
                    timeDue: appointment.date,
                }
            )
        })
    }

    //if didn't finish prep for interview
    if (app.interviewPrep.length <= 0) {
        tasks.push(
            {
                appId: id,
                position: position,
                company: company,
                priority: 1,
                type: "interview-prep",
                title: "Prepare for interview questions",
                date: today,
                timeDue: timeDue,
            }
        )
    }

    return tasks
}

export function findEarliestAppointment ( appointments ) {

    //input: appointments array
    //returns the index of the earliest up to date appointment possible
    //up to date meaning it has to be later than today

    const today = "today"
    for(let i=0; i < appointments.length; i++) {
        const appointment = appointments[i]
        const timeDiff = findTimeDifference(today, appointment.date)
        if(timeDiff.daysLeft >= 0){
            return { date: appointment.date, index: i }
        }
    }

    //index of that appointment
    return { date: today, index: -1 }
}