import { useState, useMemo, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

//components
import { LoadingDisplay } from "../../../components/Displays/LoadingDisplay";

//constants
import { JOB_FORM_DATA } from "../../../constants/constants";

//contexts
import { JobContext } from "../../../hooks/contexts/JobContext";

//helpers
import { createJobData, handleChangeFromStage, updateJobFormErrors } from "../../../helpers/application";

//utils
import { createObjCopy } from "../../../utils/memory";

//helpers
import { handleAPIErrors } from "../../../helpers/form";

//private-components
import { JobForm } from "../components/JobForm";

//layouts
import { PageLayout } from "../../../layouts/PageLayout";

export default function JobNewForm() {

    //avoid sharing the same reference, make sure they are different references when switching between edit and new.
    const initialState = useMemo(() => (createObjCopy(JOB_FORM_DATA)), [])

    const navigate = useNavigate()
    const { job, createApplication } = useContext(JobContext)
    const [formData, setFormData] = useState(initialState)
    const [errorMessage, setErrorMessage] = useState("")

    useEffect(() => {
        document.title = "New Job Form - Job Tracker App"

        return () => document.title = "Job Tracker App"
    }, [])

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

        createApplication(createJobData(formData))
            .then((result) => {
                if (result.success) {
                    alert("Successfully submitted! Now redirecting you to the job page.")
                    navigate(`/job/${result.data.application_id}`)
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

    if(job.submitLoading){
        return <LoadingDisplay/>
    }

    return (
        <PageLayout>
            <JobForm
                formData={formData}
                errorMessage={errorMessage}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
            />
        </PageLayout>
    )
}