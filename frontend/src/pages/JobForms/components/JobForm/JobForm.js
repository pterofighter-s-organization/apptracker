
import { useNavigate } from "react-router-dom";

//components
import { SubmitButton } from "../../../../components/Buttons/SubmitButton";

//sections
import { JobFormHeader } from "./sections/JobFormHeader";
import { JobFormInfos } from "./sections/JobFormInfos";
import { JobFormDates } from "./sections/JobFormDates";


//css
import "./JobForm.css"

export default function JobForm({ isEdit, formData, handleChange, handleSubmit }) {

    const nav = useNavigate()

    const handleReturnPage = (e) => {
        e.preventDefault()
        nav(-1)
    }

    return (
        <form
            className="job-form"
            onSubmit={handleSubmit}
        >
            <JobFormHeader isEdit={isEdit} />
            <JobFormDates
                formData={formData}
                handleChange={handleChange}
            />
            <JobFormInfos
                formData={formData}
                handleChange={handleChange}
            />
            {/* <div className="job-form-section">
                <InfoReminder
                    text={"make sure to double check before submitting."}
                />
            </div> */}
            <SubmitButton />
            <button
                to=".."
                className="job-form-back-button"
                onClick={handleReturnPage}
            >
                Return to Previous Page
            </button>
        </form>
    )
}