import { Link } from "react-router-dom";
import TimeDisplayContainer from "../TimeDisplay/TimeDisplayContainer.js"
import { TimerDisplayPresentation } from "../TimeDisplay/TimerDisplayPresentation.js";

export default function UrgentTaskPresentation({ displayData }) {
    //temp navbar for testing purposes
    //col-1 = task number
    //col-2 = task type
    //col-3 = actual date
    //col-4 = days left
    //col-5 = link button

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
                        <th scope="col" className="d-none d-sm-block">App Info</th>
                        <th scope="col">Task to do</th>
                        <th scope="col" >Due date</th>
                        <th scope="col">Time</th>
                        <th scope="col">🔗</th>
                    </tr>
                </thead>
                {displayData.length > 0 ?
                    <tbody>
                        {displayData.map((task) => (
                            <tr>
                                <th scope="row" key={count} > {count++} </th>
                                <td className="d-flex flex-wrap justify-content-center gap-1 gap-lg-3">
                                    <div className="">
                                        {task.position}
                                    </div>
                                    <div className="">
                                        {"("+task.company+")"}
                                    </div>
                                </td>
                                <td>{task.title}</td>
                                <td className="d-none d-sm-table-cell">{task.timeDue}</td>
                                <td>
                                    <TimerDisplayPresentation timeDiff={task.timeDiff} />
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
                    <tbody>
                        <tr>
                            <th scope="row" key={count} > {count++} </th>
                            <td></td>
                            <td></td>
                            <td>No interviewing applications at the momment</td>
                            <td></td>
                            <td></td>
                        </tr>
                    </tbody>
                }
            </table>
        </div>
    )
}