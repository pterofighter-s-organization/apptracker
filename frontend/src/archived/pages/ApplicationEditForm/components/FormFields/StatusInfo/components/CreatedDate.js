//components
import DateField from "../../../../../../components/Inputs/Date/DateField"
import TimeField from "../../../../../../components/Inputs/Time/TimeField"


export default function CreatedDate (props) {

    const {
        formData,
        setFormData,
        errorMsgs,
        fontSize,
    } = props

    return (
        <div className="d-flex flex-wrap gap-4 gap-xl-5 bg-body-secondary p-4">
            <DateField
                formData={formData}
                setFormData={setFormData}
                errorMsg={errorMsgs}
                fontSize={fontSize}
                header={"Created date *"}
                footer={"Select in (MM DD YYYY)"}
            />
            <TimeField
                formData={formData}
                setFormData={setFormData}
                errorMsgs={errorMsgs}
                fontSize={fontSize}
                label={"time"}
                header={"Created time *"}
                footer={"24 hr format (hh:mm)"}
            />
        </div>
    )

}