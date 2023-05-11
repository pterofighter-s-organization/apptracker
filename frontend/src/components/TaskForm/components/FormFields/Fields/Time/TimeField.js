//inputs
import Timebox from "./Timebox"

export default function TimeField(props) {

    const { 
        time,
        setFormData,
        errorMsgs,
        fontSize,
        header,
        footer,
    } = props

    function handleChange(newValue) {
        setFormData(prevFormData => ({ ...prevFormData, "time": newValue }))
    }

    return (
        <div className="d-flex flex-column gap-3">
            <div className={`${fontSize}`}>
                {header}
            </div>
            <Timebox
                time={time}
                handleChange={handleChange}
                fontSize={fontSize}
            />
            {errorMsgs && errorMsgs.length > 0 ?
                <div className={`blockquote-footer text-danger mt-1 ${fontSize}`}>
                    {errorMsgs}
                </div>
                :
                <div className={`blockquote-footer mt-1 ${fontSize}`}>
                    {footer}
                </div>
            }
        </div>
    )
}