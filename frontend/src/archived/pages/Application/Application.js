import { useMemo, useEffect } from 'react';
import { useParams } from 'react-router-dom';

//hooks
import useApplicationManager from '../../hooks/useApplicationManager';

//utils
import { dateFormat } from '../../utils/date';
import { findTasksOnApp } from '../../utils/task';

//components
import ApplicationPresentation from './ApplicationPresentation';
import useLocationManager from '../../hooks/useLocationManager';

export default function Application() {

    //clean out the code in this file and every other sub file that branches off this

    const { id } = useParams();

    //helps me locate the user to a specific section id
    useLocationManager()

    const { application, updateApplication } = useApplicationManager(parseInt(id))

    useEffect(() => {
        document.title = 'Application ' + id + ' - Job Tracker App';
        return () => document.title = 'Job Tracker App';
    }, [id])

    function updateNewStatus(status) {

        if(status === "applied" && application.status === "interested"){
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
        if (application) {
            if (application.status === "interviewing") {
                return findTasksOnApp(application)
            }
            return []
        }
        return null
    }, [application])

    function submitAppointment(dateTime, title) {

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