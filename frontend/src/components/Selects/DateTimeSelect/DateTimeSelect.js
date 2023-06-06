//selects
import { DaySelect } from "../DaySelect";
import { MonthSelect } from "../MonthSelect";
import { YearSelect } from "../YearSelect";
import { HourSelect } from "../HourSelect";
import { MinuteSelect } from "../MinuteSelect";

//helpers
import * as formHelpers from "../../../helpers/formHelpers";

//utils
import * as formatters from "../../../utils/formatters"


export default function DateTimeSelect({ formData, setFormData, label }) {

    return (
        <div className="d-flex flex-wrap gap-3 gap-xl-4">
            <div className="d-flex flex-wrap gap-3 align-items-center">
                <MonthSelect
                    value={formData[formatters.labelFormatter("month", label)]}
                    updateValue={formHelpers.setInputData(setFormData, formatters.labelFormatter("month", label))}
                />
                <DaySelect
                    value={formData[formatters.labelFormatter("day", label)]}
                    month={formData[formatters.labelFormatter("month", label)]}
                    year={formData[formatters.labelFormatter("year", label)]}
                    updateValue={formHelpers.setInputData(setFormData, formatters.labelFormatter("day", label))}
                />
                <YearSelect
                    value={formData[formatters.labelFormatter("year", label)]}
                    updateValue={formHelpers.setInputData(setFormData, formatters.labelFormatter("year", label))}
                />
            </div>
            <div className="d-flex flex-wrap gap-3 align-items-center">
                <HourSelect
                    value={formData[formatters.labelFormatter("hour", label)]}
                    updateValue={formHelpers.setInputData(setFormData, formatters.labelFormatter("hour", label))}
                />
                <MinuteSelect
                    value={formData[formatters.labelFormatter("min", label)]}
                    updateValue={formHelpers.setInputData(setFormData, formatters.labelFormatter("min", label))}
                />
            </div>
        </div>
    )
}