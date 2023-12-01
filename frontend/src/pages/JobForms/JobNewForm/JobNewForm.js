import { useState, useMemo, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

//constants
import { jobFormData } from "../../../constants/constants";

//context-providers
import { JobContext } from "../../../hooks/contexts/JobContext";

//helpers
import { createJobData, updateDateApplied, updateJobFormErrors } from "../../../helpers/applicationHelpers";

//utils
import { createObjCopy } from "../../../utils/memoryUtils";

//helpers
import { handleAPIErrors } from "../../../helpers/formHelpers";

//private-components
import { JobForm } from "../components/JobForm";

//layouts
import { PageLayout } from "../../../layouts/PageLayout";

//css
import "./JobNewForm.css"

export default function JobNewForm() {

    const initialState = useMemo(() => (createObjCopy(jobFormData)), [])

    const navigate = useNavigate()
    const [formData, setFormData] = useState(initialState)
    const { createApplication } = useContext(JobContext)

    useEffect(() => {
        document.title = `New Job Form - Job Tracker App`

        return () => document.title = "Job Tracker App"
    }, [])

    const handleChange = (e) => {
        e.preventDefault()

        if(e.target.name === "stage"){
            setFormData({
                ...formData,
                appliedDate: {
                    value: updateDateApplied(e.target.value, formData.appliedDate.value, true),
                    error: ""
                },
                stage: {
                    value: e.target.value,
                    error: ""
                }
            })
        }else{
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

        createApplication(1, createJobData(formData))
            .then((result) => {
                if (result.success) {
                    alert("Successfully submitted! Now redirecting to the newly created job page.")
                    navigate("/job/" + result.data.application_id)
                } else {
                    alert(
                        handleAPIErrors({
                            errors: result.errors,
                            message: "Please fix the errors before submitting!"
                        })
                    )
                    setFormData(updateJobFormErrors(formData, result.errors.response.data))
                }
            })
    }

    return (
        <PageLayout>
            <JobForm
                isEdit={false}
                formData={formData}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
            />
        </PageLayout>
    )
}