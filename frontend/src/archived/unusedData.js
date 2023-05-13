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
                date: "5/6/2023 15:45",
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
                date: "8/29/2023 08:45",
            },
            {
                title: "zoom interview",
                date: "4/26/2023 00:26",
            },
            {
                title: "test interview",
                date: "3/29/2023 08:45",
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
                date: "4/25/2023 10:45",
            },
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


// const buttonsToShow = {
//     "ghosted": ["applied", "rejected", "interviewing", "interested", "accepted"],
//     "interested": ["applied", "rejected", "interviewing", "accepted", "ghosted"],
//     "interviewing": ["rejected", "accepted", "ghosted"],
//     "applied": ["rejected", "interviewing","ghosted"],
//     "accepted": []
// }

// const colorMapToCategory = {
//     "interviewing": "warning",
//     "applied": "info",
//     "ghosted": "tertiary",
//     "rejected": "danger",
//     "accepted": "success"
// }

// {  reference of the app data
//     id: 1,
//     status: "ghosted",
//     position: "software engineer",
//     dateCreated: "2-3-2023",
//     company: "google",
//     salary: "60k - 100k",
//     dateApplied: "2-3-2023",
// },
//actual data on the card


//make a container that only fetches data
//so this container pass on the status to take to the list container
//this container only categorizes the apps //categorizecontainer
//so the list presentation decides how the list looks not the container
//maybe can try categorizecontainer only return states
//categorize container should also have a status change function to update (takes in id and status changed)
//so i can decide on how the list looks


// let gap = 16
// //g-xl-4 xl is >=1200px
// if (windowWidth >= 1200){
//     gap*=(1.5+marginError = 0.5)
// }

// const heightInPx = (vh / 100) * windowHeight

// const navBarWidth = useMemo(() => (
//     menuOption.width //px
// ),[menuOption])
// const showFullNav = useMemo(() => (
//     menuOption.show
// ),[menuOption])
// const navPadding = useMemo(() => (
//     menuOption.padding
// ),[menuOption])

/* <NavButton
icon={"box-arrow-left"}
text={"Log out"}
/> */
/* <div className="fixed-bottom p-4">

</div> */

        // <div 
        //     className="collapse collapse-horizontal show" 
        //     id="collapseWidthExample" 
        //     style={{ width: "400px", minHeight: "100vh", backgroundColor: "#2C4096" }}>
        //     <div className="sticky-top p-5" >
        //         a
        //     </div>
        // </div>
        // <div
        //     className=""
        //     id="collapseWidthExample"
        //     style={{ minWidth: "275px", minHeight: "100vh", backgroundColor: "#2C4096" }}>
        //     <NavbarElements show={true}/>
        // </div>

        // const index = applications.findIndex((item) => item.id === id)
        // const updatedApps = () => {
        //     applications[index] = res
        //     return applications
        // }

        // setMyArray(prevState =>
        //     prevState.map(item => (item.id === id ? { ...item, name: newName } : item))
        //   );

        //setApplications(prevApps => ([...prevApps, res]))

        //making sure the status button gets dismounted and everything gets re-rendered (IMPORTANT)
        //because if the button doesn't dismount, it will be stuck because the eventlistener didn't get dismount
        // setApplication(null)
        // setTimeout(() => setApplication(res), 0.01)

        // export function updateInterviewApp ( application ) {

        //     //making sure every app that updated to interviewing gets correct data
        
        //     const tasks = "tasks"
        //     const interviewPreparation = "interviewPreparation"
        
        //     if (application.status === "interviewing") {
        //         if (!application[tasks]) {
        //             application[tasks] = []
        //         }
        //         if (!application[interviewPreparation]) {
        //             application[interviewPreparation] = ""
        //         }
        //     }
        // }