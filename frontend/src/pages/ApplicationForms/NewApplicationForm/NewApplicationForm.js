import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

//components
import { RerouteModal } from "../../../components/Modals/RerouteModal"

//layouts
import { SectionLayout } from "../../../layouts/SectionLayout"

//sub-sections
import { StatusAndDateFields, ApplicationInfoFields } from "../sections"

//hooks
import useApplicationManager from "../../../hooks/useApplicationManager"

//utils
import * as initializers from "../../../utils/initializers"
import * as dateTimeUtils from "../../../utils/dateTimeUtils"
import { APP_STATUSES } from "../../../utils/constants"

export default function NewApplicationForm() {

    const { givenStatus } = useParams()
    // console.log(givenStatus, "status")

    const [formData, setFormData] = useState(null)
    const [showSuccessModal, setShowSuccessModal] = useState(false)
    const [errorModalMessage, setErrorModalMessage] = useState("")

    const { application, createApplication, errorMsgs, isLoading } = useApplicationManager(null)

    useEffect(() => {
        document.title = "New application - Job Tracker App"
        return () => document.title = "Job Tracker App"
    }, [])

    useEffect(() => {
        const dateAppliedData = initializers.dateInfoInitializer(null, "applied")
        const basicData = {
            "status": (APP_STATUSES.includes(givenStatus)) ? givenStatus : "interested",
            "position": "",
            "company": "",
            "salary": "",
            "application_link": "",
            "resume_link": "",
            "cover_letter_link": "",
            "description": ""
        }
        const newFormData = { ...basicData, ...dateAppliedData }

        setFormData(newFormData)
    }, [givenStatus])

    function handleSubmittedForm() {

        createApplication({
            "user_id": 1,
            "status": formData["status"],
            "position": formData["position"],
            "company": formData["company"],
            "salary": formData["salary"],
            "description": formData["description"],
            "application_link": formData["application_link"],
            "resume_link": formData["resume_link"],
            "cover_letter_link": formData["cover_letter_link"],
            "date_applied": dateTimeUtils.convertInputToISO(formData, "applied"),
            "date_created": dateTimeUtils.findTodayUTCDate(),
            "date_edited": dateTimeUtils.findTodayUTCDate(),
        }).then((response) => {
            setShowSuccessModal(response.status)
            setErrorModalMessage(response.errorModalMessage)
        })
    }

    //modals
    function closeModal() {
        setTimeout(() => {
            setShowSuccessModal(false)
        }, 200)
    }

    if (isLoading) {
        return <>Loading...</>
    }

    if (!formData) {
        return <>Form unable to load!</>
    }

    return (
        <form
            className="d-flex flex-column gap-5 w-100 mt-xl-0 fs-6"
            onSubmit={(e) => {
                e.preventDefault()
                handleSubmittedForm()
            }}
        >
            <SectionLayout title={"Select " + (formData["status"] !== "interested" ? "Status And Dates" : "Status")}>
                <div className="d-flex flex-wrap gap-3 gap-md-4 gap-xl-5 mb-3">
                    <div className="">
                        * ( required fields )
                    </div>
                    <div className="d-flex flex-wrap gap-3">
                        <div className="">
                            What stage are you at with this application?
                        </div>
                        {formData["status"] !== "interested" ?
                            <div className="">
                                Important: ( applied date wont save unless everything is selected )
                            </div>
                            :
                            <></>
                        }
                    </div>
                </div>
                <StatusAndDateFields
                    formData={formData}
                    setFormData={setFormData}
                    errorMsgs={errorMsgs}
                />
            </SectionLayout>

            <SectionLayout title={"Enter Application Info"}>
                <div className="d-flex flex-wrap gap-3 gap-md-4 gap-xl-5 mb-3">
                    <div className="">
                        * ( required fields )
                    </div>
                    <div className="d-flex flex-wrap gap-3">
                        <div className="">
                            Tip: ( links are recommended for better tracking )
                        </div>
                    </div>
                </div>
                <ApplicationInfoFields
                    formData={formData}
                    setFormData={setFormData}
                    errorMsgs={errorMsgs}
                />
            </SectionLayout>

            {/* buttons */}
            <div className="d-flex flex-column gap-3">
                <button
                    className={`btn btn-primary p-3 py-4`}
                    type="submit"
                    data-bs-toggle="modal" data-bs-target={"#new-form"}
                >
                    <div className="form-button-label">
                        Submit
                    </div>
                </button>
            </div>

            <RerouteModal
                modalId={"new-form"}
                messages={{
                    success: "Submitted! You may stay to track more apps or locate to the application.",
                    error: errorModalMessage,
                }}
                buttonLabel={"Go to app"}
                route={"/application/" + ((application) ? application.application_id : "")}
                closeModal={closeModal}
                showSuccessModal={showSuccessModal}
            />
        </form>
    )
}