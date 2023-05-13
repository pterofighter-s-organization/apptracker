
//inputs
import Datebox from "./Datebox"

export default function DateField(props) {

    const {
        formData,
        setFormData,
        errorMsg,
        fontSize,
        header,
        footer,
    } = props

    return (
        <div className="d-flex flex-column gap-3">
            <div className={`${fontSize}`}>
                {header}
            </div>
            <Datebox
                formData={formData}
                setFormData={setFormData}
                fontSize={fontSize}
            />
            {errorMsg.date && errorMsg.date.length > 0 ?
                <div className={`blockquote-footer text-danger mt-1 ${fontSize}`}>
                    {errorMsg.date}
                </div>
                :
                <div className={`blockquote-footer mt-1 ${fontSize}`}>
                    {footer}
                </div>
            }
        </div>
    )
}