//components
import DateField from "../../../../components/Inputs/Date/DateField"
import TimeField from "../../../../components/Inputs/Time/TimeField"
import StatusField from "../../../../components/Inputs/Status/StatusField"


export default function StatusAndDatesEdit(props) {

    const {
        formData,
        setFormData,
        fontSize,
        errorMsgs
    } = props

    return (
        <div className="d-flex flex-column gap-lg-3">

            {/* the title of this section */}
            <div className="d-flex flex-column gap-0 mb-3">
                {formData["status"] !== "interested" ?
                    <div className='h4 text-nowrap'>
                        New Status and Dates:
                    </div>
                    :
                    <div className='h4 text-nowrap'>
                        New Status:
                    </div>
                }
                <hr className='w-100' />
                <div className="">
                    * ( required fields )
                </div>
            </div>

            {/* the parts in this section */}
            <div className="d-flex flex-wrap gap-3 gap-md-4 gap-xl-5 align-items-center">

                {/* status */}
                <div className="d-flex flex-wrap gap-4 gap-xl-5 bg-body-secondary align-self-stretch p-4">
                    <div className="d-flex flex-column gap-4" style={{ maxWidth: "100vw" }}>
                        <StatusField
                            formData={formData}
                            setFormData={setFormData}
                            label={""}
                            fontSize={fontSize}
                        />
                    </div>
                </div>

                {formData["status"] !== "interested" ?
                    <div className="d-flex flex-wrap gap-4 gap-xl-5 bg-body-secondary p-4">
                        {/* date */}
                        <div className="d-flex flex-column gap-3">
                            <DateField
                                formData={formData}
                                setFormData={setFormData}
                                label={"Applied"}
                                fontSize={fontSize}
                                header={"Applied date"}
                                footer={"Select in (MM-DD-YYYY)"}
                                errorMsgs={errorMsgs}
                            />
                        </div>
                        {/* time */}
                        <div className="d-flex flex-column gap-3">
                            <TimeField
                                formData={formData}
                                setFormData={setFormData}
                                label={"Applied"}
                                fontSize={fontSize}
                                header={"Applied time"}
                                footer={"24 hour format (hh:mm)"}
                                errorMsgs={errorMsgs}
                            />
                        </div>
                    </div>
                    :
                    <></>
                }

                {/* createdDate */}
                {/* <div className="d-flex flex-wrap gap-4 gap-xl-5 bg-body-secondary p-4">

                    <div className="d-flex flex-column gap-3">
                        <DateField
                            formData={formData}
                            setFormData={setFormData}
                            label={"Created"}
                            fontSize={fontSize}
                            header={"Created date *"}
                            footer={"Select in (MM-DD-YYYY)"}
                            errorMsgs={errorMsgs}
                        />
                    </div>

                    <div className="d-flex flex-column gap-3">
                        <TimeField
                            formData={formData}
                            setFormData={setFormData}
                            label={"Created"}
                            fontSize={fontSize}
                            header={"Created time *"}
                            footer={"24 hour format (hh:mm)"}
                            errorMsgs={errorMsgs}
                        />
                    </div>
                </div> */}

            </div>
        </div >
    )
}