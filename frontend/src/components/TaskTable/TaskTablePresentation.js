import TaskDetailsPresentation from "./TaskDetailsPresentation.js";

export default function TaskTablePresentation({ displayData }) {

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
            <table class="table table-bordered text-center">
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
                                <TaskDetailsPresentation task = {task}/>
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
        </>
    )
}