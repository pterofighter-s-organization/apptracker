import TaskTableRow from './TaskTableRow.js'

export default function TaskTablePresentation({ displayData }) {

    //never call this file, is just a helper file for tasktable.js
    //layout of the task table

    //col-1 = task number
    //col-2 = app info
    //col-3 = title of the task
    //col-4 = due date (not show on mobile)
    //col-5 = time left
    //col-6 = link button

    let count = 1

    return (
        <>
            <table class="table table-light table-bordered text-center">
                <thead className="">
                    <tr>
                        <th scope="col" className="p-3">#</th>
                        <th scope="col" className="p-3">App</th>
                        <th scope="col" className="p-3">Task to do</th>
                        <th scope="col" className="d-none d-sm-block p-3">Due date</th>
                        <th scope="col" className="p-3">Time</th>
                        <th scope="col" className="p-3">🔗</th>
                    </tr>
                </thead>
                {displayData.length > 0 ?
                    <tbody className="">
                        {displayData.map((task) => (
                            <tr>
                                <th
                                    scope="row"
                                    key={count}
                                >
                                    {count++}
                                </th>
                                <TaskTableRow task={task} />
                            </tr>
                        ))}
                        {/* bottom row for some breathing space */}
                        <tr>
                            {Array.from({ length: 5 }).map(() => (
                                <th></th>
                            ))}
                        </tr>
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
        </>
    )
}