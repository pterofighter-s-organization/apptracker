import { useEffect, useState } from 'react'

//components
import { FormFieldHeader } from '../FormFieldHeader'
import { FormFieldFooter } from '../FormFieldFooter'
import { TextInput } from '../Inputs/TextInput'
import { DateTimeSelect } from '../Selects/DateTimeSelect'
import { SubmitModal } from '../Modals/SubmitModal'

//layouts
import { SubSectionLayout } from '../../layouts/SubSectionLayout'

//utils
import * as initializers from '../../utils/initializers'

//helpers
import * as formHelpers from '../../helpers/formHelpers'

export default function TaskForm({ createNewTask, application, errorMsgs }) {

    const [formData, setFormData] = useState(null)
    const [showSuccessModal, setShowSuccessModal] = useState(false)

    useEffect(() => {
        const dateDueData = initializers.dateInfoInitializer(null, "due")
        const basicData = {
            "title": ""
        }
        const newFormData = { ...basicData, ...dateDueData }

        setFormData(newFormData)
        // console.log(newFormData)
    }, [])

    function handleSubmittedForm() {

        // const dateDueCheck = fieldChecks.checkDateTimeField(formData, setErrorMsgs, "due", false, false) //dont allow empty. dont allow dates before today
        // const titleCheck = fieldChecks.checkTextField(formData, setErrorMsgs, "title")

        // createTask({})
        const date_due = formData["month_due"] + "-" + formData["day_due"] + "-" + formData["year_due"] + " " + formData["hour_due"] + ":" + formData["min_due"] + ":" + formData["sec_due"]
        createNewTask({
            "application_id": application.application_id,
            "title": formData["title"],
            "date_due": date_due,
            "company": application.company,
            "position": application.position,
            "section": "task",
            "priority": 0,
        }).then(status => {
            setShowSuccessModal(status)
        })
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
        <SubSectionLayout title={"Creating a new task :"} titleFontSize={"fs-5"}>

            <div className="mb-3 fs-6">
                * ( required fields )
            </div>

            <form
                className="d-flex flex-column gap-3 gap-xl-4 fs-6"
                onSubmit={(e) => {
                    e.preventDefault()
                    handleSubmittedForm(e)
                }}
            >

                <div className="d-flex flex-wrap gap-3 gap-sm-4">

                    <div className="d-flex flex-column gap-3" style={{ minWidth: "40vw", width: "680px", maxWidth: "100vw" }}>
                        <FormFieldHeader header={"Task title"} isRequired={true} />
                        <TextInput
                            value={formData["title"]}
                            updateValue={formHelpers.setInputData(setFormData, "title")}
                        />
                        <FormFieldFooter
                            footer={"Enter the name for your task"}
                            errorMessage={errorMsgs["title"]}
                            isError={errorMsgs["title"].length > 0}
                        />
                    </div>

                    <div className="d-flex flex-column gap-3">
                        <FormFieldHeader header={"Due date"} isRequired={true} />
                        <DateTimeSelect
                            formData={formData}
                            setFormData={setFormData}
                            label={"due"}
                        />
                        <FormFieldFooter
                            footer={"Select date in (MM-DD-YYYY) and (hh:mm) in 24 hour format."}
                            errorMessage={errorMsgs["date_due"]}
                            isError={errorMsgs["date_due"].length > 0}
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
                    errorMsg={"Please check the invalid fields and correct them."}
                    closeModal={closeModal}
                />

            </form>

        </SubSectionLayout>
    )
}