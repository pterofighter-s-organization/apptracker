//components
import DateField from "../../../../components/TestInputs/Date/DateField"
import TimeField from "../../../../components/TestInputs/Time/TimeField"
import StatusField from "../../../../components/TestInputs/Status/StatusField"


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
            <div className="d-flex flex-column gap-0">
                <div className='h3 text-nowrap'>
                    Status Info :
                </div>
                <hr className='w-100' />
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
                            header={"Application Status *"}
                            footer={"Ex: (Interviewing, Applied, etc...)"}
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