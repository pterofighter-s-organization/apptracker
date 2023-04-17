import { useEffect, useState } from "react"
import CategorizeCardContainer from "../CategorizeCard/CategorizeCardContainer.js"

export default function ApplicationCardContainer({}){

    const [apps, setApps] = useState([]);
    //calling the applications from backend
    useEffect(() => {
        const applications = [
            {
                status: "ghosted",
                position: "software engineer",
                dateCreated: "2-3-2023",
                company: "google",
                salary: "60k - 100k",
                dateApplied: "2-3-2023",
            },
            {
                status: "interviewing",
                position: "web engineer",
                dateCreated: "2-5-2023",
                company: "google",
                salary: "90k - 120k",
                dateApplied: "2-1-2023",
            },
            {
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

    return(
        <>
            <CategorizeCardContainer applications = {apps}/>
        </>
    )
}