import { useEffect, useState } from "react";

//utils
import { updateAppInfo } from "../utils/application";

//backend mimic
import { getApps } from "../data/mimicBackendStatic";



export default function useApplicationManager(id) {

    const [application, setApplication] = useState(null)
    // const [change, setChange] = useState(0)

    useEffect(() => {

        let res = null
        try {
            //set loading state here
            res = getApps().filter(app => (app.id === id))[0]

        } catch (err) {
            //remove loading state here
            console.log(err)
        }
        //or remove loading here
        setApplication(res)

    }, [id])

    function updateApplication(app, newAppInfo) {

        const res = updateAppInfo(app, newAppInfo)

        //making sure the status button gets dismounted and everything gets re-rendered (IMPORTANT)
        //because if the button doesn't dismount, it will be stuck because the eventlistener didn't get dismount
        setApplication(null)
        setTimeout(() => setApplication(res), 0.01)
        // setChange(change ? 0 : 1)
    }

    return {
        application,
        updateApplication
    }
}