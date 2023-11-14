import { useState } from "react"


//css
import "./TaskForm.css"
import { SubmitButton } from "../../../components/Buttons/SubmitButton"

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
        //   });
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(e)
    }

    return (
        <div className="task-form-container">
            <div className="task-form-section form-header">
                <h1>
                    Add a New Task!
                </h1>
                <h6>
                    Track nesscary activities for this application.
                </h6>
                <p>* are required fields.</p>
            </div>
            <form
                className="form-inputs task-form-section"
                onSubmit={(e) => {
                    e.preventDefault()
                    handleSubmit(e)
                }}
            >
                <div className="input-container">
                    <span className={`input-header ${formData.name.error.length > 0 ? "input-text-error" : ""}`}>
                        task name *
                    </span>
                    <input
                        type="text"
                        name={"name"}
                        className={`textbox-input ${formData.name.error.length > 0 ? "input-error" : ""}`}
                        placeholder={"activity name".toUpperCase()}
                        value={formData.name.value}
                        onChange={(e) => handleChange(e)}
                    />
                    <span className={`input-footer ${formData.name.error.length > 0 ? "input-text-error" : ""}`}>
                        -
                        <span className="input-footer-text">
                            {
                                formData.name.error.length > 0 ?
                                    formData.name.error
                                    :
                                    "enter the activity name."
                            }
                        </span>
                    </span>
                </div>

                <div className="input-container">
                    <span className={`input-header ${formData.dateTime.error.length > 0 ? "input-text-error" : ""}`}>
                        task date and time *
                    </span>
                    <input
                        type="datetime-local"
                        name={"dateTime"}
                        className={`datetime-input ${formData.dateTime.error.length > 0 ? "input-error" : ""}`}
                        value={formData.dateTime.value}
                        onChange={handleChange}
                        min=""
                        max=""
                    />
                    <span className={`input-footer ${formData.dateTime.error.length > 0 ? "input-text-error" : ""}`}>
                        -
                        <span className="input-footer-text">
                            {
                                formData.dateTime.error.length > 0 ?
                                    formData.dateTime.error
                                    :
                                    "when is this activity due."
                            }
                        </span>
                    </span>
                </div>

                <SubmitButton label={""}/>
            </form>
        </div>
    )
}