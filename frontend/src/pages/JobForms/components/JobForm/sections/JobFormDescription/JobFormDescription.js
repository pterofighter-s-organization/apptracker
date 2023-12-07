
//components
import { InputFooter } from "../../../../../../components/Inputs/InputFooter"
import { TextareaInput } from "../../../../../../components/Inputs/TextareaInput"

//layouts
import { InputLayout } from "../../../../../../layouts/InputLayout"

//css
import "./JobFormDescription.css"

export default function JobFormDescription({ formData, handleChange }) {

    return (
        <div className="job-form-section job-form-description">
            <h3>
                Description
            </h3>
            <InputLayout isError={formData.description.error.length > 0}>
                <TextareaInput
                    height={"15rem"}
                    name={"description"}
                    value={formData.description.value}
                    handleChange={handleChange}
                />
                <InputFooter
                    footer={"Put the given job description here."}
                    errorMessage={formData.description.error}
                />
            </InputLayout>
        </div>
    )
}