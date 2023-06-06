
//components
import HourBox from "./components/Hour/HourBox"
import MinBox from "./components/Min/MinBox"


export default function TimeField(props) {

    const {
        formData,
        setFormData,
        label,
        fontSize,
        header,
        footer,
        errorMsgs
    } = props

    const actualLabel = "time" + label

    return (
        <>
            <div className={`${fontSize}`}>
                {header}
            </div>
            <div className="d-flex flex-wrap gap-3 align-items-center">
                <HourBox
                    formData={formData}
                    setFormData={setFormData}
                    fontSize={fontSize}
                    label={label}
                />
                <MinBox
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