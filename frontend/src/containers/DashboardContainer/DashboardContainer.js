import {useEffect, useState} from "react";
import DashboardPresentation from "../../presentations/DashboardPresentation";

export default function DashboardContainer( props ) {

    //instead of calling the backend for data right now, we are going to give sample data
    const [apps, setApps] = useState([]);

    //calling the cards (move this down to applicationcardcontroller) (read whiteboard)
    useEffect(() => {
        const applicationCards = [
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
        setApps(applicationCards)
    }, [])

    return(
        <>
            <h1>Dashboard</h1>
            <DashboardPresentation applications = {apps}></DashboardPresentation>
        </>
    )
}