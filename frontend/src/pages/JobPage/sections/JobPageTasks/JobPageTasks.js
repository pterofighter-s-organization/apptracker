import { useContext, useEffect, useState, useMemo } from "react"

//private-components
import { TaskForm } from "../../components/TaskForm"

//components
import { CardList } from "../../../../components/CardList"
import { SectionHeader } from "../../../../components/SectionHeader"
import { FilterDropdown } from "../../../../components/Dropdowns/FilterDropdown"

//hocs
import { withStatusControl } from "../../../../hocs/withStatusControl"

//constants
import { APP_STATUS_COLORS, taskFormData } from "../../../../constants/constants"

//context
import { TasksContext } from "../../../../hooks/contexts/TasksContext"
import { JobContext } from "../../../../hooks/contexts/JobContext"

//components
import { showSubmitNotification } from "../../../../components/NotificationList/components/Notification/Notification"

//helpers
import { createTaskData, sortTasksByDateDue, updateTaskFormErrors } from "../../../../helpers/taskHelpers"
import { filterDataByStatus, sortDataByLatest } from "../../../../helpers/helpers"
import { handleAPIErrors } from "../../../../helpers/formHelpers"

//utils
import { createObjCopy } from "../../../../utils/memoryUtils"

//css
import "./JobPageTasks.css"
import "../../JobPage.css"
import { ErrorDisplay } from "../../../../components/ErrorDisplay"


function JobPageTasks({ status, handleStatus }) {

    const { tasks, getJobTasks, createJobTask } = useContext(TasksContext)
    const { job } = useContext(JobContext)
    const [formData, setFormData] = useState(createObjCopy(taskFormData))

    useEffect(() => {
        getJobTasks(job.data.application_id)
    }, [getJobTasks, job.data.application_id])

    const handleSubmit = (e) => {
        e.preventDefault()

        createJobTask(job.data.application_id, {
            ...createTaskData(formData),
            company: job.data.company,
            position: job.data.position
        })
            .then((result) => {
                showSubmitNotification({
                    status: result.success,
                    errors: result.errors,
                    message: "task created successfully!",
                    errorMessage: "please fix the errors before submitting the task!"
                })
                if (!result.success) {
                    setFormData(updateTaskFormErrors(formData, result.errors.response.data))
                }
            })
    }

    const handleChange = (e) => {
        e.preventDefault()

        setFormData({
            ...formData,
            [e.target.name]: {
                value: e.target.value,
                error: ''
            }
        })
    }

    const filteredData = useMemo(() => {
        return filterDataByStatus(status, tasks.data)
    }, [tasks.data, status])

    if (tasks.loading) {
        return <>Loading...</>
    }

    if (tasks.errors) {
        return (
            <ErrorDisplay
                label={"job tasks"}
                errors={tasks.errors}
                isSection={true}
            />
        )
    }

    return (
        <>
            <SectionHeader
                IconComponent={<i className="bi bi-view-list"></i>}
                title={`${filteredData.length} tasks for this job`}
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
                cards={
                    status === "archived" ?
                        sortDataByLatest(filteredData)
                        :
                        sortTasksByDateDue(filteredData)
                }
                isPreview={true}
                isShow={true}
            />
            <TaskForm
                formData={formData}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
            />
        </>
    )
}

export default withStatusControl(JobPageTasks)