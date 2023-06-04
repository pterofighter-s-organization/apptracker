import { useMemo, useState, useEffect } from "react";

//components
import ApplicationTasks from "./components/ApplicationTasks/ApplicationTasks";
import TaskForm from "./components/TaskForm/TaskForm";

//utils
import { findTasksOnApp } from '../../../../utils/task';

export default function TasksInfoSection({ application, updateApplication }) {

    //change this to tasks
    const [task, setTask] = useState(null)
    const [showSuccessModal, setShowSuccessModal] = useState(false)

    useEffect(() => {
        if (task) {
            const newTask = [...application.tasks, task]
            const newAppInfo = {
                "tasks": newTask
            }

            setShowSuccessModal(updateApplication(application, newAppInfo))

            //this is to ensure there's no unexpected behaviour such as spam request to backend
            //a little cleanup
            setTask(null)
        }
    }, [task, application, updateApplication])

    const tasks = useMemo(() => {
        if (application) {
            return findTasksOnApp(application)
        }
        return null
    }, [application])

    function closeModal() {
        setTimeout(() => {
            setShowSuccessModal(false)
        }, 200)
    }

    return (
        <div className="d-flex flex-column gap-3" id="tasks">
            <div className="d-flex flex-column gap-0">
                <div className='h3 text-nowrap'>
                    Application Tasks :
                </div>
                <hr className='w-100' />
            </div>
            <ApplicationTasks
                tasks={tasks}
            />
            <TaskForm
                setTask={setTask}
                fontSize={"fs-6"}
                closeModal={closeModal}
                showSuccessModal={showSuccessModal}
            />
        </div>
    )
}