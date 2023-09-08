//components
import { TaskRow } from "./components"

//helpers
import * as taskHelpers from "../../helpers/taskHelpers"

export default function TaskTable({ tasks, updateTask, isArchived }) {

    //find the priority of the task and sort them
    tasks.sort((a, b) => {
        return taskHelpers.findPrioritizedTask(a, b)
    })

    //styles
    const headerPadding = "p-4"
    let count = 1

    return (
        <table className={`table text-center`}>

            {/* border 0 so it doesnt ident the whole table by accident - fixed on sep 6 */}
            <thead className={`bg-secondary bg-opacity-25 border-light border-0 ${headerPadding}`}>
                <tr>
                    <th scope="col" className={`${headerPadding}`}>
                        <i
                            type="button"
                            data-bs-toggle="tooltip"
                            data-bs-placement="right"
                            title="Reminder status: (Archive, Restore, Alarming, or Expired)"
                            class="bi bi-option"
                        ></i>
                    </th>
                    <th scope="col" className={`${headerPadding}`}>App</th>
                    <th scope="col" className={`${headerPadding}`}>Task</th>
                    <th scope="col" className={`d-none d-md-block ${headerPadding}`}>Due date</th>
                    <th scope="col" className={`${headerPadding}`}>Time</th>
                    <th scope="col" className={`${headerPadding}`}>🔗</th>
                </tr>
            </thead>

            <tbody>
                {tasks.map((task) => {
                    return (
                        <TaskRow
                            task={task}
                            updateTask={updateTask}
                            count={count++}
                        />
                    )
                })}
                {tasks.length <= 0 ?
                    <tr>
                        <th
                            scope="row"
                            key={count++}
                        >
                            {count++}
                        </th>
                        <td></td>
                        <td>{(!isArchived) ? "No tasks found! Track a new one inside an application" : "No archived tasks"}</td>
                        <td />
                        <td />
                        <td />
                    </tr>
                    :
                    <></>
                }
            </tbody>

        </table>
    )
}