//utils



export default function TaskTable({ tasks }) {

    //find the priority of the task and sort them
    tasks.sort((a, b) => {
        return findPrioritizedTask(a, b)
    })

    if (!tasks) {
        return <>Loading...</>
    }

    //styles
    const headerPadding = "p-4"
    let taskCount = 0

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
                {
                    
                }
            </tbody>

        </table>
    )
}