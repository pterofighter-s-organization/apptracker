import { useState } from 'react';

//validation helpers
import textValidator from '../Validators/textValidator';
import dateValidator from '../Validators/dateValidator';
import timeValidator from '../Validators/timeValidator';
import dateTimeValidator from '../Validators/dateTimeValidator';

//input components
import TextField from '../../../Inputs/Text/TextField';
import DateField from '../../../Inputs/Date/DateField';
import TimeField from '../../../Inputs/Time/TimeField';
import SubmittedModal from '../../../Modals/SubmittedModal';

export default function TaskFormFields({ setTask, fontSize }) {

    //form
    //textbox -> mm-dd-yyyy -> hh:mm

    //only way to have multiple dates, is to have multiple form data, so we dont need labels on them
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

    const [modalStatus, setModalStatus] = useState(false)

    function handleSubmittedForm() {

        const time = formData.hour + ":" + formData.min + ":00"
        const date = formData.month + "-" + formData.day + "-" + formData.year

        const timeCheck = timeValidator(time, setErrorMsgs)
        const dateCheck = dateValidator(date, setErrorMsgs)
        const textCheck = textValidator(formData.text, setErrorMsgs)

        if (timeCheck && dateCheck && textCheck) {

            const dateTime = date + " " + time
            const dateTimeCheck = dateTimeValidator(dateTime, setErrorMsgs)

            if (dateTimeCheck) {
                //make a new task

                const newTask = {
                    title: formData.text,
                    date: dateTime,
                }

                setTask(newTask)
                setModalStatus(true)
            }
        }
    }

    return (
        <>
            <form
                className="d-flex flex-column gap-3 gap-xl-4"
                onSubmit={(e) => {
                    e.preventDefault()
                    handleSubmittedForm()
                }}
            >
                <div className="d-flex flex-wrap gap-3 gap-sm-4">
                    {/* there is label, width changes on textfield for multiuse */}
                    <TextField
                        formData={formData}
                        setFormData={setFormData}
                        errorMsg={errorMsgs}
                        fontSize={fontSize}
                        minWidthInVw={40} //min vw
                        widthInPx={680} // px
                        label={"text"}
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
                        label={"time"}
                        header={"Time *"}
                        footer={"24 hr format (hh:mm)"}
                    />
                </div>
                <button  
                    className={`btn btn-primary p-3 ${fontSize}`} 
                    type="submit"
                    data-bs-toggle="modal" data-bs-target="#taskFormModal"
                >
                    Submit
                </button>
            </form>
            <SubmittedModal
                link={""}
                linkButtonLabel={""}
                showSecondButton={false}
                status={modalStatus}
                setStatus={setModalStatus}
                id={"taskFormModal"}
                errorMsg={"Task failed to add, check error fields."}
                successMsg={"New task has been added!"}
            />
        </>
    )
}