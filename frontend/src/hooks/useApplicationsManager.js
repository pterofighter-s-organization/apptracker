import { useState, useEffect } from "react";

//backend mimic
import { getApps } from "../data/mimicBackendStatic";

//utils
import { updateAppInfo } from "../utils/application.js"

export default function useApplicationsManager () {
    
    //custom hook for managing and getting apps

    const [applications, setApplications] = useState([])

    useEffect(() => {

        //change later when backend is done
        let res = []
        try {
            //set loading state here
            res = getApps()
        } catch (err) {
            //remove loading state here
            console.log(err)
        }
        //or remove loading here
        setApplications(res)
    }, [])

    //** adding, changing the application */
    //figure out usecallback
    function updateApplication(app, newAppInfo){

        const res = updateAppInfo(app, newAppInfo)
        //using prev apps access those vals and res is now a new arr with spread operator (dont delete)
        //that has old and new vals, which generatesa new ref to the array
        //to make dependency work, gotta generate a new refence

        setApplications(prevApps => prevApps.map(item => (item.id === res.id ? res : item)))
        // console.log(applications)
    }

    return {
        applications,
        updateApplication
    }
}