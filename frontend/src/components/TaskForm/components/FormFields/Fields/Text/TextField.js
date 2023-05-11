//inputs
import Textbox from "./Textbox"

export default function TextField(props) {

    //later add texthint, textitle, and width to make this an independent component*
    const {
        text,
        setFormData,
        errorMsg,
        fontSize,
        header,
        footer,
    } = props

    function handleChange(newValue) {
        setFormData(prevFormData => ({ ...prevFormData, "text": newValue }))
    }

    return (
        <div className="d-flex flex-column gap-3" style={{ width: "800px", maxWidth: "100vw" }}>
            <div className={`${fontSize}`}>
                {header}
            </div>
            <Textbox
                text={text}
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