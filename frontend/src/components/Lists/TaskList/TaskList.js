
//components
import { TaskCard } from "./TaskCard"

//css
import "./TaskList.css"

export default function TaskList() {

    return (
        <div className="task-list">
            {
                Array.from({ length: 5 }, (_, index) => index + 1).map((id) => (
                    <TaskCard
                        key={id}
                        id={id}
                        title={"test me i am a task test me i am a task test me i am a task"}
                    />
                ))
            }
            {
                Array.from({ length: 5 }, (_, index) => index + 1).map((id) => (
                    <TaskCard
                        key={id}
                        id={id}
                        isArchived={true}
                        title={"test me i am a task"}
                    />
                ))
            }
        </div>
    )
}