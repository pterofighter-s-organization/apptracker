import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"

//hooks
import useApplicationManager from "../../hooks/useApplicationManager"

//initializers
import basicDataInitializer from "../../utils/initializers/basicData/basicDataInitializer"
import errorDataInitializer from "../../utils/initializers/errorData/errorDataInitializer"
import dateTimeInitializer from "../../utils/initializers/dateTime/dateTimeInitializer"

//sections
import StatusAndDatesEdit from "./sections/StatusAndDates/StatusAndDatesEdit.js"
import ApplicationInfosEdit from "./sections/ApplicationInfos/ApplicationInfosEdit"

//validators
import textValidator from "../../utils/validators/text/textValidator"
import dateTimeValidator from "../../utils/validators/dateTime/dateTimeValidator"
import urlValidator from "../../utils/validators/url/urlValidator"

//components
import RerouteModals from "../../components/Modals/RerouteModals/RerouteModals"

export default function ApplicationEditForm() {

    const { id } = useParams()

    const [formData, setFormData] = useState(null)
    const [errorMsgs, setErrorMsgs] = useState(null)
    const [showSuccessModal, setShowSuccessModal] = useState(false)

    const { application, updateApplication } = useApplicationManager(parseInt(id))

    useEffect(() => {
        if (application) {
            document.title = "Editing (" + application.position + ", " + application.company + ") - Job Tracker App"
        }
        return () => document.title = "Job Tracker App"
    }, [id, application])

    //set application data into form
    useEffect(() => {
        if (application) {
            //makes (MM-DD-YYYY) (hh:mm) ex: hour + label: data
            const dateAppliedData = dateTimeInitializer(application.dateApplied, "_applied")
            const newFormData = { ...basicDataInitializer(application), ...dateAppliedData }

            setFormData(newFormData)
            setErrorMsgs(errorDataInitializer())
        }
    }, [application])

    function handleSubmittedForm(event) {

        event.preventDefault()

        const dateAppliedCheck = dateTimeValidator(formData, setErrorMsgs, "_applied", true, true) //allow empty? allow dates before today?
        const positionCheck = textValidator(formData, setErrorMsgs, "position")
        const companyCheck = textValidator(formData, setErrorMsgs, "company")
        const salaryCheck = textValidator(formData, setErrorMsgs, "salary")
        const resumeCheck = urlValidator(formData, setErrorMsgs, "resume")
        const coverLetterCheck = urlValidator(formData, setErrorMsgs, "cover_letter_link")
        const interviewPreparationCheck = urlValidator(formData, setErrorMsgs, "interview_preparation_link")

        // console.log("test1", dateAppliedCheck, dateCreatedCheck, positionCheck, companyCheck, salaryCheck)

        const allChecks = (
            dateAppliedCheck.check && positionCheck.check && 
            companyCheck.check && salaryCheck.check && resumeCheck.check 
            && interviewPreparationCheck.check && coverLetterCheck.check
        )

        if (allChecks) {
            const newAppInfo = {
                "position": formData["position"],
                "company": formData["company"],
                "salary": formData["salary"],
                "description": formData["description"],
                "resume_link": formData["resume_link"],
                "cover_letter_link": formData["cover_letter_link"],
                "interview_preparation_link": formData["interview_preparation_link"],
                "date_applied": dateAppliedCheck.value,
                "status": formData["status"],
            }
            // console.log(newAppInfo)
            setShowSuccessModal(updateApplication(application, newAppInfo))
        }
    }

    //modals
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
            <form
                className="d-flex flex-column gap-5 w-100 my-3 mt-xl-0"
                style={{ padding: "1.25vw 2.5vw" }}
                onSubmit={(e) => {
                    handleSubmittedForm(e)
                }}
            >
                {/* sections */}
                <StatusAndDatesEdit
                    formData={formData}
                    setFormData={setFormData}
                    fontSize={"fs-6"}
                    errorMsgs={errorMsgs}
                />
                <ApplicationInfosEdit
                    formData={formData}
                    setFormData={setFormData}
                    fontSize={"fs-6"}
                    errorMsgs={errorMsgs}
                />

                {/* buttons */}
                <div className="d-flex flex-column gap-3">
                    <button
                        className={`btn btn-primary p-3 py-4 ${"fs-6"}`}
                        type="submit"
                        data-bs-toggle="modal" data-bs-target={"#edit-form"}
                    >
                        Save Changes
                    </button>
                    <Link
                        to={"/application/" + application.id}
                        className="btn btn-outline-secondary p-3 py-4 fs-6"
                    >
                        Back to app
                    </Link>
                </div>
            </form>

            <RerouteModals
                id={"edit-form"}
                successMsg={"Saved! You may stay to keep editing or locate back to the application."}
                errorMsg={"Unsucessful! Please check the invalid fields and correct them."}
                closeModal={closeModal}
                buttonLabel={"Back to app"}
                showSuccessModal={showSuccessModal}
                address={"/application/" + application.application_id}
            />
        </>
    )
}