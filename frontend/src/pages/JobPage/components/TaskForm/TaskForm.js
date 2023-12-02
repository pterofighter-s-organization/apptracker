
//components
import { TextInput } from "../../../../components/Inputs/TextInput"
import { DateTimeInput } from "../../../../components/Inputs/DateTimeInput"
import { SubmitButton } from "../../../../components/Buttons/SubmitButton"
import { InfoReminder } from "../../../../components/InfoReminder"

//css
import "./TaskForm.css"
import "../../../../styles/Forms.css"

import { FormLayout } from "../../../../layouts/FormLayout"

export default function TaskForm({ formData, handleChange, handleSubmit }) {

    return (
        <FormLayout>
            <div className="form-header">
                <h1>
                    Add a New Task!
                </h1>
                <h6>
                    Track nesscary activities for this application.
                </h6>
                <div style={{ marginLeft: "0.1rem" }}>
                    <InfoReminder
                        text={"* is required"}
                    />
                </div>
            </div>
            <form
                className="form-fields"
                onSubmit={handleSubmit}
            >
                <TextInput
                    name={"name"}
                    formDataObj={formData.name}
                    header={"task name"}
                    footer={"enter activity name"}
                    isRequired={true}
                    handleChange={handleChange}
                />
                <DateTimeInput
                    name={"dateDue"}
                    formDataObj={formData.dateDue}
                    header={"task date and time"}
                    footer={"select its date and time"}
                    isRequired={true}
                    handleChange={handleChange}
                />
                <div/>
                <SubmitButton />
            </form>
        </FormLayout>
    )
}