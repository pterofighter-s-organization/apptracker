
//the mimic backend will be refreshed if the page reloads

// use this array data and make a map (temp data for testing)
let applications = [
    {
        id: 1,
        status: "ghosted",
        position: "software engineer",
        dateCreated: "2-3-2023",
        company: "google",
        salary: "60k - 100k",
        dateEdited: "2-3-2023",
    },
    {
        id: 2,
        status: "interviewing",
        position: "Web Engineer",
        dateCreated: "2-5-2023",
        company: "google",
        salary: "90k - 120k",
        dateEdited: "2-1-2023",
        appointment: [
            ("Closing interview","5-6-2023","15:45"),
        ],
        interviewPrep: false,
    },
    {
        id: 3,
        status: "applied",
        position: "Software Engineer",
        dateCreated: "2-8-2023",
        company: "google",
        salary: "80k - 110k",
        dateEdited: "2-10-2023",
    },
    {
        id: 4,
        status: "interested",
        position: "Web Engineer",
        dateCreated: "2-5-2023",
        company: "google",
        salary: "90k - 120k",
        dateEdited: "2-1-2023",
    },
    {
        id: 6,
        status: "interviewing",
        position: "Software Engineer",
        dateCreated: "2-8-2023",
        company: "google",
        salary: "80k - 110k",
        dateEdited: "2-10-2023",
        appointment: [
            ("Technical interview","4-28-2023","15:00"),
            ("zoom interview","4-28-2023","19:25"),
        ],
        interviewPrep: false,
    },
    {
        id: 7,
        status: "ghosted",
        position: "Software Engineer",
        dateCreated: "2-8-2023",
        company: "google",
        salary: "80k - 110k",
        dateEdited: "2-10-2023",
    },
    {
        id: 8,
        status: "applied",
        position: "Software Engineer",
        dateCreated: "2-8-2023",
        company: "google",
        salary: "80k - 110k",
        dateEdited: "2-10-2023",
    },
    {
        id: 9,
        status: "interviewing",
        position: "Software Engineer",
        dateCreated: "2-8-2023",
        company: "google",
        salary: "80k - 110k",
        dateEdited: "2-10-2023",
        appointment: [
            ("Intro interview","4-29-2023","14:00"),
            ("Tech interview","4-31-2023","20:45"),
            ("Closing interview","5-3-2023","13:45"),
        ],
        interviewPrep: true,
    },
]

//mimic backend
export const changeApps = (app, id) => {
    const index = applications.findIndex((item) => item.id === id)
    applications[index] = app
    return applications
}

export const getApps = () => {
    return applications
}