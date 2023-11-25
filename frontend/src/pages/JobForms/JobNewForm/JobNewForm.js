import { useState, useMemo, useContext } from "react";

//constants
import { jobFormData } from "../../../constants/constants";

//context-providers
import { JobContext } from "../../../hooks/contexts/JobContext";

//helpers
import { createJobData, updateDateApplied, updateJobFormErrors } from "../../../helpers/applicationHelpers";

//utils
import { createObjCopy } from "../../../utils/memoryUtils";

//private-components
import { JobForm } from "../components/JobForm";

//layouts
import { PageLayout } from "../../../layouts/PageLayout";

//css
import "./JobNewForm.css"

export default function JobNewForm() {

    const initialState = useMemo(() => (createObjCopy(jobFormData)), [])

    const [formData, setFormData] = useState(initialState)
    const { createApplication } = useContext(JobContext)

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
        createApplication(createJobData(formData))
            .then((result) => {
                console.log(result.errors)
                if (!result.success) {
                    setFormData(updateJobFormErrors(formData, result.errors))
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