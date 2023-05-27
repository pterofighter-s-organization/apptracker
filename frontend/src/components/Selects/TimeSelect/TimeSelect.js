//selects
import { HourSelect } from "../HourSelect";
import { MinuteSelect } from "../MinuteSelect";

export default function TimeSelect({ formData, setFormData, label }) {

    return (
        <div className="d-flex flex-wrap gap-3 align-items-center">
            <HourSelect
                formData={formData}
                setFormData={setFormData}
                label={label}
            />
            <MinuteSelect
                formData={formData}
                setFormData={setFormData}
                label={label}
            />
        </div>
    )
}