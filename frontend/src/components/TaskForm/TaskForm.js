import { useEffect, useState } from "react";

//initializers
import dateTimeInitializer from "../../utils/initializers/dateTime/dateTimeInitializer";

//sections
import TaskDateTimeInputs from "./sections/DateTime/TaskDateTimeInputs";
import TaskTitleInput from "./sections/Title/TaskTitleInput";

//components
import SubmissionModals from "../Modals/SubmissionModals/SubmissionModals";

//validators
import dateTimeValidator from "../../utils/validators/dateTime/dateTimeValidator";
import textValidator from "../../utils/validators/text/textValidator";

export default function TaskForm({ application, updateApplication, fontSize }) {

    const [formData, setFormData] = useState(null)
    const [errorMsgs, setErrorMsgs] = useState(null)
    const [showSuccessModal, setShowSuccessModal] = useState(false)

    useEffect(() => {
        const dateDueData = dateTimeInitializer(null, "Due")
        const basicData = {
            "title": ""
        }
        const newFormData = { ...basicData, ...dateDueData }

        setFormData(newFormData)
        setErrorMsgs({
            "timeDue": "",
            "dateDue": "",
            "title": ""
        })
    }, [])

    function handleSubmittedForm(event) {

        event.preventDefault()

        const dateDueCheck = dateTimeValidator(formData, setErrorMsgs, "Due", false, false) //dont allow empty. dont allow dates before today
        const titleCheck = textValidator(formData, setErrorMsgs, "title")

        if (dateDueCheck.check && titleCheck.check) {

            const newTask = {
                title: formData["title"],
                date: dateDueCheck.value,
            }

            const newTasks = [...application.tasks, newTask]
            const newAppInfo = {
                "tasks": newTasks
            }

            setShowSuccessModal(updateApplication(application, newAppInfo))
        }
    }


    //modals
    const modalId = "task-form"

    function closeModal() {
        setTimeout(() => {
            setShowSuccessModal(false)
        }, 200)
    }

    if (!formData) {
        return <></>
    }

    return (
        <>
            <div className="d-flex flex-column bg-body-secondary p-4">

                <div className="d-flex flex-column gap-0">
                    <div className="h4 text-nowrap">
                        Tracking a new task :
                    </div>
                    <hr className="" />
                    <div className="fs-6 mb-3">
                        * ( required fields )
                    </div>
                </div>

                <form
                    className="d-flex flex-column gap-3 gap-xl-4"
                    onSubmit={(e) => {
                        handleSubmittedForm(e)
                    }}
                >
                    {/* sections */}
                    <div className="d-flex flex-wrap gap-3 gap-sm-4">
                        <TaskTitleInput
                            formData={formData}
                            setFormData={setFormData}
                            fontSize={fontSize}
                            errorMsgs={errorMsgs}
                        />
                        <TaskDateTimeInputs
                            formData={formData}
                            setFormData={setFormData}
                            fontSize={fontSize}
                            errorMsgs={errorMsgs}
                        />
                    </div>

                    {/* button */}
                    <button
                        className={`btn btn-primary p-3 ${fontSize}`}
                        type="submit"
                        data-bs-toggle="modal" data-bs-target={"#" + modalId}
                    >
                        Submit
                    </button>

                </form>

            </div>

            <SubmissionModals
                id={modalId}
                showSuccessModal={showSuccessModal}
                successMsg={"Task added!"}
                errorMsg={"Fail to add task! Please check the invalid fields."}
                closeModal={closeModal}
            />
        </>
    )
}