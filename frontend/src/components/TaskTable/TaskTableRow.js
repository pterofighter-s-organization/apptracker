import { Link } from "react-router-dom";

//components
import DateAndTime from "../Date/DateAndTime.js";
import Timer from "../Timer/Timer.js"

//utils
import { textFormat } from "../../utils/text.js";

export default function TaskTableRow ({ task, padding, rowClassNames }) {

    if (!padding) {
        padding = "0.5vw"
    }

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
            <td style={{padding: padding}} className={`${rowClassNames}`}>
                <div>
                    {textFormat(task.position)}
                </div>
                {/* text-nowrap ensures that ( ) doesnt get displaced when the text couldnt fit them anymore */}
                <div className="text-nowrap">
                    {"( " + textFormat(task.company) + " )"}
                </div>
            </td>
            <td style={{padding: padding}} className={`${rowClassNames}`}>
                {textFormat(task.title)}
            </td>
            <td className={`d-none d-sm-table-cell ${rowClassNames}`} style={{padding: padding}}>
                <DateAndTime date={task.timeDue}/>
            </td>
            <td style={{padding: padding}} className={`${rowClassNames}`}>
                <Timer
                    start={"today"}
                    end={task.timeDue}
                />
            </td>
            <td style={{padding: padding}} className={`${rowClassNames}`}>
                <Link to={""} className={`card-text btn btn-primary px-3 py-2`} style={{padding: `${padding}`}}>
                    <div className="">
                        More Details
                    </div>
                </Link>
            </td>
        </>
    )
}