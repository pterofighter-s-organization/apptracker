
//inputs
import Datebox from "./Datebox"

export default function DateField(props) {

    const {
        date,
        setFormData,
        errorMsg,
        fontSize,
        header,
        footer,
    } = props

    function handleChange(newValue) {
        setFormData(prevFormData => ({ ...prevFormData, "date": newValue }))
    }

    return (
        <div className="d-flex flex-column gap-3">
            <div className={`${fontSize}`}>
                {header}
            </div>
            <Datebox
                date={date}
                handleChange={handleChange}
                fontSize={fontSize}
            />
            {errorMsg && errorMsg.length > 0 ?
                <div className={`blockquote-footer text-danger mt-1 ${fontSize}`}>
                    {errorMsg}
                </div>
                :
                <div className={`blockquote-footer mt-1 ${fontSize}`}>
                    {footer}
                </div>
            }
        </div>
    )
}