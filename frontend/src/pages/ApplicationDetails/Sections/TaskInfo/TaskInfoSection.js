import { useMemo } from "react";

//components
import TaskTableInfo from "./components/TaskTableInfo";

//utils
import { findTasksOnApp } from '../../../../utils/task';

export default function TaskInfoSection({ application }) {

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
        </div>
    )
}