import { useState, useMemo, useContext } from "react";

//constants
import { jobFormData } from "../../../constants/constants";

//context-reducer
import { JobContext } from "../../../contexts/JobContext";

//helpers
import { createDataFromFormState, updateDateApplied, updateFormStateFromErrors } from "../../../helpers/applicationHelpers";

//utils
import { createObjCopy } from "../../../utils/deepCopy";

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
        createApplication(createDataFromFormState(formData))
            .then((result) => {
                console.log(result.errors)
                if (!result.success) {
                    setFormData(updateFormStateFromErrors(formData, result.errors))
                }
            })
    }

    console.log("hello", formData)

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