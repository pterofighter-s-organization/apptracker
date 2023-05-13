//inputs
import Textbox from "./Textbox"

export default function TextField(props) {

    //later add texthint, textitle, and width to make this an independent component*
    const {
        formData,
        setFormData,
        errorMsg,
        fontSize,
        header,
        footer,
        fieldWidth,
    } = props

    return (
        <div className="d-flex flex-column gap-3" style={{ width: fieldWidth+"px", maxWidth: "100vw" }}>
            <div className={`${fontSize}`}>
                {header}
            </div>
            <Textbox
                formData={formData}
                setFormData={setFormData}
                fontSize={fontSize}
            />
            {errorMsg.text && errorMsg.text.length > 0 ?
                <div className={`blockquote-footer text-danger mt-1 ${fontSize}`}>
                    {errorMsg.text}
                </div>
                :
                <div className={`blockquote-footer mt-1 ${fontSize}`}>
                    {footer}
                </div>
            }
        </div>
    )
}