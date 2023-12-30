import { useEffect, useState, useContext, useMemo } from "react";
import { useNavigate, useParams } from "react-router-dom";

//components
import { ErrorDisplay } from "../../../components/Displays/ErrorDisplay";
import { LoadingDisplay } from "../../../components/Displays/LoadingDisplay";
import { showSuccessNotification, showFailNotification } from "../../../components/NotificationList/Notification/Notification";

//private-components
import { JobForm } from "../components/JobForm";

//layouts
import { PageLayout } from "../../../layouts/PageLayout";

//constants
import { JOB_FORM_DATA } from "../../../constants/constants";

//contexts
import { JobContext } from "../../../hooks/contexts/JobContext";

//helpers
import { updateJobFormData, updateJobFormErrors, createJobData, handleChangeFromStage } from "../../../helpers/application";
import { handleAPIErrors } from "../../../helpers/form";

//utils
import { createObjCopy } from "../../../utils/memory";
import { strFormatter } from "../../../utils/format";

export default function JobEditForm() {

    const { id } = useParams()
    //making sure this doesn't re-render and make useeffect render again. fixed*
    const initialState = useMemo(() => (createObjCopy(JOB_FORM_DATA)), [])

    const navigate = useNavigate()
    const { job, getApplication, updateApplication } = useContext(JobContext);
    const [formData, setFormData] = useState(initialState)
    const [errorMessage, setErrorMessage] = useState("")
    const [isFetching, setIsFetching] = useState(true)

    useEffect(() => {
        setIsFetching(true)
        getApplication(id)
            .then((result) => {
                setFormData(updateJobFormData(initialState, result))
                document.title = `Editing ${strFormatter(result.position)}, ${strFormatter(result.company)} - Job Tracker App`
            })
            .finally(() => {
                setIsFetching(false)
            })

        return () => document.title = 'Job Tracker App'
    }, [getApplication, initialState, id, setIsFetching]);

    const handleChange = (e) => {
        e.preventDefault()
        setErrorMessage("")

        if (e.target.name === "stage") {
            setFormData({
                ...formData,
                ...handleChangeFromStage(e.target.value, formData.appliedDate.value)
            })
        } else {
            setFormData({
                ...formData,
                [e.target.name]: {
                    value: e.target.value,
                    error: ""
                }
            })
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        updateApplication(
            job.data.application_id,
            {
                ...job.data,
                ...createJobData(formData)
            },
        )
            .then((result) => {
                navigate("/job/" + result.application_id)

                showSuccessNotification({
                    message: "Successfully edited! Redirected you back to the job page."
                })
            })
            .catch((errors) => {
                const apiErrorMessage = handleAPIErrors({
                    errors: errors,
                    message: "Please fix the errors below before submitting!"
                })
                //checking if there's a response or data, then we update the errors
                if (errors.response?.data) {
                    setFormData(updateJobFormErrors(formData, errors.response.data))
                }

                setErrorMessage(apiErrorMessage)
                showFailNotification({
                    message: apiErrorMessage
                })
            })
    }

    if (isFetching || job.isUpdate) {
        return (
            <LoadingDisplay />
        )
    }

    if (job.errors) {
        return (
            <ErrorDisplay
                label={"Job Edit Form"}
                errors={job.errors}
            />
        )
    }

    return (
        <PageLayout>
            <JobForm
                isEdit={true}
                formData={formData}
                errorMessage={errorMessage}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
            />
        </PageLayout>
    )
}