


//private-components
import { JobForm } from "../components/JobForm";

//layouts
import { PageLayout } from "../../../layouts/PageLayout";

//css
import "./JobNewForm.css"
import { useState, useMemo } from "react";
import { jobFormData } from "../../../constants/constants";

export default function JobNewForm(){

    const initialState = useMemo(() => (jobFormData), [])

    const [formData, setFormData] = useState(initialState)

    const handleChange = (e) => {
        e.preventDefault()
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return(
        <PageLayout>
            <JobForm
                isEdit={false}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
            />
        </PageLayout>
    )
}