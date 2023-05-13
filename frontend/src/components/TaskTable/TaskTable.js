import { findPrioritizedTask } from "../../utils/task";

//components
import TaskTableBody from "./components/Body/TaskTableBody";
import TaskTableHeader from "./components/Header/TaskTableHeader";

export default function TaskTable({ tasks }) {

    //find the priority of the task and sort them
    tasks.sort((a, b) => {
        return findPrioritizedTask(a, b)
    })

    //Task details 

    //col-1 = task number
    //col-2 = app info
    //col-3 = title of the task
    //col-4 = due date (not show on mobile)
    //col-5 = time left
    //col-6 = link button

    // {
    //     appId: id,
    //     priority: 0,
    //     title: appointment.title,
    //     date: appointment.date,
    //     type: appointment.type
    //     timeDue: appointment.date,
    // }

    return (
        <>
            {tasks ?
                <table className="table text-center">
                    <TaskTableHeader />
                    <TaskTableBody
                        tasks={tasks}
                    />
                    {/* bottom row for some breathing space */}
                    {/* <tfoot>
                    <tr>
                        {Array.from({ length: 6 }).map(() => (
                            <th className={`${footerPadding}`}></th>
                        ))}
                    </tr>
                </tfoot> */}
                </table>
                :
                <h1>
                    Loading...
                </h1>
            }
        </>
    )
}