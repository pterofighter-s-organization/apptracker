let applications = [
    {
        id: 1,
        status: "ghosted",
        position: "software engineer",
        dateCreated: "2-3-2023",
        company: "google",
        salary: "60k - 100k",
        dateEdited: "2-3-2023 14:53",
    },
    {
        id: 2,
        status: "interviewing",
        position: "Web Engineer",
        dateCreated: "2-5-2023",
        company: "google",
        salary: "90k - 120k",
        dateEdited: "2-1-2023 09:55",
        appointments: [
            {
                title: "closing interview",
                date: "5-6-2023 15:45",
            },
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
        dateEdited: "2-10-2023 03:43",
    },
    {
        id: 4,
        status: "interested",
        position: "Web Engineer",
        dateCreated: "2-5-2023",
        company: "google",
        salary: "90k - 120k",
        dateEdited: "2-1-2023 12:35",
    },
    {
        id: 6,
        status: "interviewing",
        position: "Software Engineer",
        dateCreated: "2-8-2023",
        company: "google",
        salary: "80k - 110k",
        dateEdited: "2-10-2023 10:50",
        appointments: [
            {
                title: "first interview",
                date: "8-29-2023 08:45",
            },
            {
                title: "zoom interview",
                date: "4-26-2023 00:26",
            },
            {
                title: "test interview",
                date: "3-29-2023 08:45",
            },
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
        dateEdited: "2-10-2023 09:45",
    },
    {
        id: 8,
        status: "applied",
        position: "Software Engineer",
        dateCreated: "2-8-2023",
        company: "google",
        salary: "80k - 110k",
        dateEdited: "2-10-2023 08:45",
    },
    {
        id: 9,
        status: "interviewing",
        position: "Software Engineer",
        dateCreated: "2-8-2023",
        company: "google",
        salary: "80k - 110k",
        dateEdited: "2-10-2023 16:25",
        appointments: [
            {
                title: "zoom interview",
                date: "4-25-2023 10:45",
            },
        ],
        interviewPrep: true,
    },
    {
        id: 10,
        status: "interviewing",
        position: "Software Engineer",
        dateCreated: "2-8-2023",
        company: "google",
        salary: "80k - 110k",
        dateEdited: "2-10-2023 16:25",
        appointments: [
            {
                title: "zoom interview",
                date: "4-25-2023 10:45",
            },
        ],
        interviewPrep: false,
    },
]

//mimic backend
export const updateApp = (app, id) => {

    const index = applications.findIndex((item) => item.id === id)

    if (index === -1) {
        return new Error("Application not found")
    }

    applications[index] = app
    return applications
}

export const getApps = () => {
    
    if(!applications){
        return new Error("No applications found")
    }

    return applications
}