
export function findTaskOnApp ( app, tasks ) {

    //0 - appointment
    //1 - Finish interview prep
    //find and organize task that are useful and important
    
    const id = app.id
    const position = app.position
    const company = app.company
    const appointments = app.appointments
    const today = new Date(Date.now())
    const timeInHours = today.toLocaleTimeString('it-IT').split(":")
    const date = today.toLocaleString('en-US', { timeZone: 'UTC' }).replaceAll(",", "").split(" ")[0] + " " + timeInHours[0] + ":" + timeInHours[1]

    const earliestAppointment = findEarliestAppointment(appointments) // if -1 then theres no appointment
    const timeDue = dateIntoString(earliestAppointment.date)

    const indexOftheAppointment = earliestAppointment.index

    if(indexOftheAppointment == -1){
        tasks.push(
            {
                appId: id,
                position: position,
                company: company,
                priority : 0,
                title: "Track your next meeting time",
                date: date,
                timeDue: date,
            }
        )
    }else{
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
            date: date,
            timeDue: timeDue,
        }
    )
}

export function dateIntoString ( time ) {

    const date = new Date(time)
    const timeInHours = date.toLocaleTimeString('it-IT').split(":")
    return date.toLocaleString('en-US', { timeZone: 'UTC' }).replaceAll(",", "").split(" ")[0] + " " + timeInHours[0] + ":" + timeInHours[1]
}

export function findTimeDifference ( time1, time2 ) {

    //difference between time 2 and time 1
    const date1 = new Date(time1)
    const date2 = new Date(time2)
    const daysLeftInMs = (date1 - date2)
    const daysLeft = Math.floor(daysLeftInMs/ (1000 * 60 * 60 * 24))
    const yearsLeft = date1.getFullYear() - date2.getFullYear();
    const monthsLeft = date1.getMonth() - date2.getMonth();
    const totalMonthsLeft = yearsLeft * 12 + monthsLeft
    const hoursLeft = Math.floor((daysLeftInMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))

    return { daysLeft, hoursLeft, yearsLeft, monthsLeft, totalMonthsLeft }
}

export function findEarliestAppointment ( appointments ) {

    for(let i=0; i < appointments.length; i++) {
        const appointment = appointments[i]
        const timeDiff = findTimeDifference(appointment.date, Date.now())
        if(timeDiff.daysLeft >= 0){
            return { date: appointment.date, index: i }
        }
    }

    //index of that appointment
    return { date: Date.now(), index: -1 }
}

export function findDaysLeftOnTask ( task ) {

    //seeing one appointment
    //find 3 days date1, 2 days date1, 1 day date1
    //1 week ago

    task.timeDiff = findTimeDifference( task.timeDue, Date.now() )   
}


