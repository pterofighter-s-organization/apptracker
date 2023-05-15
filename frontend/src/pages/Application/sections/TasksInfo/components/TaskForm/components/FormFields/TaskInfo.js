
//input components
import TextField from '../../../../../../../../components/Inputs/Text/TextField';
import DateField from '../../../../../../../../components/Inputs/Date/DateField';
import TimeField from '../../../../../../../../components/Inputs/Time/TimeField';

export default function TaskInfo(props) {

    const {
        formData,
        setFormData,
        errorMsgs,
        fontSize,
    } = props

    return (
        <div className="d-flex flex-wrap gap-3 gap-sm-4">
            {/* there is label, width changes on textfield for multiuse */}
            <TextField
                formData={formData}
                setFormData={setFormData}
                errorMsg={errorMsgs}
                fontSize={fontSize}
                minWidthInVw={40} //min vw
                widthInPx={680} // px
                label={"text"}
                header={"Task title *"}
                footer={"Enter the name for your task"}
            />
            <DateField
                formData={formData}
                setFormData={setFormData}
                errorMsg={errorMsgs}
                fontSize={fontSize}
                header={"Date of task *"}
                footer={"Select in (MM DD YYYY)"}
            />
            <TimeField
                formData={formData}
                setFormData={setFormData}
                errorMsgs={errorMsgs}
                fontSize={fontSize}
                label={"time"}
                header={"Time *"}
                footer={"24 hr format (hh:mm)"}
            />
        </div>
    )
}