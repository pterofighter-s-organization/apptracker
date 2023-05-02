//components
import ApplicationCard from "../Card/ApplicationCard"

//utils
import { sortDates } from "../../utils/date"

export default function ApplicationList({ applications, updateAppStatus }) {

    // const priorities = {
    //     "interviewing" : 0,
    //     "applied" : 1,
    //     "interested" : 2,
    //     "accepted" : 3,
    //     "rejected" : 4,
    //     "ghosted" : 5,
    // }

    //sorts the apps to the most updated one for each status
    Object.entries(applications).forEach((apps) => {
        apps[1].sort((a, b) => {
            //-1 because this method returns the earliest to latest and we need to flip it
            return (-1 * sortDates(a.dateEdited, b.dateEdited))
        })
    })


    //the order of how the applications will be show based on status
    //find a better way to show this * (later)
    return (
        <>
            {applications.interviewing.map((app) => (
                <ApplicationCard
                    key={app.id}
                    application={app}
                    updateAppStatus={updateAppStatus}
                />
            ))}
            {applications.applied.map((app) => (
                <ApplicationCard
                    key={app.id}
                    application={app}
                    updateAppStatus={updateAppStatus}
                />
            ))}
            {applications.accepted.map((app) => (
                <ApplicationCard
                    key={app.id}
                    application={app}
                    updateAppStatus={updateAppStatus}
                />
            ))}
            {applications.interested.map((app) => (
                <ApplicationCard
                    key={app.id}
                    application={app}
                    updateAppStatus={updateAppStatus}
                />
            ))}
            {applications.rejected.map((app) => (
                <ApplicationCard
                    key={app.id}
                    application={app}
                    updateAppStatus={updateAppStatus}
                />
            ))}
            {applications.ghosted.map((app) => (
                <ApplicationCard
                    key={app.id}
                    application={app}
                    updateAppStatus={updateAppStatus}
                />
            ))}
        </>
    )

}