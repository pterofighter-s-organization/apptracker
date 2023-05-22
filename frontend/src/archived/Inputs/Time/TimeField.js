//inputs
import Timebox from "./components/Timebox"

export default function TimeField(props) {

    const { 
        formData,
        setFormData,
        errorMsgs,
        fontSize,
        header,
        footer,
    } = props

    return (
        <div className="d-flex flex-column gap-3">
            <div className={`${fontSize}`}>
                {header}
            </div>
            <Timebox
                formData={formData}
                setFormData={setFormData}
                fontSize={fontSize}
            />
            {errorMsgs.time && errorMsgs.time.length > 0 ?
                <div className={`blockquote-footer text-danger mt-1 ${fontSize}`}>
                    {errorMsgs.time}
                </div>
                :
                <div className={`blockquote-footer mt-1 ${fontSize}`}>
                    {footer}
                </div>
            }
        </div>
    )
}