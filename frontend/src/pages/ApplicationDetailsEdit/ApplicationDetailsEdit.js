import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

//hooks
import useApplicationManager from "../../hooks/useApplicationManager"
import { dateTimeInitializer } from "./helpers/initializers"

//sections
import StatusAndDatesEdit from "./sections/StatusAndDates/StatusAndDatesEdit.js"
import ApplicationInfosEdit from "./sections/ApplicationInfos/ApplicationInfosEdit"

//validators
import textValidator from "./validators/text/textValidator"
import dateTimeValidator from "./validators/dateTime/dateTimeValidator"

//utils
import { dateFormat } from "../../utils/date"

//components
import RerouteModals from "../../components/Modals/RerouteModals/RerouteModals"

export default function ApplicationDetailsEdit() {

    const { id } = useParams()
    const [formData, setFormData] = useState(null)
    const [errorMsgs, setErrorMsgs] = useState(null)
    const [showSuccessModal, setShowSuccessModal] = useState(false)
    const { application, updateApplication } = useApplicationManager(parseInt(id))

    //updates when status changed
    useEffect(() => {
        //status = new status, app.status is the old status
        if (formData && formData["status"] !== application.status) {

            const status = formData["status"]
            if (status === "applied" && application.status === "interested") {
                const today = dateFormat("today")
                const newAppInfo = {
                    "status": status,
                    "dateApplied": today.dateFormatted,
                }

                updateApplication(application, newAppInfo)

            } else {
                const newAppInfo = {
                    "status": status
                }
                updateApplication(application, newAppInfo)
            }
        }
    }, [formData, application, updateApplication])

    useEffect(() => {

        if (application) {
            //makes (MM-DD-YYYY) (hh:mm) ex: hour + label: data
            const dateAppliedData = dateTimeInitializer(application.dateApplied, "Applied")

            const basicData = {
                "status": application.status,
                "position": application.position,
                "company": application.company,
                "salary": application.salary,
                "interviewPreparation": application.interviewPreparation,
                "resume": application.resume,
                "coverLetter": application.coverLetter,
                "description": application.description,
            }

            const newFormData = { ...basicData, ...dateAppliedData }

            setFormData(newFormData)
            setErrorMsgs({
                "dateApplied": "",
                "timeApplied": "",
                "position": "",
                "company": "",
                "salary": "",
            })
        }

    }, [application])

    function handleSubmittedForm(event) {

        event.preventDefault()

        const dateAppliedCheck = dateTimeValidator(formData, setErrorMsgs, "Applied")
        const positionCheck = textValidator(formData, setErrorMsgs, "position")
        const companyCheck = textValidator(formData, setErrorMsgs, "company")
        const salaryCheck = textValidator(formData, setErrorMsgs, "salary")

        // console.log("test1", dateAppliedCheck, dateCreatedCheck, positionCheck, companyCheck, salaryCheck)

        if (dateAppliedCheck.check && positionCheck && companyCheck && salaryCheck) {

            const newAppInfo = {
                "position": formData["position"],
                "company": formData["company"],
                "salary": formData["salary"],
                "description": formData["description"],
                "resume": formData["resume"],
                "coverLetter": formData["coverLetter"],
                "interviewPreparation": formData["interviewPreparation"],
                "dateApplied": dateAppliedCheck.dateTime,
            }

            // console.log(newAppInfo)

            setShowSuccessModal(updateApplication(application, newAppInfo))
        }
    }

    function closeModal() {
        setTimeout(() => {
            setShowSuccessModal(false)
        },200)
    }

    //make a reroute instead of link for modal

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
                <button
                    className={`btn btn-primary p-3 py-4 ${"fs-5"}`}
                    type="submit"
                    data-bs-toggle="modal" data-bs-target={"#reroute-message"}
                >
                    Edit form
                </button>
            </form>
            <RerouteModals
                successMsg={"Successfully edited application! You may stay to keep editing or locate back to the application."}
                errorMsg={"Unsucessful! Please check the invalid fields and correct them."}
                closeModal={closeModal}
                buttonLabel={"Back to app"}
                showSuccessModal={showSuccessModal}
                address={"/application/"+application.id}
            />
        </>
    )
}