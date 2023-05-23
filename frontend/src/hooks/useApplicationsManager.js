import { useState, useEffect } from "react";
import axios from "axios";

//backend mimic
import { getApps } from "../data/mimicBackendStatic";


import { dateFormat } from "../utils/dateTime/date/date";

//utils
import { updateAppInfo } from "../utils/application.js"

export default function useApplicationsManager() {

    //custom hook for managing and getting apps

    const [applications, setApplications] = useState([])

    useEffect(() => {

        //change later when backend is done
        // try {
        //     //set loading state here
        //     // res = getApps()

        //     axios.get("http://localhost:8000/api/application").then(response => {
        //         res = response.data
        //     }).catch(error => {
        //         console.log(error)
        //     })

        // } catch (err) {
        //     //remove loading state here
        //     console.log(err)
        // }

        axios.get("http://localhost:8000/api/application").then(response => {
            console.log(response.data)
            const res = response.data
            setApplications(res)
        }).catch(error => {
            console.log(error)
            setApplications([])
        })
        //or remove loading here
    }, [])

    //** adding, changing the application */
    //figure out usecallback
    async function updateApplication(app, newAppInfo) {

        // const res = updateAppInfo(app, newAppInfo)

        const { application_id } = app
        const today = dateFormat("today")
        const newApplication = {} // a new reference

        //transfering old data to new reference
        Object.entries(app).forEach(([label, _]) => {
            newApplication[label] = app[label]
        })

        //changes the only things needed to change specify on newappinfo
        Object.entries(newAppInfo).forEach(([label, data]) => {
            newApplication[label] = data
        })

        newApplication.date_edited = today.dateFormatted
        newApplication.application_id = application_id

        // console.log(app, newAppInfo, newApplication, application_id)
        //using prev apps access those vals and res is now a new arr with spread operator (dont delete)
        //that has old and new vals, which generatesa new ref to the array
        //to make dependency work, gotta generate a new refence

        const res = newApplication

        // const options = {
        //     method: "PUT",
        //     url: "http://localhost:8000/api/application/1/",
        //     headers: { "Content-Type": "application/json" },
        //     data: {
        //         "user_id": 1,
        //         "position": "Java Develope1",
        //         "company": "Oracle",
        //         "interview_preparation": "link/to/prep",
        //         "resume_link": "link/to/resume",
        //         "cover_letter_link": "link/to/coverletter",
        //         "description": "Test",
        //         "status": "interviewing",
        //         "date_applied": "5-09-2023 03:05:00",
        //         "date_edited": "5-19-2023 08:05:00",
        //         "date_created": "4-31-2023 09:25:00",
        //         "salary": "100-150k"
        //     }
        // };

        // axios
        //     .request(options)
        //     .then(function (response) {
        //         alert(response.data);
        //     })
        //     .catch(function (error) {
        //         console.error(error);
        //     });

        // axios.put("http://127.0.0.1:8000/api/application/"+res.application_id, res)
        //     .then(response => {
        //         // Handle the response
        //         console.log('Item updated successfully:', response.data);
        //         setApplications(prevApps => prevApps.map(item => (item.application_id == response.data.application_id ? response.data : item)))
        //     })
        //     .catch(error => {
        //         // Handle any errors
        //         console.error('Error updating item:', error);        
        //     });

        try{
            const test = applications
            setApplications(null)
            const response = await axios.put("http://127.0.0.1:8000/api/application/"+res.application_id, res)
            console.log("Item updated successfully", response.data);
            setApplications(applications.map(item => (item.application_id === response.data.application_id ? response.data : item)))
        }catch(error){
            console.log("Error updating item:", error);
        } //this help solve the infinite loop

        
        // axios.put("http://127.0.0.1:8000/api/application/3", {
        //     "user_id": 1,
        //     "position": "Java Develope1",
        //     "company": "Oracle",
        //     "interview_preparation": "link/to/prep",
        //     "resume_link": "link/to/resume",
        //     "cover_letter_link": "link/to/coverletter",
        //     "description": "Test",
        //     "status": "interviewing",
        //     "date_applied": "5-09-2023 03:05:00",
        //     "date_edited": "5-19-2023 08:05:00",
        //     "date_created": "4-31-2023 09:25:00",
        //     "salary": "100-150k"
        // })
        //     .then(response => {
        //         // Handle the response
        //         console.log('Item updated successfully:', response.data);
        //     })
        //     .catch(error => {
        //         // Handle any errors
        //         console.error('Error updating item:', error);
        //     });
        // setApplications(prevApps => prevApps.map(item => (item.id === res.id ? res : item)))
        // console.log(applications)
    }

    return {
        applications,
        updateApplication
    }
}