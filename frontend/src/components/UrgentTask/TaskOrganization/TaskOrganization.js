
export function FindTaskOnApp ( app, tasks ) {
    console.log(app)
    const id = app.id
    const appointments = app.appointments
}

export function FindDaysLeftOnTask ( task ) {

    //seeing one appointment
    //find 3 days left, 2 days left, 1 day left
    //1 week ago
    //0 - appointment
    //1 - Finish interview prep
    //return its priority and 

    const test = [
        (0, "note1", "5-5-2023"),
        (1, "note2", "4-28-2023"),    
    ]

    const testDate = new Date("4-28-2023 4:30")
    const today = new Date(Date.now())
    console.log(today)
    console.log(testDate)
    const daysLeftInMs = (testDate - today) //milliseconds rn
    if (daysLeftInMs < 0){
        console.log("negative")
    } else {

    }
    const daysLeft = Math.floor(daysLeftInMs/ (1000 * 60 * 60 * 24))
    const hoursLeft = Math.floor((daysLeftInMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    console.log(daysLeft, hoursLeft)
    // / (1000 * 60 * 60 * 24)
    

    //28 days away
    //0 = today
    const res = [
        (0,"note1", "4-23-2023"),
        (1,"note3", "4-22-2023"),
        (2,"note4", "4-28-2023"),
        (28,"note5", "5-5-2023"),
    ]

    return res
}

export function RankTask ( tasks ) {

    //sort with the number in [0]

}

