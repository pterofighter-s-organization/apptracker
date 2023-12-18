import { useContext, useMemo, useEffect, useState } from "react";

//components
import { CardList } from "../../../../components/CardList";
import { CardListHeader } from "../../../../components/CardListHeader";
import { ErrorDisplay } from "../../../../components/Displays/ErrorDisplay";
import { LoadingDisplay } from "../../../../components/Displays/LoadingDisplay";
import { showSubmitNotification } from "../../../../components/NotificationList/components/Notification/Notification";
import { ToggleButton } from "../../../../components/Buttons/ToggleButtons/ToggleButton";
import { DisabledToggleButton } from "../../../../components/Buttons/ToggleButtons/DisabledToggleButton";

//private-components
import { TaskForm } from "../../components/TaskForm";

//layouts
import { CardsSectionLayout } from "../../../../layouts/CardsSectionLayout";

//helpers
import { createTaskData, updateTaskFormErrors, sortTasksByDateDue } from "../../../../helpers/task";
import { sortDataByLatest, filterDataByStatus } from "../../../../helpers/helpers";

//utils
import { createObjCopy } from "../../../../utils/memory";

//hocs
import { withStatusControl } from "../../../../hocs/withStatusControl";

//constants
import { APP_STATUS_COLORS, TASK_FORM_DATA } from "../../../../constants/constants";

//contexts
import { TasksContext } from "../../../../hooks/contexts/TasksContext";
import { JobContext } from "../../../../hooks/contexts/JobContext";

function JobPageTasks({ status, handleStatus, isPreview, isShow }) {

    const { tasks, getJobTasks, createJobTask } = useContext(TasksContext)
    const { job } = useContext(JobContext)
    const [formData, setFormData] = useState(createObjCopy(TASK_FORM_DATA))

    useEffect(() => {
        getJobTasks(job.data.application_id)
    }, [getJobTasks, job.data.application_id])

    const filteredData = useMemo(() => {
        return filterDataByStatus(job.data.archived ? "archived" : status, tasks.data)
    }, [status, tasks.data, job.data.archived])

    const handleCreate = (e) => {
        e.preventDefault()

        createJobTask(job.data.application_id, {
            ...createTaskData(formData),
            company: job.data.company,
            position: job.data.position,
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

    if (tasks.loading || tasks.submitLoading) {
        return (
            <LoadingDisplay />
        )
    }

    if (tasks.errors) {
        return (
            <ErrorDisplay
                label={"Job tasks"}
                errors={tasks.errors}
                isSection={true}
            />
        )
    }

    return (
        <CardsSectionLayout isPreview={isPreview}>
            <CardListHeader
                isArchived={job.data.archived ? true : status === "archived"}
                quantity={filteredData.length}
                type={"task"}
            />
            {
                job.data.archived ?
                    <DisabledToggleButton
                        isLeft={false}
                        value={"archived"}
                        color={APP_STATUS_COLORS["archived"]}
                    />
                    :
                    <ToggleButton
                        value={status}
                        options={APP_STATUS_COLORS}
                        handleOption={handleStatus}
                    />
            }
            {
                !job.data.archived ?
                    <TaskForm
                        formData={formData}
                        handleChange={handleChange}
                        handleCreate={handleCreate}
                    />
                    :
                    null
            }
            <CardList
                type={"tasks"}
                cards={
                    status === "archived" ?
                        sortDataByLatest(filteredData)
                        :
                        sortTasksByDateDue(filteredData)
                }
                isPreview={isPreview}
                isShow={isShow}
            />
        </CardsSectionLayout>
    )
}

export default withStatusControl(JobPageTasks)