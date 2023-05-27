//components
import Urlbox from "./components/Urlbox";

export default function UrlField(props) {

    /* there is label, width changes on textfield for multiuse */
    const {
        formData,
        setFormData,
        errorMsg,
        fontSize,
        header,
        footer,
        width,
        minWidth,
        label,
    } = props

    //making sure the text box at least 680px wide
    return (
        <div className="d-flex flex-column gap-3" style={{ minWidth: minWidth, width: width, maxWidth: "100vw" }}>
            <div className={`${fontSize}`}>
                {header}
            </div>
            <Urlbox
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