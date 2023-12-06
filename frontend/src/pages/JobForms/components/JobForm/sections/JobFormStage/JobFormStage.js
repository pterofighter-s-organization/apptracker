
//components
import { InfoReminder } from "../../../../../../components/InfoReminder"
import { InputHeader } from "../../../../../../components/Inputs/InputHeader"
import { StageInput } from "../../../../../../components/Inputs/StageInput"
import { InputFooter } from "../../../../../../components/Inputs/InputFooter"
import { DateTimeInput } from "../../../../../../components/Inputs/DateTimeInput"

//layout
import { InputLayout } from "../../../../../../layouts/InputLayout"

//css
import "./JobFormStage.css"
import "../styles/JobFormSections.css"

export default function JobFormStage({ formData, handleChange }) {

    return (
        <div className="job-form-section job-form-stage-dates">
            <h3>
                Stage and Dates
            </h3>
            <InfoReminder
                text={"* is required."}
            />
            <div className="job-form-stage-dates-fields">
                <InputLayout isError={formData.stage.error.length > 0}>
                    <InputHeader
                        header={"Job stage"}
                        isRequired={true}
                    />
                    <StageInput
                        name={"stage"}
                        value={formData.stage.value}
                        handleChange={handleChange}
                    />
                    <InputFooter
                        footer={"Select it's stage."}
                        errorMessage={formData.stage.error}
                    />
                </InputLayout>
                <InputLayout isError={formData.appliedDate.error.length > 0}>
                    <InputHeader
                        header={"applied date"}
                    />
                    <DateTimeInput
                        name={"appliedDate"}
                        value={formData.appliedDate.value}
                        handleChange={handleChange}
                    />
                    <InputFooter
                        footer={"when was it applied?"}
                        errorMessage={formData.appliedDate.error}
                    />
                </InputLayout>
            </div>
        </div>
    )
}