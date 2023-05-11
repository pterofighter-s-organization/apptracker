import { useMemo, useState, useEffect } from "react";

//components
import TaskTableInfo from "./components/TaskTableInfo";
import TaskForm from "../../../../components/TaskForm/TaskForm"

//utils
import { findTasksOnApp } from '../../../../utils/task';

export default function TaskInfoSection({ application, updateApplication }) {

    //change this to tasks
    const [appointment, setAppointment] = useState(null)

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

    const tasks = useMemo(() => {
        if (application) {
            if (application.status === "interviewing") {
                return findTasksOnApp(application)
            }
            return []
        }
        return null
    }, [application])

    return (
        <div className="d-flex flex-column gap-3" id="appointments">
            <div className="d-flex flex-column gap-0">
                <div className='h2 text-nowrap'>
                    Application Tasks :
                </div>
                <hr className='w-100' />
            </div>
            <TaskTableInfo
                tasks={tasks}
            />
            <TaskForm
                setTask={setAppointment}
                fontSize={"fs-5"}
            />
        </div>
    )
}