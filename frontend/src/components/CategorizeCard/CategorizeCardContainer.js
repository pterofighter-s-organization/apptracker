import { useEffect, useState } from "react"
import { changeApps, getApps } from "../Test/CardTest.js"

export default function CategorizeCardContainer ( category ) {

    //final decision: look at last nights chat and decide that to be how we deal with frontend updating problem
    //figure out the hierarchy for the application update
    //doesnt always have to use useffect 
    //make sure we delete the app from the status category first
    //add it back when we recieve a response
    //make a timeout to mimic 

    const [apps, setApps] = useState([]);
    const [change, setChange] = useState(0);

    //used to group different apps into different status
    //updates whenever apps change
    const categorizedApps = apps.reduce((groups, item) => {
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

        const { id } = app
        const today = new Date(Date.now())
        //set the app status to the new one (these should not be done here instead in backend as a json)
        app.status = newStatus
        //gives 01:15 example format for it-IT
        const timeInHours = today.toLocaleTimeString('it-IT').split(":")
        app.dateEdited = today.toLocaleString('en-US', { timeZone: 'UTC' }).replaceAll(",", "").split(" ")[0] + " " + timeInHours[0] + ":" + timeInHours[1]

        if(newStatus == "interviewing"){
            const appointments = "appointments"
            const interviewPrep = "interviewPrep"
            if(!app.hasOwnProperty(appointments)){
                app[appointments] = []
            }
            if(!app.hasOwnProperty(interviewPrep)){
                app[interviewPrep] = false
            }
        }
        //add a history list of when the status was changed *
        //for ex: an array of the (time edited, status updated to)

        //up here is the backend update (code later)
        //mimic backend code (replace later)
        //this is a backend response
        const res = changeApps(app, id)

        //this is frontend update (modify according to response, should be getting only one app back which is the app changed)
        setApps(res)
        setChange((change ? 0 : 1))
    }

    console.log(categorizedApps)

    return { categorizedApps, updateAppStatus }
}