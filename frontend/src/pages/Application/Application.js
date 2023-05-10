import { useParams } from 'react-router-dom';

//utils
import useApplicationManager from '../../hooks/useApplicationManager';

import ApplicationPresentation from './ApplicationPresentation';
import { useMemo } from 'react';
import { findTasksOnApp } from '../../utils/task';
import useLocationManager from '../../hooks/useLocationManager';

export default function Application() {

    const { id } = useParams();
    
    //helps me locate the user to a specific section id
    useLocationManager()

    const { application, updateApplication } = useApplicationManager(parseInt(id))

    function updateNewStatus(status) {
        const newAppInfo = {
            "status": status
        }
        updateApplication(application, newAppInfo)
    }

    const tasks = useMemo(() => {
        if(application){
            if(application.status === "interviewing"){
                return findTasksOnApp(application)
            }
            return []
        }
        return null
    }, [application])

    // console.log(id, application)
    return (
        <>
            {application ?
                <ApplicationPresentation
                    application={application}
                    updateNewStatus={updateNewStatus}
                    tasks={tasks}
                />
                :
                <></>
            }
        </>
    )
}