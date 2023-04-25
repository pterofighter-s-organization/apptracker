import { Link } from "react-router-dom";

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
        <>
            <table class="table text-center">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Position</th>
                        <th scope="col">Company</th>
                        <th scope="col">Task to do</th>
                        <th scope="col">Due date</th>
                        <th scope="col">Time Left</th>
                        <th scope="col">🔗</th>
                    </tr>
                </thead>
                {displayData.length > 0 ?
                    <tbody>
                        {displayData.map((task) => (
                            <tr>
                                <th scope="row" key={count} > {count++} </th>
                                <td>{task.position}</td>
                                <td>{task.company}</td>
                                <td>{task.title}</td>
                                <td>{task.timeDue}</td>
                                <td>{task.timeDiff.daysLeft} days left </td>
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
        </>
    )
}