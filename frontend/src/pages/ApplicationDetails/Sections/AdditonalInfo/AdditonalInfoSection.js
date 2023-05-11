import { useState, useEffect } from "react"

//components
import ApplicationForm from "./components/AppointmentForm"

export default function AdditonalInfoSection({ application, updateApplication }) {

    const status = application.status
    const [appointment, setAppointment] = useState(null)

    const showAppointments = status === "interviewing" || status === "accepted"

    useEffect(() => {
        if (appointment) {
            const newAppointments = [...application.appointments, appointment]
            const newAppInfo = {
                "appointments": newAppointments
            }
            updateApplication(application, newAppInfo)

            //this is to ensure there's no unexpected behaviour such as spam request to backend
            //a little cleanup
            setAppointment(null)
        }
    }, [appointment, application, updateApplication])

    return (
        <div className="d-flex flex-column gap-3">
            <div className="d-flex flex-column gap-0">
                <div className='h2 text-nowrap'>
                    Additional Info :
                </div>
                <hr className='w-100' />
            </div>
            {showAppointments ?
                <ApplicationForm
                    setAppointment={setAppointment}
                />
                :
                <></>
            }
        </div>
    )
}