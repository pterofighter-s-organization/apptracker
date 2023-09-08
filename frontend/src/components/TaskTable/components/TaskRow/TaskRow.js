import { Link } from 'react-router-dom';

//components
import { DateTime } from '../../../DateTime'
import { Timer } from '../../../Timer'

//utils
import * as dateTimeUtils from '../../../../utils/dateTimeUtils';


export default function TaskRow({ task, updateTask }) {

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

    function updateArchiveStatus() {
        task.archived = !task.archived
        updateTask(task)
    }

    const paddingTestVal = "0.5vw"
    const rowSharedCSS = "p-2 p-sm-3 border border-light"
    const rowSharedBorder = "border-5"

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

                {/* taskcount. border-start-0 subtracting the starting border from left so it doesnt indent */}
                <th
                    scope="row"
                    className={`${rowSharedCSS} border-5 border-start-0`}
                    style={{ padding: `${paddingTestVal}` }}
                >
                    {task.type && task.type === "expired" ?
                        <i
                            type="button"
                            className="bi bi-stopwatch fs-5"
                            data-bs-toggle="tooltip"
                            data-bs-placement="right"
                            title={"Task expired"}
                        ></i>
                        :
                        <>
                            {task.priority === 0 ?
                                <button
                                    type="button"
                                    className="btn p-0 fs-5"
                                    onClick={(e) => {
                                        e.preventDefault()
                                        updateArchiveStatus()
                                    }}
                                    data-bs-toggle="tooltip"
                                    data-bs-placement="right"
                                    title={(!task.archived) ? "Archived this reminder to archived board" : "Restore this reminder for this app"}
                                >
                                    {!task.archived ?
                                        <i className="bi bi-x-lg"></i>
                                        :
                                        <i className="bi bi-arrow-clockwise"></i>
                                    }
                                </button>
                                :
                                <i
                                    type="button"
                                    data-bs-toggle="tooltip"
                                    data-bs-placement="right"
                                    title="Task urgent"
                                    class="bi bi-alarm fs-5"
                                ></i>
                            }
                        </>
                    }
                </th>
                {/* position and company name */}
                <td
                    className={`${rowSharedCSS} ${rowSharedBorder} text-capitalize`}
                    style={{ padding: `${paddingTestVal}` }}
                >
                    <div>
                        {task.position}
                    </div>
                    {/* text-nowrap ensures that ( ) doesnt get displaced when the text couldnt fit them anymore */}
                    <div className="text-nowrap">
                        {"( " + task.company + " )"}
                    </div>
                </td>

                {/* task title */}
                <td
                    className={`${rowSharedCSS} ${rowSharedBorder}`}
                    style={{ padding: `${paddingTestVal}` }}
                >
                    {task.title}
                </td>

                {/* when the task is due (in MM-DD-YYYY and hh:mm am/pm) */}
                <td
                    className={`d-none d-md-table-cell ${rowSharedCSS} ${rowSharedBorder}`}
                    style={{ padding: `${paddingTestVal}` }}
                >
                    <DateTime dateTime={task.date_due} />
                </td>

                {/* time due in countdown */}
                <td
                    className={`${rowSharedCSS} ${rowSharedBorder}`}
                    style={{ padding: `${paddingTestVal}` }}
                >
                    <Timer
                        start={dateTimeUtils.findTodayUTCDate()}
                        end={task.date_due}
                    />
                </td>

                {/* the link to the details of this task. border-end-0 is subtracting the border padding at the end of the table to prevent indent*/}
                <td className={`${rowSharedCSS} ${rowSharedBorder} border-end-0`}>
                    <Link
                        to={(task.priority === 1) ? "/application/edit/" + task.application_id : "/application/" + task.application_id + "#" + task.section}
                        className={`card-text btn btn-primary px-3 py-2`}
                        style={{ padding: `${paddingTestVal}` }}
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