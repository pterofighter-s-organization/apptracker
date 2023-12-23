import { useContext, useMemo, useEffect, useState } from "react";

//components
import { CardList } from "../../../../components/CardList";
import { CardListHeader } from "../../../../components/CardListHeader";
import { ErrorDisplay } from "../../../../components/Displays/ErrorDisplay";
import { LoadingDisplay } from "../../../../components/Displays/LoadingDisplay";
import { showFailNotification, showSuccessNotification } from "../../../../components/NotificationList/components/Notification/Notification";
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
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        setIsLoading(true)
        getJobTasks(job.data.application_id)
            .finally(() => {
                setIsLoading(false)
            })
    }, [getJobTasks, job.data.application_id, setIsLoading])

    const filteredData = useMemo(() => {
        return filterDataByStatus(job.data.archived ? "archived" : status, tasks.data)
    }, [status, tasks.data, job.data.archived])

    const handleCreate = (e) => {
        e.preventDefault()
        setIsSubmitting(true)

        createJobTask(job.data.application_id, {
            ...createTaskData(formData),
            company: job.data.company,
            position: job.data.position,
        })
            .then(() => {
                showSuccessNotification({
                    message: "Task created successfully!"
                })
            })
            .catch((errors) => {
                showFailNotification({
                    message: "Please fix the errors before submitting this task!",
                    errors: errors
                })
                if (errors.response?.data) {
                    setFormData(updateTaskFormErrors(formData, errors.response.data))
                }
            })
            .finally(() => {
                setIsSubmitting(false)
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

    if (isLoading) {
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
                    isSubmitting ?
                        <LoadingDisplay
                            height={"10.75rem"}
                        />
                        :
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