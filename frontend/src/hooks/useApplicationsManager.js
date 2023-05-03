import { useState, useEffect } from "react";

//backend mimic
import { updateApp, getApps } from "../data/mimicBackendStatic";

//utils
import { dateFormat } from "../utils/date";
import { updateInterviewApp } from "../utils/application.js"

export default function useApplicationsManager () {
    
    //custom hook for managing and getting apps

    const [applications, setApplications] = useState([])

    useEffect(() => {

        //change later when backend is done
        console.log("backend")
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
    function updateApplication (app, newStatus) {

        const { id } = app
        const today = dateFormat("today")

        //set the app status to the new one (these should not be done here instead in backend as a json)
        app.status = newStatus
        app.dateEdited = today.dateFormatted
        //making sure the application fits what an interview app needs
        updateInterviewApp(app)

        //add a history list of when the status was changed *
        //for ex: an array of the (time edited, status updated to)

        //up here is the backend update (code later)
        //mimic backend code (replace later)
        //this is a backend response
        let res = []
        try {
            res = updateApp(app, id)
        } catch (err) {
            console.log(err)
        }

        //using prev apps access those vals and res is now a new arr with spread operator (dont delete)
        //that has old and new vals, which generatesa new ref to the array
        //to make dependency work, gotta generate a new refence
        setApplications(prevApps => ([...prevApps, res]))
    }

    return {
        applications,
        updateApplication
    }
}