import { useEffect, useState, useContext, useMemo } from "react";
import { useNavigate, useParams } from "react-router-dom";

//components
import { ErrorDisplay } from "../../../components/Displays/ErrorDisplay";
import { LoadingDisplay } from "../../../components/Displays/LoadingDisplay";

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

    useEffect(() => {
        getApplication(id)
            .then((result) => {
                if (result.success) {
                    setFormData(updateJobFormData(initialState, result.data))
                    document.title = `Editing ${strFormatter(result.data.position)}, ${strFormatter(result.data.company)} - Job Tracker App`
                }
            })

        return () => document.title = 'Job Tracker App'
    }, [getApplication, initialState, id]);

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

        updateApplication(job.data.application_id, {
            ...job.data,
            ...createJobData(formData)
        })
            .then((result) => {
                if (result.success) {
                    alert("Successfully edited! Now redirecting you to the job page.")
                    navigate("/job/" + result.data.application_id)
                } else {
                    const apiError = handleAPIErrors({
                        errors: result.errors,
                        message: "Please fix the errors above before submitting!"
                    })
                    alert(apiError)
                    setErrorMessage(apiError)
                    setFormData(updateJobFormErrors(formData, result.errors.response.data))
                }
            })
    }

    if (job.submitLoading) {
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