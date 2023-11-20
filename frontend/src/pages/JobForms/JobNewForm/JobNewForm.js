import { useState } from "react";


//private-components
import { JobForm } from "../components/JobForm";

//layouts
import { PageLayout } from "../../../layouts/PageLayout";

//css
import "./JobNewForm.css"

export default function JobNewForm(){

     //in the hoc, i will put "new" as the 2nd param to make sure the hoc knows what to do.

     const initialState = {
        stage: {
            value: "interested",
            error: ""
        },
        appliedDate: {
            value: "",
            error: ""
        },
        createdDate: {
            value: "",
            error: ""
        },
        job: {
            value: "",
            error: ""
        },
        company: {
            value: "",
            error: ""
        },
        paid: {
            value: "",
            error: ""
        },
        rate: {
            value: "hour",
            error: ""
        },
        description: {
            value: "",
            error: ""
        },
        relatedSite: {
            value: "",
            error: ""
        },
        resumeLink: {
            value: "",
            error: ""
        },
        coverLetterLink: {
            value: "",
            error: ""
        }
    }

    const [formData, setFormData] = useState(initialState)

    const handleChange = (e) => {
        e.preventDefault()
        setFormData({
            ...formData,
            [e.target.name]: {
                value: e.target.value,
                error: ""
            }
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

    }

    return(
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