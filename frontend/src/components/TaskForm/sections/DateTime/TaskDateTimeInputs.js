
//components
import DateField from "../../../Inputs/Date/DateField"
import TimeField from "../../../Inputs/Time/TimeField"

export default function TaskDateTimeInputs(props) {

    const {
        formData,
        setFormData,
        errorMsgs,
        fontSize,
    } = props

    return (
        <>
            {/* date */}
            <div className="d-flex flex-column gap-3">
                <DateField
                    formData={formData}
                    setFormData={setFormData}
                    label={"Due"}
                    fontSize={fontSize}
                    header={"Date due *"}
                    footer={"Select in (MM-DD-YYYY)"}
                    errorMsgs={errorMsgs}
                />
            </div>
            {/* time */}
            <div className="d-flex flex-column gap-3">
                <TimeField
                    formData={formData}
                    setFormData={setFormData}
                    label={"Due"}
                    fontSize={fontSize}
                    header={"Time due *"}
                    footer={"24 hour format (hh:mm)"}
                    errorMsgs={errorMsgs}
                />
            </div>
        </>
    )
}