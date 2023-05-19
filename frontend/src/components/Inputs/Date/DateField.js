//components
import MonthBox from "./components/Month/MonthBox"
import DayBox from "./components/Day/DayBox"
import YearBox from "./components/Year/YearBox"

export default function DateField(props) {

    const {
        formData,
        setFormData,
        label,
        fontSize,
        header,
        footer,
        errorMsgs,
    } = props

    const actualLabel = "date" + label

    return (
        <>
            <div className={`${fontSize}`}>
                {header}
            </div>
            <div className="d-flex flex-wrap gap-3 align-items-center">
                <MonthBox
                    formData={formData}
                    setFormData={setFormData}
                    fontSize={fontSize}
                    label={label}
                />
                <DayBox
                    formData={formData}
                    setFormData={setFormData}
                    fontSize={fontSize}
                    label={label}
                />
                <YearBox
                    formData={formData}
                    setFormData={setFormData}
                    fontSize={fontSize}
                    label={label}
                />
            </div>
            {errorMsgs.hasOwnProperty(actualLabel) && errorMsgs[actualLabel] && errorMsgs[actualLabel].length > 0 ?
                <div className={`blockquote-footer text-danger mt-1 ${fontSize}`}>
                    {errorMsgs[actualLabel]}
                </div>
                :
                <div className={`blockquote-footer mt-1 ${fontSize}`}>
                    {footer}
                </div>
            }
        </>
    )
}