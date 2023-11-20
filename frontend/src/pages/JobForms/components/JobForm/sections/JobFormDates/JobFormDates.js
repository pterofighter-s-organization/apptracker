

//components
import { InfoReminder } from "../../../../../../components/InfoReminder"
import { StageInput } from "../../../../../../components/Inputs/StageInput"
import { DateTimeInput } from "../../../../../../components/Inputs/DateTimeInput"

//css
import "./JobFormDates.css"
import "../../JobForm.css"

export default function JobFormDates({ formData, handleChange }) {

    return (
        <div className="job-form-section">
            <h4 className="job-form-title">
                status and dates
            </h4>
            <hr />
            <InfoReminder
                text={"* is required"}
            />
            <div className="job-form-stage-dates">
                <StageInput
                    name={"stage"}
                    formDataObj={formData.stage}
                    handleChange={handleChange}
                    header={"app stage"}
                    footer={"current stage of this app."}
                    isRequired={true}
                />
                {
                    formData.stage.value !== "interested" ?
                        <DateTimeInput
                            name={"appliedDate"}
                            formDataObj={formData.appliedDate}
                            handleChange={handleChange}
                            header={"applied date"}
                            footer={"when did you applied?"}
                        />
                        :
                        null
                }
            </div>
        </div>
    )
}