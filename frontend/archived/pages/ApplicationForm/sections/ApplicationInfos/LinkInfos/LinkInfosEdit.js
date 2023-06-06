//components
import UrlField from "../../../../../components/Inputs/Url/UrlField"

export default function LinkInfosEdit(props) {

    const {
        formData,
        setFormData,
        fontSize,
        errorMsgs
    } = props

    return (
        <div className="d-flex flex-column bg-body-secondary gap-2 w-100 p-4">
            {/* title */}
            <div className="d-flex flex-column gap-0">
                <div className='h5 text-nowrap'>
                    Links to documents used :
                </div>
                <hr className='w-100' />
            </div>

            {formData["status"] !== "interested" ?
                <>
                    <div className="d-flex flex-column gap-3" style={{ minWidth: "100%", width: "100%", maxWidth: "100vw" }}>
                        <UrlField
                            formData={formData}
                            setFormData={setFormData}
                            label={"resume"}
                            fontSize={fontSize}
                            header={"Resume link"}
                            footer={"Ex: (link to google doc)"}
                            errorMsgs={errorMsgs}
                        />
                    </div>
                    <div className="d-flex flex-column gap-3" style={{ minWidth: "100%", width: "100%", maxWidth: "100vw" }}>
                        <UrlField
                            formData={formData}
                            setFormData={setFormData}
                            label={"coverLetter"}
                            fontSize={fontSize}
                            header={"Cover letter link"}
                            footer={"Ex: (link to google doc)"}
                            errorMsgs={errorMsgs}
                        />
                    </div>
                    <div className="d-flex flex-column gap-3" style={{ minWidth: "100%", width: "100%", maxWidth: "100vw" }}>
                        <UrlField
                            formData={formData}
                            setFormData={setFormData}
                            label={"interviewPreparation"}
                            fontSize={fontSize}
                            header={"Interview prep link"}
                            footer={"Ex: (link to google doc)"}
                            errorMsgs={errorMsgs}
                        />
                    </div>
                </>
                :
                <div>
                    Not needed for interested applications
                </div>
            }

        </div>
    )
}