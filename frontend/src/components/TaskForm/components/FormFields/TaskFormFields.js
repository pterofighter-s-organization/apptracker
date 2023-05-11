import { useState } from 'react';

//validation helpers
import textValidator from '../Validators/textValidator';
import dateValidator from '../Validators/dateValidator';
import timeValidator from '../Validators/timeValidator';

//fields
import TextField from './Fields/Text/TextField';
import DateField from './Fields/Date/DateField';
import TimeField from './Fields/Time/TimeField';

export default function TaskFormFields({ setTask, fontSize }) {

    //form
    //textbox -> mm-dd-yyyy -> hh:mm

    const [formData, setFormData] = useState({
        "text": "",
        "date": "",
        "time": "",
    })

    const [errorMsgs, setErrorMsgs] = useState({
        "text": "",
        "date": "",
        "time": ""
    })

    function handleSubmittedForm() {

        const timeCheck = timeValidator(formData.time, setErrorMsgs)
        const dateCheck = dateValidator(formData.date, setErrorMsgs)
        const textCheck = textValidator(formData.text, setErrorMsgs)

        if (timeCheck && dateCheck && textCheck) {

            //make a new task
            const newTask = {
                title: formData.text,
                date: (formData.date + " " + formData.time),
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
                    text={formData.text}
                    setFormData={setFormData}
                    errorMsg={errorMsgs.text}
                    fontSize={fontSize}
                    header={"Task title *"}
                    footer={"Enter the name for your task"}
                />
                <DateField
                    date={formData.date}
                    setFormData={setFormData}
                    errorMsg={errorMsgs.date}
                    fontSize={fontSize}
                    header={"Date of task *"}
                    footer={"Select in (MM DD YYYY)"}
                />
                <TimeField
                    time={formData.time}
                    setFormData={setFormData}
                    errorMsgs={errorMsgs.time}
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