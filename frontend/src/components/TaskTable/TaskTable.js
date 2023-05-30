//components
import { TaskRow } from "./components"

//utils
import * as taskUtils from "../../utils/taskUtils"

export default function TaskTable({ tasks }) {

    //find the priority of the task and sort them
    tasks.sort((a, b) => {
        return taskUtils.findPrioritizedTask(a, b)
    })

    const relevantTasks = taskUtils.findRelevantTasks(tasks)

    //styles
    const headerPadding = "p-4"
    let count = 1

    return (
        <table className={`table text-center`} >

            <thead className={`bg-secondary bg-opacity-25 border-light border-5 ${headerPadding}`}>
                <tr>
                    <th scope="col" className={`${headerPadding}`}>#</th>
                    <th scope="col" className={`${headerPadding}`}>App</th>
                    <th scope="col" className={`${headerPadding}`}>Task</th>
                    <th scope="col" className={`d-none d-md-block ${headerPadding}`}>Due date</th>
                    <th scope="col" className={`${headerPadding}`}>Time</th>
                    <th scope="col" className={`${headerPadding}`}>🔗</th>
                </tr>
            </thead>

            <tbody>
                {relevantTasks.map((task) => {
                    return (
                        <TaskRow
                            task={task}
                            count={count++}
                        />
                    )
                })}
                {relevantTasks.length <= 0 ?
                    <tr>
                        <th
                            scope="row"
                            key={count++}
                        >
                            {count++}
                        </th>
                        <td></td>
                        <td>No tasks found!</td>
                    </tr>
                    :
                    <></>
                }
            </tbody>

        </table>
    )
}