import { Link } from "react-router-dom";
import { TimerDisplayPresentation } from "../TimeDisplay/TimerDisplayPresentation.js";
import { DateDisplayPresentation } from "../TimeDisplay/DateDisplayPresentation.js"

export default function TaskTablePresentation({ displayData }) {

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

    let count = 1

    return (
        <div className="table-responsive">
            <table class="table text-center">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">App</th>
                        <th scope="col">Task to do</th>
                        <th scope="col" className="d-none d-sm-block">Due date</th>
                        <th scope="col">Time</th>
                        <th scope="col">🔗</th>
                    </tr>
                </thead>
                {displayData.length > 0 ?
                    <tbody>
                        {displayData.map((task) => (
                            <tr>
                                <th 
                                    scope="row" 
                                    key={count} 
                                > 
                                    {count++} 
                                </th>
                                <td>
                                    <div>
                                        {task.position}
                                    </div>
                                    <div>
                                        {"( "+task.company+" )"}
                                    </div>
                                </td>
                                <td>{task.title}</td>
                                <td className="d-none d-sm-table-cell">{task.timeDue}</td>
                                <td>
                                    <TimerDisplayPresentation 
                                        start={Date.now()} 
                                        end={task.timeDue}
                                    />
                                </td>
                                <td>
                                    <Link to={displayData.link} className="card-text btn btn-primary p-2 px-3">
                                        <div className="">
                                            More Details
                                        </div>
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                    :
                    // if theres no applications
                    <tbody>
                        <tr>
                            <th scope="row" key={count} > {count++} </th>
                            <td></td>
                            <td>No interviewing applications at the momment</td>
                        </tr>
                    </tbody>
                }
            </table>
        </div>
    )
}