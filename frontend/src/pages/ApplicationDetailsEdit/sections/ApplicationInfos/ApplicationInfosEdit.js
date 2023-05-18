//components
import MultiLineTextField from "../../../../components/TestInputs/MultiLineText/MultiLineTextField"
import TextField from "../../../../components/TestInputs/Text/TextField"
import UrlField from "../../../../components/TestInputs/Url/UrlField"


export default function ApplicationInfosEdit(props) {

    const {
        formData,
        setFormData,
        fontSize,
        errorMsgs
    } = props

    return (
        <div className="d-flex flex-column gap-lg-3">

            {/* title */}
            <div className="d-flex flex-column gap-0">
                <div className='h3 text-nowrap'>
                    Application Info :
                </div>
                <hr className='w-100' />
            </div>

            <div className="d-flex flex-column gap-3 gap-md-4 gap-xl-5">
                {/* basic info and links */}
                {/* start (1) : */}
                <div className="d-flex flex-column flex-xl-row align-items-stretch gap-3 gap-md-4 gap-xl-5">

                    {/* basic info */}
                    <div className="d-flex flex-column bg-body-secondary gap-2 w-100 p-4">

                        {/* title of basic info */}
                        <div className="d-flex flex-column gap-0">
                            <div className='h4 text-nowrap'>
                                Job Information :
                            </div>
                            <hr className='w-100' />
                        </div>

                        <div className="d-flex flex-column gap-3" style={{ minWidth: "100%", width: "100%", maxWidth: "100vw" }}>
                            <TextField
                                formData={formData}
                                setFormData={setFormData}
                                label={"position"}
                                fontSize={fontSize}
                                header={"Position applied *"}
                                footer={"Ex: (Software Engineer, Web Developer, etc...)"}
                                errorMsgs={errorMsgs}
                            />
                        </div>
                        <div className="d-flex flex-column gap-3" style={{ minWidth: "100%", width: "100%", maxWidth: "100vw" }}>
                            <TextField
                                formData={formData}
                                setFormData={setFormData}
                                label={"company"}
                                fontSize={fontSize}
                                header={"Company applied *"}
                                footer={"Ex: (Google, Amazon, etc...)"}
                                errorMsgs={errorMsgs}
                            />
                        </div>
                        <div className="d-flex flex-column gap-3" style={{ minWidth: "250px", width: "250px", maxWidth: "100vw" }}>
                            <TextField
                                formData={formData}
                                setFormData={setFormData}
                                label={"salary"}
                                fontSize={fontSize}
                                header={"Salary listed *"}
                                footer={"Ex: (20k-30k)"}
                                errorMsgs={errorMsgs}
                            />
                        </div>

                    </div>

                    {/* links info */}
                    <div className="d-flex flex-column bg-body-secondary gap-2 w-100 p-4">
                        {/* title */}
                        <div className="d-flex flex-column gap-0">
                            <div className='h4 text-nowrap'>
                                Links to documents used :
                            </div>
                            <hr className='w-100' />
                        </div>

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

                    </div>

                </div>
                {/* end of (1) */}

                {/* description */}
                <div className="d-flex flex-column bg-body-secondary gap-2 w-100 p-4">
                    {/* title */}
                    <div className="d-flex flex-column gap-0">
                        <div className='h4 text-nowrap'>
                            Job description :
                        </div>
                        <hr className='w-100' />
                    </div>

                    <div className="d-flex flex-column gap-3">
                        <MultiLineTextField
                            formData={formData}
                            setFormData={setFormData}
                            label={"description"}
                            footer={"Paragraph of details about the job listed on the app."}
                        />
                    </div>
                </div>

            </div>

        </div>
    )
}