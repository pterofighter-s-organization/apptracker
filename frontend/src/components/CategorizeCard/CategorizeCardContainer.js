import { useEffect, useState } from "react"
import { changeApps, getApps } from "../test.js"

export default function CategorizeCardContainer ( category ) {

    //final decision: look at last nights chat and decide that to be how we deal with frontend updating problem
    //figure out the hierarchy for the application update
    //doesnt always have to use useffect 
    //make sure we delete the app from the status category first
    //add it back when we recieve a response
    //make a timeout to mimic 

    const [apps, setApps] = useState([]);

    //used to group different apps into different status
    //updates whenever apps change
    const groupedApplications = apps.reduce((groups, item) => {
        let group = groups[item[category]] || [];
        group.push(item);
        groups[item[category]] = group;
        return groups;
    }, {});
    //the {} is the initial value of groups
    //time complexity is O(n)

    useEffect(() => {
        //calling the applications from backend
        //later these going to be async
        //mimic code for backend
        const applications = getApps()

        //this is correct, because we need to call backend again everytime we change pages
        setApps(applications)
    }, [])

    //** adding, changing the application */
    function updateAppStatus(app, newStatus) {

        const { id, status } = app
        //set the app status to the new one
        app["status"] = newStatus

        //up here is the backend update (code later)
        //mimic backend code (replace later)
        //this is a backend response
        changeApps(app, id)

        //this is frontend update
        setApps( (prevApps) => {
            const index = prevApps.findIndex((item) => item.id === id)
            prevApps[index] = app
            return prevApps
        })
    }

    console.log(groupedApplications)

    return { groupedApplications, updateAppStatus }
}