import { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"

//components
import { RerouteModal } from "../../../components/Modals/RerouteModal"

//sub-sections
import { StatusAndDateFields, ApplicationInfoFields } from "../sections"

//hooks
import useApplicationManager from "../../../hooks/useApplicationManager"

//layouts
import { SectionLayout } from "../../../layouts/SectionLayout"

//utils
import * as initializers from "../../../utils/initializers"
import * as dateTimeUtils from "../../../utils/dateTimeUtils"

export default function EditApplicationForm() {

    const { id } = useParams()

    const [formData, setFormData] = useState(null)
    const [showSuccessModal, setShowSuccessModal] = useState(false)

    const { application, updateApplication, errorMsgs, isLoading } = useApplicationManager(parseInt(id))

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
            const dateAppliedData = initializers.dateInfoInitializer(application.date_applied, "applied")
            const basicData = {
                "status": application.status,
                "position": application.position,
                "company": application.company,
                "salary": application.salary,
                "application_link": application.application_link,
                "resume_link": application.resume_link,
                "cover_letter_link": application.cover_letter_link,
                "description": application.description
            }
            const newFormData = { ...basicData, ...dateAppliedData }

            setFormData(newFormData)
        }
    }, [application])

    function handleSubmittedForm() {

        updateApplication({
            "user_id": application.user_id,
            "application_id": application.application_id,
            "status": formData["status"],
            "position": formData["position"],
            "company": formData["company"],
            "salary": formData["salary"],
            "description": formData["description"],
            "application_link": formData["application_link"],
            "resume_link": formData["resume_link"],
            "cover_letter_link": formData["cover_letter_link"],
            "date_applied": dateTimeUtils.convertInputToISO(formData, "applied"),
            "date_created": application.date_created,
            "date_edited": dateTimeUtils.findTodayUTCDate()
        }).then((status) => {
            setShowSuccessModal(status)
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
        return <>Application Data Not Found!</>
    }

    return (
        <form
            className="d-flex flex-column gap-5 w-100 mt-xl-0 fs-6"
            onSubmit={(e) => {
                e.preventDefault()
                handleSubmittedForm()
            }}
        >
            <SectionLayout title={"Edit " + (formData["status"] !== "interested" ? "Status And Dates :" : "Status :")}>
                <div className="d-flex flex-wrap gap-3 gap-md-4 gap-xl-5 mb-3">
                    <div className="">
                        * ( required fields )
                    </div>
                    <div className="d-flex flex-wrap gap-3">
                        <div className="">
                            Important: ( status won't be automatically updated unless you saved changes )
                        </div>
                        {/* <div className="">
                            ( applied date wont save unless everything is selected )
                        </div> */}
                    </div>
                </div>
                <StatusAndDateFields
                    formData={formData}
                    setFormData={setFormData}
                    errorMsgs={errorMsgs}
                />
            </SectionLayout>

            <SectionLayout title={"Edit Application Info :"}>
                <div className="d-flex flex-wrap gap-3 gap-md-4 gap-xl-5 mb-3">
                    <div className="">
                        * ( required fields )
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
                    data-bs-toggle="modal" data-bs-target={"#edit-form"}
                >
                    <div className="form-button-label">
                        Save changes
                    </div>
                </button>
                <Link
                    to={"/application/" + application.application_id}
                    className="btn btn-outline-secondary p-3 py-4"
                >
                    <div className="form-button-label">
                        Back to app
                    </div>
                </Link>
            </div>

            <RerouteModal
                modalId={"edit-form"}
                messages={{
                    success: "Saved! You may stay to keep editing or locate back to the application.",
                    error: "Please check the invalid fields and correct them.",
                }}
                buttonLabel={"Back to app"}
                route={"/application/" + application.application_id}
                closeModal={closeModal}
                showSuccessModal={showSuccessModal}
            />
        </form>
    )
}

