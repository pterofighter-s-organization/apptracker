//components
import AppliedDate from "./components/AppliedDate"
import CreatedDate from "./components/CreatedDate"
import StatusChange from "./components/StatusChange"


export default function StatusInfoFields(props) {

    const {
        dateAppliedData,
        setDateAppliedData,
        dateCreatedData,
        setDateCreatedData,
        fontSize,
        errorMsgs,
        application,
        updateApplication
    } = props

    return (
        <div className="d-flex flex-column gap-lg-3 fs-5">

            {/* the title of this section */}
            <div className="d-flex flex-column gap-0">
                <div className='h3 text-nowrap'>
                    Status Info :
                </div>
                <hr className='w-100' />
            </div>

            {/* the parts in this section */}
            <div className="d-flex flex-wrap gap-3 gap-md-4 gap-xl-5 align-items-center">
                <StatusChange
                    application={application}
                    updateApplication={updateApplication}
                    fontSize={fontSize}
                />
                <AppliedDate
                    formData={dateAppliedData}
                    setFormData={setDateAppliedData}
                    fontSize={fontSize}
                    errorMsgs={errorMsgs}
                />
                <CreatedDate
                    formData={dateCreatedData}
                    setFormData={setDateCreatedData}
                    fontSize={fontSize}
                    errorMsgs={errorMsgs}
                />
            </div>

        </div>
    )
}