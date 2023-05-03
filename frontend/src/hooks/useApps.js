import { useEffect, useState } from "react"
import { getApps } from "../data/mimicBackendStatic.js"

export default function useApps () {

    const [apps, setApps] = useState([]);
    //categorize applications before displaying

    useEffect(() => {

        //change later when backend is done
        let applications = []
        try {
            //set loading state here
            applications = getApps()
        } catch (err) {
            //remove loading state here
            console.log(err)
        }
        //or remove loading here

        setApps(applications)
    }, [])

    return [apps, setApps]
}

