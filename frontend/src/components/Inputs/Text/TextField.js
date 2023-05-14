//inputs
import Textbox from "./components/Textbox"

export default function TextField(props) {

    //later add texthint, textitle, and width to make this an independent component*
    /* there is label, width changes on textfield for multiuse */
    const {
        formData,
        setFormData,
        errorMsg,
        fontSize,
        header,
        footer,
        widthInPx,
        minWidthInVw,
        label,
    } = props

    //making sure the text box at least 680px wide
    return (
        <div className="d-flex flex-column gap-3" style={{ minWidth: minWidthInVw+"vw", width: widthInPx+"px", maxWidth: "100vw" }}>
            <div className={`${fontSize}`}>
                {header}
            </div>
            <Textbox
                formData={formData}
                setFormData={setFormData}
                fontSize={fontSize}
                label={label}
            />
            {errorMsg[label] && errorMsg[label].length > 0 ?
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