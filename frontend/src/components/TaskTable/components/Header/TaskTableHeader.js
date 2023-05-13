
export default function TaskHeader() {

    const headerPadding = "p-4"

    return (
        <thead className={`${headerPadding} bg-secondary bg-opacity-25 border-light border-5`}>
            <tr>
                <th scope="col" className={`${headerPadding}`}>#</th>
                <th scope="col" className={`${headerPadding}`}>App</th>
                <th scope="col" className={`${headerPadding}`}>Task</th>
                <th scope="col" className={`d-none d-md-block ${headerPadding}`}>Due date</th>
                <th scope="col" className={`${headerPadding}`}>Time</th>
                <th scope="col" className={`${headerPadding}`}>🔗</th>
            </tr>
        </thead>
    )
}