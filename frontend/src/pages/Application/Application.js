import { useParams } from 'react-router-dom';

//utils
import useApplicationManager from '../../hooks/useApplicationManager';
import { dateFormat } from '../../utils/date';

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

        if(status === "applied"){
            const today = dateFormat("today")
            const newAppInfo = {
                "status": status,
                "dateApplied": today.dateFormatted,
            }
            updateApplication(application, newAppInfo)
        } else {
            const newAppInfo = {
                "status": status
            }
            updateApplication(application, newAppInfo)
        }
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

    function submitAppointment(dateTime, title){

        const appointment = {
            title: title,
            date: dateTime,
        }

        const newAppointments = [...application.appointments, appointment]

        console.log(newAppointments)
        const newAppInfo = {
            "appointments": newAppointments
        }
        updateApplication(application, newAppInfo)
    }

    // console.log(id, application)
    return (
        <>
            {application ?
                <ApplicationPresentation
                    application={application}
                    updateNewStatus={updateNewStatus}
                    submitAppointment={submitAppointment}
                    tasks={tasks}
                />
                :
                <></>
            }
        </>
    )
}