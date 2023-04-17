import { useEffect, useState } from "react"

export default function CategorizeCardContainer( { statuses } ){

    //structure of the card from the basic info given
    // {
    //     status: "applied",
    //     position: "software engineer",
    //     dateCreated: "2-8-2023",
    //     company: "google",
    //     salary: "80k - 110k",
    //     dateApplied: "2-10-2023",
    // }

    const [apps, setApps] = useState([]);

    //calling the applications from backend

    //later these going to be async
    useEffect(() => {
        const applications = [
            {
                id: 1,
                status: "ghosted",
                position: "software engineer",
                dateCreated: "2-3-2023",
                company: "google",
                salary: "60k - 100k",
                dateApplied: "2-3-2023",
            },
            {
                id: 2,
                status: "interviewing",
                position: "web engineer",
                dateCreated: "2-5-2023",
                company: "google",
                salary: "90k - 120k",
                dateApplied: "2-1-2023",
            },
            {
                id: 3,
                status: "applied",
                position: "software engineer",
                dateCreated: "2-8-2023",
                company: "google",
                salary: "80k - 110k",
                dateApplied: "2-10-2023",
            }
        ]
        setApps(applications)
    }, [])

    //we have to assume there is 1 - n number of categories
    //make a for loop to show them
    
    //we installing redux so I don't have to pass nested props down to each child container
    //this will be the provider 
    return(
        <>
        </>
    )
}