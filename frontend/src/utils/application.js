//backend mimic
import { createApp, updateApp } from "../data/mimicBackendStatic";

//utils
import { dateFormat } from "./dateTime/date/date";

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

export function checkIfNeedTask (status) {
    return status === "applied" || status === "interviewing" || status === "accepted"
}

export function createApplication(newAppInfo){

    const today = dateFormat("today")
    const newApplication = {}

    Object.entries(newAppInfo).forEach(([label, data]) => {
        newApplication[label] = data
    })

    newApplication["tasks"] = []
    newApplication["dateEdited"] = today.dateFormatted
    newApplication["dateCreated"] = today.dateFormatted

    return createApp(newApplication)
}

//talks to backend to update app
export function updateAppInfo (application, newAppInfo) {

    const { id } = application
    const today = dateFormat("today")

    //set the app status to the new one (these should not be done here instead in backend as a json)

    //gotta make a new reference so the components gets render again
    // const newApp = {
    //     id: app.id,
    //     position: app.position,
    //     company: app.company,
    //     interviewPreparation: app.interviewPreparation,
    //     resumeLink: "",
    //     coverLetterLink: "",
    //     description: ``,
    //     status: "interviewing",
    //     dateApplied: "2-10-2023 9:30",
    //     dateEdited: "4-29-2023 10:30",
    //     dateCreated: "4-29-2023 10:30",
    //     salary: "70k-120k",
    //     tasks: [
    //         {
    //             title: "zoom interview",
    //             date: "6-25-2023 10:45:00",
    //         },
    //     ],
    //     notes: []
    // }

    const newApplication = {} // a new reference

    //transfering old data to new reference
    Object.entries(application).forEach(([label, _]) => {
        newApplication[label] = application[label]
    })

    //changes the only things needed to change specify on newappinfo
    Object.entries(newAppInfo).forEach(([label, data]) => {
        newApplication[label] = data
    })

    newApplication.dateEdited = today.dateFormatted

    console.log(newApplication)

    //add a history list of when the status was changed *
    //for ex: an array of the (time edited, status updated to)

    //up here is the backend update (code later) PUT THIS TALKING WITH BACKEND CODE TO API.JS (IMPORTANT)
    //mimic backend code (replace later)
    //this is a backend response
    return updateApp(newApplication, id)
}