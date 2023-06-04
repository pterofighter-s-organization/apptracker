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
import { findTodayDate } from "../../../utils/dateTimeUtils"

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
                "interview_preparation": application.interview_preparation,
                "resume_link": application.resume_link,
                "cover_letter_link": application.cover_letter_link,
                "description": application.description
            }
            const newFormData = { ...basicData, ...dateAppliedData }

            setFormData(newFormData)
        }
    }, [application])

    function handleSubmittedForm() {

        const date_applied = (formData["month_applied"] + "-" + formData["day_applied"] + "-" +
            formData["year_applied"] + " " + formData["hour_applied"] + ":" + formData["min_applied"] + ":" + formData["sec_applied"])

        updateApplication({
            "user_id": application.user_id,
            "application_id": application.application_id,
            "status": formData["status"],
            "position": formData["position"],
            "company": formData["company"],
            "salary": formData["salary"],
            "description": formData["description"],
            "interview_preparation": formData["interview_preparation"],
            "resume_link": formData["resume_link"],
            "cover_letter_link": formData["cover_letter_link"],
            "date_applied": date_applied,
            "date_created": application.date_created,
            "date_edited": findTodayDate()
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
            <SectionLayout title={"Edit "+(formData["status"] !== "interested" ? "Status And Dates :" : "Status :")}>
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
                    className={`btn btn-primary p-3 py-4 ${"fs-6"}`}
                    type="submit"
                    data-bs-toggle="modal" data-bs-target={"#edit-form"}
                >
                    Save Changes
                </button>
                <Link
                    to={"/application/" + application.application_id}
                    className="btn btn-outline-secondary p-3 py-4 fs-6"
                >
                    Back to app
                </Link>
            </div>

            <RerouteModal
                id={"edit-form"}
                successMsg={"Saved! You may stay to keep editing or locate back to the application."}
                errorMsg={"Please check the invalid fields and correct them."}
                closeModal={closeModal}
                buttonLabel={"Back to app"}
                showSuccessModal={showSuccessModal}
                route={"/application/" + application.application_id}
            />
        </form>
    )
}

