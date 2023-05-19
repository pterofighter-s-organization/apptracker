import { useEffect, useState } from "react"

//intializers
import errorDataInitializer from "../../utils/initializers/errorData/errorDataInitializer"
import basicDataInitializer from "../../utils/initializers/basicData/basicDataInitializer"
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

//utils
import { createApplication } from "../../utils/application" //TEMP, replace by api later *

export default function ApplicationForm() {

    const [formData, setFormData] = useState(null)
    const [errorMsgs, setErrorMsgs] = useState(null)
    const [showSuccessModal, setShowSuccessModal] = useState(false)
    //this is to reroute to the application created
    const [id, setId] = useState("")

    useEffect(() => {
        document.title = "New application - Job Tracker App"
        return () => document.title = "Job Tracker App"
    }, [])

    //set application data into form
    useEffect(() => {
            //makes (MM-DD-YYYY) (hh:mm) ex: hour + label: data
            const dateAppliedData = dateTimeInitializer(null, "Applied")
            const newFormData = { ...basicDataInitializer(null), ...dateAppliedData }

            setFormData(newFormData)
            setErrorMsgs(errorDataInitializer())
    }, [])

    function handleSubmittedForm(event) {

        event.preventDefault()

        const dateAppliedCheck = dateTimeValidator(formData, setErrorMsgs, "Applied", true, true) //allow empty? allow dates before today?
        const positionCheck = textValidator(formData, setErrorMsgs, "position")
        const companyCheck = textValidator(formData, setErrorMsgs, "company")
        const salaryCheck = textValidator(formData, setErrorMsgs, "salary")
        const resumeCheck = urlValidator(formData, setErrorMsgs, "resume")
        const coverLetterCheck = urlValidator(formData, setErrorMsgs, "coverLetter")
        const interviewPreparationCheck = urlValidator(formData, setErrorMsgs, "interviewPreparation")

        // console.log("test1", dateAppliedCheck.check, positionCheck, companyCheck, salaryCheck, interviewPreparationCheck, resumeCheck, coverLetterCheck)

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
                "resume": formData["resume"],
                "coverLetter": formData["coverLetter"],
                "interviewPreparation": formData["interviewPreparation"],
                "dateApplied": dateAppliedCheck.value,
                "status": formData["status"],
            }
            // console.log(newAppInfo)
            const response = createApplication(newAppInfo)
            setShowSuccessModal(response.status)
            setId(response.application.id)
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
                {/* <div className="border border-dark p-4 text-center">
                    <div className="h4 mt-1">
                        Tracking a New Application
                    </div>
                </div> */}

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
                        data-bs-toggle="modal" data-bs-target={"#create-form"}
                    >
                        Submit a new Application
                    </button>
                </div>
            </form>

            <RerouteModals
                id={"create-form"}
                successMsg={"Added! You can check out the details of this app or make another one."}
                errorMsg={"Failed! Please check the invalid fields and correct them."}
                closeModal={closeModal}
                buttonLabel={"Go to app"}
                showSuccessModal={showSuccessModal}
                address={"/application/" + id}
            />
        </>
    )
}



