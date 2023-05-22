import { useState } from 'react';

//validation helpers
import textValidator from './components/Validators/textValidator';
import dateValidator from './components/Validators/dateValidator';
import timeValidator from './components/Validators/timeValidator';
import dateTimeValidator from './components/Validators/dateTimeValidator';

//modal components
import SubmissionModal from '../../../../../../components/Modals/SubmissionModal';

//components
import TaskInfo from './components/FormFields/TaskInfo';

export default function TaskForm(props) {

    const {
        setTask,
        fontSize,
        showSuccessModal,
        closeModal
    } = props

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

    const modalId = "taskFormModal"

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
            }
        }
    }

    return (
        <>
            <div className="d-flex flex-wrap gap-3 gap-md-4 gap-xl-5 align-items-center bg-body-secondary p-4 fs-4">
                <div className="d-flex flex-column gap-3 w-100">
                    <div className="">
                        Tracking a new task :
                        <hr className="" />
                        <div className="fs-6">
                            * is Required
                        </div>
                    </div>
                    <form
                        className="d-flex flex-column gap-3 gap-xl-4"
                        onSubmit={(e) => {
                            e.preventDefault()
                            handleSubmittedForm()
                        }}
                    >
                        <TaskInfo
                            formData={formData}
                            setFormData={setFormData}
                            errorMsgs={errorMsgs}
                            fontSize={fontSize}
                        />
                        <button
                            className={`btn btn-primary p-3 ${fontSize}`}
                            type="submit"
                            data-bs-toggle="modal" data-bs-target={"#" + modalId}
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </div>
            {showSuccessModal ?
                <SubmissionModal
                    header={"Successful!"}
                    message={"New task has been added!"}
                    closeMessage={"Close"}
                    closeModal={closeModal}
                    id={modalId}
                />
                :
                <SubmissionModal
                    header={"Warning!"}
                    message={"Task failed to add! Check error fields and fix them"}
                    closeMessage={"Close"}
                    closeModal={closeModal}
                    id={modalId}
                />
            }

            {/* <SubmittedModal
                link={""}
                linkButtonLabel={""}
                showSecondButton={false}
                status={modalStatus}
                setStatus={setModalStatus}
                id={"taskFormModal"}
                errorMsg={"Task failed to add, check error fields."}
                successMsg={"New task has been added!"}
            /> */}
        </>
    )
}