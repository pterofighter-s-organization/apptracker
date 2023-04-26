import { Link } from "react-router-dom";
import DateDisplayPresentation from "../TimeDisplay/DateDisplayPresentation.js";
import { TimerDisplayPresentation } from "../TimeDisplay/TimerDisplayPresentation.js"

export default function TaskPresentation ( {task} ) {

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
    //     timeDue: appointment.date,
    // }
    
    return (
        <>
            <td>
                <div>
                    {task.position}
                </div>
                {/* text-nowrap ensures that ( ) doesnt get displaced when the text couldnt fit them anymore */}
                <div className="text-nowrap">
                    {"( " + task.company + " )"}
                </div>
            </td>
            <td>{task.title}</td>
            <td className="d-none d-sm-table-cell">
                <DateDisplayPresentation date={task.timeDue}/>
            </td>
            <td>
                <TimerDisplayPresentation
                    start={Date.now()}
                    end={task.timeDue}
                />
            </td>
            <td>
                <Link to={""} className="card-text btn btn-primary p-2 px-3">
                    <div className="">
                        More Details
                    </div>
                </Link>
            </td>
        </>
    )
}