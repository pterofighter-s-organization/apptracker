import { useEffect, useState } from "react";

//utils
import { updateAppInfo } from "../utils/application";

//backend mimic
import { getApps } from "../data/mimicBackendStatic";



export default function useApplicationManager(id) {

    const [application, setApplication] = useState(null)
    // const [change, setChange] = useState(0) no need anymore because useref solved my problem

    useEffect(() => {

        let res = null
        try {
            //set loading state here
            res = getApps().filter(app => (app.id === id))[0]

        } catch (err) {
            //remove loading state here
            console.log(err)
        }

        console.log("test")
        //or remove loading here
        setApplication(res)

    }, [id])

    function updateApplication(app, newAppInfo) {

        try{
            setApplication(updateAppInfo(app, newAppInfo))
            return true
        }catch(err){
            console.log(err)
            return false
        }
        // setChange(change ? 0 : 1)
    }

    return {
        application,
        updateApplication
    }
}