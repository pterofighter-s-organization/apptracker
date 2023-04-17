import { useEffect, useState } from "react"

export default function CategorizeCardContainer({ statuses }) {

    //structure of the card from the basic info given
    // {
    //     status: "applied",
    //     position: "software engineer",
    //     dateCreated: "2-8-2023",
    //     company: "google",
    //     salary: "80k - 110k",
    //     dateApplied: "2-10-2023",
    // }


    function convertIntoMap () {
        //final decision: look at last nights chat and decide that to be how we deal with frontend updating problem
        //figure out the hierarchy for the application update
        //doesnt always have to use useffect 
        //make sure we delete the app from the status category first
        //add it back when we recieve a response
        //make a timeout to mimic 
    }

    const [apps, setApps] = useState(new Map([]));

    //calling the applications from backend

    //later these going to be async
    useEffect(() => {
        //use this array data and make a map
        const applications = [
            {
                id: 1,
                values: {
                    status: "ghosted",
                    position: "software engineer",
                    dateCreated: "2-3-2023",
                    company: "google",
                    salary: "60k - 100k",
                    dateApplied: "2-3-2023",
                }
            },
            {
                id: 2,
                values: {
                    status: "interviewing",
                    position: "web engineer",
                    dateCreated: "2-5-2023",
                    company: "google",
                    salary: "90k - 120k",
                    dateApplied: "2-1-2023",
                }
            },
            {
                id: 3,
                values: {
                    status: "applied",
                    position: "software engineer",
                    dateCreated: "2-8-2023",
                    company: "google",
                    salary: "80k - 110k",
                    dateApplied: "2-10-2023",
                }
            }
        ]
        
    }, [])


    //** this going to be where the filter function is */
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