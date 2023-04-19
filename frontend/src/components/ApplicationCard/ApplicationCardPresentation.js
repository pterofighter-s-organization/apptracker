
export default function ApplicationCardPresentation({ appObject, displayData }) {

    const { app, updateAppStatus } = appObject;

    // "id": app["id"],
    // "timeDifference" : "3 days", //edit this later to (current date minus the date created or changed)
    // "status" : app["status"],
    // "color": colorMapToCategory[app["status"]],
    // "position": app["position"],
    // "company": app["company"],
    // "salary": app["salary"],
    // "buttons": buttonsToShow[app["status"]],
    // "link": "",

    //present the following
    //1. (Status, time diff)
    //2. (color)
    //3. (Position, <tab>, Company, <tab>, salary)
    //4. (buttons to change status)
    //5. (the button to the app)

    return (
        <>
            <>
                {/* next time gonna make a universal list that decides the gap (grid) */}
                <h2>
                    {displayData.status}
                    {/* this emsp is temp, gonna replace with gaps in grid */}
                    &emsp; &emsp;
                    {displayData.timeDifference}
                </h2>
            </>
            <>
                <div className="bg-primary">
                    &emsp;
                </div>
            </>
            <>
                <h3>
                    {displayData.position}
                    {/* this emsp is temp, gonna replace with gaps in grid */}
                    &emsp; &emsp;
                    {displayData.company}
                    &emsp; &emsp;
                    {displayData.salary}
                </h3>
            </>
            <>
                {/* buttons onchange */}
            </>
            <>
                {/* this going to be replaced with <Link></Link> */}
                <button>More details</button>
            </>
            <hr />
        </>
    )
}