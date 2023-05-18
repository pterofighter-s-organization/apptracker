
//components
import TextBox from "./components/TextBox"

export default function TextField(props) {

    const {
        formData,
        setFormData,
        label,
        fontSize,
        header,
        footer,
        errorMsgs
    } = props

    return (
        <>
            <div className={`${fontSize}`}>
                {header}
            </div>
            <TextBox
                formData={formData}
                setFormData={setFormData}
                fontSize={fontSize}
                label={label}
            />
            {errorMsgs.hasOwnProperty(label) && errorMsgs[label] && errorMsgs[label].length > 0 ?
                <div className={`blockquote-footer text-danger mt-1 ${fontSize}`}>
                    {errorMsgs[label]}
                </div>
                :
                <div className={`blockquote-footer mt-1 ${fontSize}`}>
                    {footer}
                </div>
            }
        </>
    )
}