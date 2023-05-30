import { Link } from 'react-router-dom';

//components
import { DateTime } from '../../../DateTime'
import { Timer } from '../../../Timer'

//utils
import * as formatters from '../../../../utils/formatters';
import * as dateTimeUtils from '../../../../utils/dateTimeUtils';


export default function TaskRow({ count, task }) {

    const colorsMapPriority = {
        0: {
            color: "danger-subtle",
            textColor: "dark",
            opacity: "100",
        },
        1: {
            color: "warning-subtle",
            textColor: "dark",
            opacity: "100",
        },
    }

    const rowPadding = "0.5vw"
    const rowClassNames = "p-2 p-sm-3 border border-5 border-light"

    return (
        <>
            <tr
                className={
                    `bg-${colorsMapPriority[task.priority].color} 
                    text-${colorsMapPriority[task.priority].textColor} 
                    bg-opacity-${colorsMapPriority[task.priority].opacity}`
                }
                key={task.task_id}
            >

                {/* taskcount */}
                <th
                    scope="row"
                    className={`${rowClassNames}`}
                    style={{ padding: `${rowPadding}` }}
                >
                    {count}
                </th>
                {/* position and company name */}
                <td
                    className={`${rowClassNames}`}
                    style={{ padding: `${rowPadding}` }}
                >
                    <div>
                        {formatters.textFormatter(task.position)}
                    </div>
                    {/* text-nowrap ensures that ( ) doesnt get displaced when the text couldnt fit them anymore */}
                    <div className="text-nowrap">
                        {"( " + formatters.textFormatter(task.company) + " )"}
                    </div>
                </td>

                {/* task title */}
                <td
                    className={`${rowClassNames}`}
                    style={{ padding: `${rowPadding}` }}
                >
                    {task.title}
                </td>

                {/* when the task is due (in MM-DD-YYYY and hh:mm am/pm) */}
                <td
                    className={`d-none d-md-table-cell ${rowClassNames}`}
                    style={{ padding: `${rowPadding}` }}
                >
                    <DateTime dateTime={task.date_due} />
                </td>

                {/* time due in countdown */}
                <td
                    className={`${rowClassNames}`}
                    style={{ padding: `${rowPadding}` }}
                >
                    <Timer
                        start={dateTimeUtils.findTodayDate()}
                        end={task.date_due}
                    />
                </td>

                {/* the link to the details of this task */}
                <td className={`${rowClassNames}`}>
                    <Link
                        to={"/application/" + task.application_id + "#" + task.section}
                        className={`card-text btn btn-primary px-3 py-2`}
                        style={{ padding: `${rowPadding}` }}
                    >
                        <div className="">
                            More Details
                        </div>
                    </Link>
                </td>

            </tr>
        </>
    )
}