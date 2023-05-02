
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
        if (!application.hasOwnProperty(appointments)) {
            application[appointments] = []
        }
        if (!application.hasOwnProperty(interviewPrep)) {
            application[interviewPrep] = false
        }
    }
}