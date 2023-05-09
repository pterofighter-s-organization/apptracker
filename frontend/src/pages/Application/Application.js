import { useParams } from 'react-router-dom';

//utils
import useApplicationManager from '../../hooks/useApplicationManager';

import ApplicationPresentation from './ApplicationPresentation';
import { useMemo } from 'react';
import { findTasksOnApp } from '../../utils/task';

export default function Application() {

    const { id } = useParams();
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