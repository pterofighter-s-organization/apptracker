//components
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

    const colorsMapPriority = {
        0: {
            color: "dark-subtle",
            textColor: "dark",
            opacity: "100",
        },
        1: {
            color: "body-tertiary",
            textColor: "dark",
            opacity: "100",
        },
    }

    let count = 1
    // const borderWidth = "border-bottom"
    const headerPadding = "p-4"
    const rowPadding = "0.5vw"
    const rowClassNames = "p-2 p-sm-3 border border-5 border-light"
    // const footerPadding = "p-sm-2"

    return (
        <>
            <table className="table text-center ">
                <thead className={`${headerPadding} bg-secondary bg-opacity-25 border-light border-5`} style={{}}>
                    <tr>
                        <th scope="col" className={`${headerPadding}`}>#</th>
                        <th scope="col" className={`${headerPadding}`}>App</th>
                        <th scope="col" className={`${headerPadding}`}>Task</th>
                        <th scope="col" className={`d-none d-sm-block ${headerPadding}`}>Due date</th>
                        <th scope="col" className={`${headerPadding}`}>Time</th>
                        <th scope="col" className={`${headerPadding}`}>🔗</th>
                    </tr>
                </thead>
                {displayData.length > 0 ?
                    <tbody className="">
                        {displayData.map((task) => (
                            <tr
                                className={`bg-${colorsMapPriority[task.priority].color} text-${colorsMapPriority[task.priority].textColor} bg-opacity-${colorsMapPriority[task.priority].opacity}`}
                                key={count}
                            >
                                <th
                                    scope="row"
                                    style={{ padding: rowPadding }}
                                    className={`${rowClassNames}`}
                                >
                                    {count++}
                                </th>
                                <TaskTableRow
                                    task={task}
                                    padding={rowPadding}
                                    rowClassNames={rowClassNames}
                                />
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
                {/* bottom row for some breathing space */}
                {/* <tfoot>
                    <tr>
                        {Array.from({ length: 6 }).map(() => (
                            <th className={`${footerPadding}`}></th>
                        ))}
                    </tr>
                </tfoot> */}
            </table>
        </>
    )
}