

//private-components
import { TaskForm } from "../../components/TaskForm"

//components
import { CardList } from "../../../../components/CardList"
import { SectionHeader } from "../../../../components/SectionHeader"
import { FilterDropdown } from "../../../../components/Dropdowns/FilterDropdown"

//hocs
import { withStatusControl } from "../../../../hocs/withStatusControl"

//constants
import { APP_STATUS_COLORS } from "../../../../constants/constants"

//css
import "./JobPageTasks.css"
import "../../JobPage.css"

function JobPageTasks({ status, handleStatus }) {

    const taskCards = Array.from({ length: 15 }).fill({
        value: "",
        status: status
    })

    //here going to fetch tasks

    return (
        <>
            <SectionHeader
                IconComponent={<i className="bi bi-view-list"></i>}
                title={`${taskCards.length} tasks for this job`}
                ButtonComponent={
                    <FilterDropdown
                        id={"status-filter-tasks"}
                        label={"status"}
                        value={status}
                        options={APP_STATUS_COLORS}
                        handleOption={handleStatus}
                    />
                }
            />
            <CardList
                type={"tasks"}
                cards={taskCards}
                isPreview={true}
                isShow={true}
            />
            <TaskForm />
        </>
    )
}

export default withStatusControl(JobPageTasks)