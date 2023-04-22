import { useEffect, useState } from "react"
import UrgentTaskPresentation from "./UrgentTaskPresentation"

export default function UrgentTaskContainer( { apps } ){

    //make a container that only fetches data
    //so this container pass on the status to take to the list container
    //this container only categorizes the apps //categorizecontainer
    //so the list presentation decides how the list looks not the container
    //maybe can try categorizecontainer only return states
    //categorize container should also have a status change function to update (takes in id and status changed)
    //so i can decide on how the list looks

    const [test, setTest] = useState(apps)

    useEffect(() => {
        console.log("testTask")
    }, [test])
    
    return(
        <>
            <UrgentTaskPresentation/>
        </>
    )
}