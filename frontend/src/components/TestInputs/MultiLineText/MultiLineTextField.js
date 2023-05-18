//components
import MultiLineTextBox from "./components/MultiLineTextBox";

export default function MultiLineTextField(props) {

    const {
        formData,
        setFormData,
        fontSize,
        label,
        footer,
    } = props;

    //header defined already for a textbox this wide in its parent
    return (
        <>
            <MultiLineTextBox
                formData={formData}
                setFormData={setFormData}
                fontSize={fontSize}
                label={label}
            />
            <div className={`blockquote-footer mt-1 ${fontSize}`}>
                {footer}
            </div>
        </>
    )
}