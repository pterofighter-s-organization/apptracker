import { findTimeDifference } from "../TimeDisplay/TimeDisplayFunctions"

//functions here all help into organizing the details of the tasks being display

export function findTasksOnApp ( app ) {

    //input: the app and the tasks list for updating
    
    //0 - appointment
    //1 - Finish interview prep
    //find and organize task

    const tasks = []
    
    //app informations for task displaying
    const id = app.id
    const position = app.position
    const company = app.company
    const appointments = app.appointments

    //need to find from when to when the task is valid
    const now = Date.now()
    const earliestAppointment = findEarliestAppointment(appointments)
    const timeDue = earliestAppointment.date
    const indexOftheAppointment = earliestAppointment.index

    //insert task
    // if -1 then theres no appointment
    if(indexOftheAppointment == -1){
        tasks.push(
            {
                appId: id,
                position: position,
                company: company,
                priority : 0,
                title: "Track your next meeting time",
                date: now,
                timeDue: now,
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
                    title: appointment.title,
                    date: appointment.date,
                    timeDue: appointment.date,
                }
            )
        })
    }

    tasks.push(
        {
            appId: id,
            position: position,
            company: company,
            priority: 1,
            title: "Prepare for interview",
            date: now,
            timeDue: timeDue,
        }
    )

    return tasks
}

export function findEarliestAppointment ( appointments ) {

    for(let i=0; i < appointments.length; i++) {
        const appointment = appointments[i]
        const timeDiff = findTimeDifference(Date.now(), appointment.date)
        if(timeDiff.daysLeft >= 0){
            return { date: appointment.date, index: i }
        }
    }

    //index of that appointment
    return { date: Date.now(), index: -1 }
}



