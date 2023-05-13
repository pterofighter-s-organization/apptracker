import { useState } from 'react';

//validation helpers
import textValidator from '../Validators/textValidator';
import dateValidator from '../Validators/dateValidator';
import timeValidator from '../Validators/timeValidator';

//input components
import TextField from '../../../Inputs/Text/TextField';
import DateField from '../../../Inputs/Date/DateField';
import TimeField from '../../../Inputs/Time/TimeField';

export default function TaskFormFields({ setTask, fontSize }) {

    //form
    //textbox -> mm-dd-yyyy -> hh:mm

    const [formData, setFormData] = useState({
        "text": "",
        "month": "",
        "day": "",
        "year": "",
        "hour": "",
        "min": "",
    })

    const [errorMsgs, setErrorMsgs] = useState({
        "text": "",
        "date": "",
        "time": ""
    })

    function handleSubmittedForm() {

        const time = formData.hour + ":" + formData.min + ":00"
        const date = formData.month + "-" + formData.day + "-" + formData.year

        const timeCheck = timeValidator(time, setErrorMsgs)
        const dateCheck = dateValidator(date, setErrorMsgs)
        const textCheck = textValidator(formData.text, setErrorMsgs)

        if (timeCheck && dateCheck && textCheck) {

            //make a new task
            const newTask = {
                title: formData.text,
                date: (date + " " + time),
            }

            setTask(newTask)
        }
    }

    return (
        <form
            className="d-flex flex-column gap-3 gap-xl-4"
            onSubmit={(e) => {
                e.preventDefault()
                handleSubmittedForm()
            }}
        >
            <div className="d-flex flex-wrap gap-3 gap-sm-4">
                <TextField
                    formData={formData}
                    setFormData={setFormData}
                    errorMsg={errorMsgs}
                    fontSize={fontSize}
                    fieldWidth={800} //px
                    header={"Task title *"}
                    footer={"Enter the name for your task"}
                />
                <DateField
                    formData={formData}
                    setFormData={setFormData}
                    errorMsg={errorMsgs}
                    fontSize={fontSize}
                    header={"Date of task *"}
                    footer={"Select in (MM DD YYYY)"}
                />
                <TimeField
                    formData={formData}
                    setFormData={setFormData}
                    errorMsgs={errorMsgs}
                    fontSize={fontSize}
                    header={"Time *"}
                    footer={"24 hr format (hh:mm)"}
                />
            </div>
            <button className={`btn btn-primary p-3 ${fontSize}`} type="submit">
                Submit
            </button>
        </form>
    )
}