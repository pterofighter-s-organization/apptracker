import { useEffect, useState, useContext, useMemo } from "react";
import { useParams } from "react-router-dom";

//private-components
import { JobForm } from "../components/JobForm";

//layouts
import { PageLayout } from "../../../layouts/PageLayout";

//constants
import { jobFormData } from "../../../constants/constants";

//context-reducers
import { JobContext } from "../../../contexts/JobContext";

//helpers
import { updateFormStateFromData, updateFormStateFromErrors, createDataFromFormState } from "../../../helpers/applicationHelpers";

//css
import "./JobEditForm.css"

export default function JobEditForm() {

    const { id } = useParams()
    const initialState = useMemo(() => (jobFormData), [])
    //making sure this doesn't re-render and make useeffect render again

    const { state, getApplication, submitApplication } = useContext(JobContext);
    const [formData, setFormData] = useState(initialState)
    // const [submissionState, setSubmissionState] = useState({
    //     status: false,
    //     message: "",
    //     redirect: ""
    // })

    console.log("edit-job-form-app-id:", id)

    useEffect(() => {
        getApplication(1).then((result) => {
            if (result.success) {
                setFormData(updateFormStateFromData(initialState, result.data))
            }
        })
    }, [getApplication, initialState]);

    const handleChange = (e) => {
        e.preventDefault();
        setFormData({
            ...formData,
            [e.target.name]: {
                value: e.target.value,
                error: "",
            },
        });

        console.log(e.target.value)
    };

    const handleSubmit = (e) => {
        e.preventDefault()
        submitApplication(state.data.application_id, createDataFromFormState(formData))
            .then((result) => {
                if (!result.success) {
                    setFormData(updateFormStateFromErrors(formData, result.errors))
                }
            })
    }

    if (state.loading) {
        return <>Loading...</>;
    }

    return (
        <PageLayout>
            <JobForm
                isEdit={true}
                formData={formData}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
            />
        </PageLayout>
    )
}