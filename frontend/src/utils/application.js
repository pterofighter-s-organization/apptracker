//backend mimic
import { updateApp } from "../data/mimicBackendStatic";

//utils
import { dateFormat } from "../utils/date";

export function categorizeApplications (applications, category) {

    //input: apps, and the category I am categorizing this in
    //return categorized apps {category: [n]}

    const categorizedApps = applications.reduce((groups, item) => {
        let group = groups[item[category]] || [];
        group.push(item);
        groups[item[category]] = group;
        return groups;
    }, {});
    //{} is the inital value for groups

    //temp (will change later and add a constant file)
    if (category === "status") {
        //now check if all the categories exist for that
        const statusCategory = ["applied", "interviewing", "ghosted", "interested", "rejected", "accepted"]

        //if those status don't exist just fill it in (temp will change later for different category)
        statusCategory.forEach((status) => {
            if (!categorizedApps.hasOwnProperty(status)) {
                categorizedApps[status] = []
            }
        })
    }

    return categorizedApps
}

export function updateInterviewApp ( application ) {

    //making sure every app that updated to interviewing gets correct data

    const appointments = "appointments"
    const interviewPrep = "interviewPrep"

    if (application.status === "interviewing") {
        if (!application[appointments]) {
            application[appointments] = []
        }
        if (!application[interviewPrep]) {
            application[interviewPrep] = false
        }
    }
}

export function updateAppInfo (app, newAppInfo) {

    const { id } = app
    const today = dateFormat("today")

    //set the app status to the new one (these should not be done here instead in backend as a json)

    //gotta make a new reference so the components gets render again
    const newApp = {
        id: app.id,
        status: app.status,
        position: app.position,
        dateCreated: app.dateCreated,
        company: app.company,
        salary: app.salary,
        dateEdited: app.dateEdited,
        appointments: app.appointments,
        interviewPrep: app.interviewPrep,
    }

    //changes the only things needed to change specify on newappinfo
    Object.entries(newAppInfo).forEach(([label, data]) => {
        newApp[label] = data
    })

    newApp.dateEdited = today.dateFormatted

    //making sure the application fits what an interview app needs
    updateInterviewApp(newApp)

    //add a history list of when the status was changed *
    //for ex: an array of the (time edited, status updated to)

    //up here is the backend update (code later)
    //mimic backend code (replace later)
    //this is a backend response
    let res = null
    try {
        res = updateApp(newApp, id)
    } catch (err) {
        console.log(err)
        alert(err)
    }

    console.log(res)
    return res
}