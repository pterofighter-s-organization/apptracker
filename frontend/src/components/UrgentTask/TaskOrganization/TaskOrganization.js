
export function FindDaysLeftOnTask ( tasks ) {

    //looping the appointment
    //find 3 days left, 2 days left, 1 day left
    //1 week ago
    //0 - appointment
    //1 - Finish interview prep

    const test = [
        (0, "note1", "5-5-2023"),
        (1, "note2", "4-28-2023"),    
    ]

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

