//selects
import { DaySelect } from "../DaySelect";
import { MonthSelect } from "../MonthSelect";
import { YearSelect } from "../YearSelect";

export default function DateSelect({ formData, setFormData, label }) {

    return (
        <div className="d-flex flex-wrap gap-3 align-items-center">
            <MonthSelect
                formData={formData}
                setFormData={setFormData}
                label={label}
            />
            <DaySelect
                formData={formData}
                setFormData={setFormData}
                label={label}
            />
            <YearSelect
                formData={formData}
                setFormData={setFormData}
                label={label}
            />
        </div>
    )
}