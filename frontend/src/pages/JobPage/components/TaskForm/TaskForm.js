import { useState } from "react"

//components
import { TextInput } from "../../../../components/Inputs/TextInput"
import { DateTimeInput } from "../../../../components/Inputs/DateTimeInput"
import { SubmitButton } from "../../../../components/Buttons/SubmitButton"

//css
import "./TaskForm.css"
import { InfoReminder } from "../../../../components/InfoReminder"

export default function TaskForm() {

    const initialState = {
        name: {
            value: "",
            error: ""
        },
        dateTime: {
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

        // setFormData({
        //     ...formData,
        //     [e.target.name]: {
        //       ...formData[e.target.name],
        //       value: e.target.value
        //     }
        //   }); dont delete, another way to maninpulate state thats more complex
    }

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <div className="task-form">
            <div className="task-form-section form-header">
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
                className="form-inputs task-form-section"
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
                    name={"dateTime"}
                    formDataObj={formData.dateTime}
                    header={"task date and time"}
                    footer={"select its date and time"}
                    isRequired={true}
                    handleChange={handleChange}
                />
                <SubmitButton label={""} />
            </form>
        </div>
    )
}