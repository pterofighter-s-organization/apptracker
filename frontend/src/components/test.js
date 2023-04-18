
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
        dateApplied: "2-3-2023",
    },
    {
        id: 2,
        status: "interviewing",
        position: "web engineer",
        dateCreated: "2-5-2023",
        company: "google",
        salary: "90k - 120k",
        dateApplied: "2-1-2023",
    },
    {
        id: 3,
        status: "applied",
        position: "software engineer",
        dateCreated: "2-8-2023",
        company: "google",
        salary: "80k - 110k",
        dateApplied: "2-10-2023",
    }
]

//mimic backend
export const changeApps = (app, id) => {
    const index = applications.findIndex((item) => item.id === id)
    applications[index] = app
}

export const getApps = () => {
    return applications
}