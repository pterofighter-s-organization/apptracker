import { Link } from "react-router-dom"

//utils
import { textFormat } from "../../../../utils/text"

//components
import DateAndTime from "../../../Date/DateAndTime"
import Timer from "../../../Timer/Timer"

export default function TaskTableBody({ tasks }) {

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

    let count = 0
    const rowPadding = "0.5vw"
    const rowClassNames = "p-2 p-sm-3 border border-5 border-light"

    return (
        <tbody className="">
            {tasks.map((task) => {
                count += 1
                return (
                    <tr
                        className={
                            `bg-${colorsMapPriority[task.priority].color} 
                                text-${colorsMapPriority[task.priority].textColor} 
                                bg-opacity-${colorsMapPriority[task.priority].opacity}`
                        }
                        key={count}
                        id={task.title}
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
                                {textFormat(task.position)}
                            </div>
                            {/* text-nowrap ensures that ( ) doesnt get displaced when the text couldnt fit them anymore */}
                            <div className="text-nowrap">
                                {"( " + textFormat(task.company) + " )"}
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
                            <DateAndTime date={task.timeDue} />
                        </td>

                        {/* time due in countdown */}
                        <td
                            className={`${rowClassNames}`}
                            style={{ padding: `${rowPadding}` }}
                        >
                            <Timer
                                start={"today"}
                                end={task.timeDue}
                            />
                        </td>

                        {/* the link to the details of this task */}
                        <td className={`${rowClassNames}`}>
                            <Link
                                to={"/application/" + task.id + "#" + task.type}
                                className={`card-text btn btn-primary px-3 py-2`}
                                style={{ padding: `${rowPadding}` }}
                            >
                                <div className="">
                                    More Details
                                </div>
                            </Link>
                        </td>

                    </tr>
                )
            })}
            {tasks.length <= 0 ?
                <tr>
                    <th
                        scope="row"
                        key={count}
                    >
                        {count += 1}
                    </th>
                    <td></td>
                    <td>No tasks at the momment, you can try to track more apps</td>
                </tr>
                :
                <></>
            }
        </tbody>
    )
}