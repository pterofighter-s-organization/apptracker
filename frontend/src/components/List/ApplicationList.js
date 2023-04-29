import ApplicationCard from "../Card/ApplicationCard"

export default function ApplicationList ({applications, updateAppStatus}) {

    // const priorities = {
    //     "interviewing" : 0,
    //     "applied" : 1,
    //     "interested" : 2,
    //     "accepted" : 3,
    //     "rejected" : 4,
    //     "ghosted" : 5,
    // }

    return (
        <>
            {applications.interviewing.map((app) => (
                <ApplicationCard 
                    application={app}
                    updateAppStatus={updateAppStatus}  
                />
            ))}
            {applications.applied.map((app) => (
                <ApplicationCard 
                    application={app}
                    updateAppStatus={updateAppStatus}  
                />
            ))}
            {applications.accepted.map((app) => (
                <ApplicationCard 
                    application={app}
                    updateAppStatus={updateAppStatus}  
                />
            ))}
            {applications.interested.map((app) => (
                <ApplicationCard 
                    application={app}
                    updateAppStatus={updateAppStatus}  
                />
            ))}
            {applications.rejected.map((app) => (
                <ApplicationCard 
                    application={app}
                    updateAppStatus={updateAppStatus}  
                />
            ))}
            {applications.ghosted.map((app) => (
                <ApplicationCard 
                    application={app}
                    updateAppStatus={updateAppStatus}  
                />
            ))}
        </>
    )

}