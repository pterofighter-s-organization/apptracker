import { useEffect, useState, useContext, useMemo } from "react";
import { useParams } from "react-router-dom";

//private-components
import { JobForm } from "../components/JobForm";

//layouts
import { PageLayout } from "../../../layouts/PageLayout";

//constants
import { jobFormData } from "../../../constants/constants";

//context-providers
import { JobContext } from "../../../hooks/contexts/JobContext";

//helpers
import { updateJobFormData, updateJobFormErrors, createJobData, updateDateApplied } from "../../../helpers/applicationHelpers";

//utils
import { createObjCopy } from "../../../utils/memoryUtils";

//css
import "./JobEditForm.css"

export default function JobEditForm() {

    const { id } = useParams()
    const initialState = useMemo(() => (createObjCopy(jobFormData)), [])
    //making sure this doesn't re-render and make useeffect render again. fixed*

    const { job, getApplication, editApplication } = useContext(JobContext);
    const [formData, setFormData] = useState(initialState)
    // const [submissionState, setSubmissionState] = useState({
    //     status: false,
    //     message: "",
    //     redirect: ""
    // })

    useEffect(() => {
        getApplication(id).then((result) => {
            if (result.success) {
                setFormData(updateJobFormData(initialState, result.data))
            }
        })
    }, [getApplication, initialState, id]);

    const handleChange = (e) => {
        e.preventDefault();

        if (e.target.name === "stage") {
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
        } else {
            setFormData({
                ...formData,
                [e.target.name]: {
                    value: e.target.value,
                    error: ""
                }
            })
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault()

        editApplication(job.data.application_id, createJobData(formData))
            .then((result) => {
                if (!result.success) {
                    setFormData(updateJobFormErrors(formData, result.errors))
                }
            })
    }

    if (job.loading) {
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