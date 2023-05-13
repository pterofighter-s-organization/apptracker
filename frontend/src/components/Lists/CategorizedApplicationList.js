import { useMemo } from "react"

//components
import ApplicationCard from "../ApplicationCard/ApplicationCard.js"

//utils
import { sortDates } from "../../utils/date.js"
import { categorizeApplications } from "../../utils/application.js"

export default function CategorizedApplicationList({ applications, updateApplication }) {

    // const priorities = {
    //     "interviewing" : 0,
    //     "applied" : 1,
    //     "interested" : 2,
    //     "accepted" : 3,
    //     "rejected" : 4,
    //     "ghosted" : 5,
    // }

    //categorize applications before displaying
    const categorizedApps = useMemo(() => (
        categorizeApplications(applications, "status")
    ), [applications])

    //sorts the apps to the most updated one for each status
    Object.entries(categorizedApps).forEach((apps) => {
        apps[1].sort((a, b) => {
            //-1 because this method returns the earliest to latest and we need to flip it
            return (-1 * sortDates(a.dateEdited, b.dateEdited))
        })
    })


    //the order of how the applications will be show based on status
    //find a better way to show this * (later)
    return (
        <>
            {categorizedApps.interviewing.map((app) => (
                <ApplicationCard
                    key={app.id}
                    application={app}
                    updateApplication={updateApplication}
                />
            ))}
            {categorizedApps.applied.map((app) => (
                <ApplicationCard
                    key={app.id}
                    application={app}
                    updateApplication={updateApplication}
                />
            ))}
            {categorizedApps.accepted.map((app) => (
                <ApplicationCard
                    key={app.id}
                    application={app}
                    updateApplication={updateApplication}
                />
            ))}
            {categorizedApps.interested.map((app) => (
                <ApplicationCard
                    key={app.id}
                    application={app}
                    updateApplication={updateApplication}
                />
            ))}
            {categorizedApps.rejected.map((app) => (
                <ApplicationCard
                    key={app.id}
                    application={app}
                    updateApplication={updateApplication}
                />
            ))}
            {categorizedApps.ghosted.map((app) => (
                <ApplicationCard
                    key={app.id}
                    application={app}
                    updateApplication={updateApplication}
                />
            ))}
        </>
    )

}