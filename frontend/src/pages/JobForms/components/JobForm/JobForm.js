import { useNavigate } from "react-router-dom"

//components
import { SubmitButton } from "../../../../components/Buttons/SubmitButton"
import { ReturnButton } from "../ReturnButton"
import { InfoReminder } from "../../../../components/InfoReminder"

//sections
import { JobFormHeader } from "./sections/JobFormHeader"
import { JobFormStage } from "./sections/JobFormStage"
import { JobFormDetails } from "./sections/JobFormDetails"
import { JobFormDescription } from "./sections/JobFormDescription"

//css
import "./JobForm.css"

export default function JobForm({ isEdit, formData, errorMessage, handleChange, handleSubmit }) {

    const navigate = useNavigate()

    const handleReturn = (e) => {
        e.preventDefault()
        navigate(-1)
    }

    return (
        <form
            className="job-form"
            onSubmit={handleSubmit}
        >
            <JobFormHeader isEdit={isEdit} />
            {
                errorMessage.length > 0 ?
                    <div className="job-form-error-section">
                        <InfoReminder
                            isError={true}
                            text={errorMessage}
                        />
                    </div>
                    :
                    null
            }
            <JobFormStage
                formData={formData}
                handleChange={handleChange}
            />
            <JobFormDetails
                formData={formData}
                handleChange={handleChange}
            />
            <JobFormDescription
                formData={formData}
                handleChange={handleChange}
            />
            <SubmitButton />
            <ReturnButton
                handleReturn={handleReturn}
                label={"Previous page"}
            />
        </form>
    )
}