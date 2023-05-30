import { useEffect, useState } from 'react'

//components
import { FormFieldHeader } from '../FormFieldHeader'
import { FormFieldFooter } from '../FormFieldFooter'
import { TextInput } from '../Inputs/TextInput'
import { DateSelect } from '../Selects/DateSelect'
import { TimeSelect } from '../Selects/TimeSelect'
import { SubmitModal } from '../Modals/SubmitModal'

//utils
import * as initializers from '../../utils/initializers'
import * as fieldChecks from '../../utils/fieldChecks'

//layouts
import { SubSectionLayout } from '../../layouts/SubSectionLayout'

export default function TaskForm({ createTask, application }) {

    const [formData, setFormData] = useState(null)
    const [errorMsgs, setErrorMsgs] = useState(null)
    const [showSuccessModal, setShowSuccessModal] = useState(false)

    useEffect(() => {
        const dateDueData = initializers.dateInfoInitializer(null, "due")
        const basicData = {
            "title": ""
        }
        const newFormData = { ...basicData, ...dateDueData }

        setFormData(newFormData)
        // console.log(newFormData)
        setErrorMsgs({
            "title": "",
            "date_due": "",
            "time_due": "",
        })
    }, [])

    function handleSubmittedForm() {

        const dateDueCheck = fieldChecks.checkDateTimeField(formData, setErrorMsgs, "due", false, false) //dont allow empty. dont allow dates before today
        const titleCheck = fieldChecks.checkTextField(formData, setErrorMsgs, "title")

        if (dateDueCheck.check && titleCheck.check) {

            setShowSuccessModal(createTask({
                "application_id": application.application_id,
                "title": formData["title"],
                "date_due": dateDueCheck.value,
                "company": application.company,
                "position": application.position,
                "section": "task",
                "priority": 0,
            }))
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
        return <>Loading form...</>
    }

    return (
        <SubSectionLayout title={"Creating a new task :"}>

            <div className="mb-3 fs-6">
                * ( required fields )
            </div>

            <form
                className="d-flex flex-column gap-3 gap-xl-4 fs-6 pb-3"
                onSubmit={(e) => {
                    e.preventDefault()
                    handleSubmittedForm(e)
                }}
            >

                <div className="d-flex flex-wrap gap-3 gap-sm-4">

                    <div className="d-flex flex-column gap-3" style={{ minWidth: "40vw", width: "680px", maxWidth: "100vw" }}>
                        <FormFieldHeader header={"Task title"} isRequired={true} />
                        <TextInput
                            formData={formData}
                            setFormData={setFormData}
                            label={"title"}
                        />
                        <FormFieldFooter
                            footer={"Enter the name for your task"}
                            errorMessage={errorMsgs["title"]}
                            isError={errorMsgs["title"].length > 0}
                        />
                    </div>

                    <div className="d-flex flex-column gap-3">
                        <FormFieldHeader header={"Task date"} isRequired={true} />
                        <DateSelect
                            formData={formData}
                            setFormData={setFormData}
                            label={"due"}
                        />
                        <FormFieldFooter
                            footer={"Enter date (MM-DD-YYYY)"}
                            errorMessage={errorMsgs["date_due"]}
                            isError={errorMsgs["date_due"].length > 0}
                        />
                    </div>

                    <div className="d-flex flex-column gap-3">
                        <FormFieldHeader header={"Task time"} isRequired={true} />
                        <TimeSelect
                            formData={formData}
                            setFormData={setFormData}
                            label={"due"}
                        />
                        <FormFieldFooter
                            footer={"Enter time in 24 hour format (hh:mm)"}
                            errorMessage={errorMsgs["time_due"]}
                            isError={errorMsgs["time_due"].length > 0}
                        />
                    </div>

                </div>

                <button
                    className={`btn btn-primary p-3`}
                    type="submit"
                    data-bs-toggle="modal" data-bs-target={"#" + modalId}
                >
                    Submit
                </button>

                <SubmitModal
                    id={modalId}
                    showSuccessModal={showSuccessModal}
                    successMsg={"New task submitted!"}
                    errorMsg={"Fail to add task! Please check the error fields."}
                    closeModal={closeModal}
                />

            </form>

        </SubSectionLayout>
    )
}