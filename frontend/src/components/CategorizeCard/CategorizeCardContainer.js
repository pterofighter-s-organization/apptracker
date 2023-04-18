import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom";

export default function CategorizeCardContainer({ statuses }) {

    function convertIntoMap(data) {
        //final decision: look at last nights chat and decide that to be how we deal with frontend updating problem
        //figure out the hierarchy for the application update
        //doesnt always have to use useffect 
        //make sure we delete the app from the status category first
        //add it back when we recieve a response
        //make a timeout to mimic 
    }

    // const [apps, setApps] = useState([]);

    //used to group different apps into different status
    // const groupedApplications = apps.reduce((groups, item) => {
    //     const whatToGroup = "status"
    //     let group = groups[item[whatToGroup]] || [];
    //     group.push(item);
    //     groups[item[whatToGroup]] = group;
    //     return groups;
    // }, {});
    //the {} is the initial value of groups
    //time complexity is O(n)

    //calling the applications from backend
    //later these going to be async

    useEffect(() => {
        // use this array data and make a map
        // const applications = [
        //     {
        //         id: 1,
        //         status: "ghosted",
        //         position: "software engineer",
        //         dateCreated: "2-3-2023",
        //         company: "google",
        //         salary: "60k - 100k",
        //         dateApplied: "2-3-2023",
        //     },
        //     {
        //         id: 2,
        //         status: "interviewing",
        //         position: "web engineer",
        //         dateCreated: "2-5-2023",
        //         company: "google",
        //         salary: "90k - 120k",
        //         dateApplied: "2-1-2023",
        //     },
        //     {
        //         id: 3,
        //         status: "applied",
        //         position: "software engineer",
        //         dateCreated: "2-8-2023",
        //         company: "google",
        //         salary: "80k - 110k",
        //         dateApplied: "2-10-2023",
        //     }
        // ]

        // setApps(applications)
        console.log("test2")
        
    }, [])

    // console.log(groupedApplications)

    //** adding, changing the application */

    //we have to assume there is 1 - n number of categories
    //make a for loop to show them

    //we installing redux so I don't have to pass nested props down to each child container
    //this will be the provider 
    return (
        <>
            
        </>
    )
}