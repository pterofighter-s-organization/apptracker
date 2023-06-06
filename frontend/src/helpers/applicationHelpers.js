
//utils
import { APP_STATUSES } from "../utils/constants"
import * as dateTimeUtils from "../utils/dateTimeUtils"

export function updateApplicationInfo(updateInfo, application) {

    const newApplication = {} // a new reference
    const today = dateTimeUtils.findTodayUTCDate()

    //transfering old data to new reference
    Object.entries(application).forEach(([label, _]) => {
        newApplication[label] = application[label]
    })

    //changes the only things needed to change specify on newappinfo
    Object.entries(updateInfo).forEach(([label, data]) => {
        newApplication[label] = data
    })

    newApplication.date_edited = today

    return newApplication
}

export function updateInfoForAppliedApp(dateApplied) {

    const today = dateTimeUtils.findTodayUTCDate()

    //if date applied already declared, then dont change. If isn't declared, then make it today
    const updateInfo = {
        "status": "applied",
        "date_applied": (dateApplied && dateApplied.length > 0) ? dateApplied : today,
    }

    return updateInfo
}

export function categorizeApplications(applications, category) {

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
        const statusCategory = APP_STATUSES

        //if those status don't exist just fill it in (temp will change later for different category)
        statusCategory.forEach((status) => {
            if (!categorizedApps.hasOwnProperty(status)) {
                categorizedApps[status] = []
            }
        })
    }

    return categorizedApps
}