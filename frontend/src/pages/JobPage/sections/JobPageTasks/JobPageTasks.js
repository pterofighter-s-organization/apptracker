import { useState } from "react"

//private-components
import { TaskForm } from "../../components/TaskForm"

//components
import { CardList } from "../../../../components/CardList"
import { SectionHeader } from "../../../../components/SectionHeader"

//css
import "./JobPageTasks.css"
import "../../JobPage.css"

export default function JobPageTasks() {

    const taskCards = Array.from({length: 15}).fill({
        value: "",
        status: "active"
    })

    const [tasks, setTasks] = useState(taskCards)

    //here going to fetch tasks

    return (
        <>
            <SectionHeader
                IconComponent={<i className="bi bi-view-list"></i>}
                title={`${tasks.length} tasks for this job`}
            />
            <CardList
                type={"tasks"}
                cards={tasks}
                status={"active"}
                isPreview={true}
                isShow={true}
            />
            <TaskForm />
        </>
    )
}