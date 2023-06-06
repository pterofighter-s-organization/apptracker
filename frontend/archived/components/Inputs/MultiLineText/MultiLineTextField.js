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
        // <>
        //     <div className="bg-body" style={{height: "100%"}}>
        //         <MultiLineTextBox
        //             formData={formData}
        //             setFormData={setFormData}
        //             fontSize={fontSize}
        //             label={label}
        //         />
        //     </div>
        //     <div className={`blockquote-footer mt-1 ${fontSize}`}>
        //         {footer}
        //     </div>
        // </>
        <>
            <div className="bg-body rounded-3" style={{ height: "100%" }}>
                <MultiLineTextBox
                    formData={formData}
                    setFormData={setFormData}
                    fontSize={fontSize}
                    label={label}
                />
            </div>
            <div className={`blockquote-footer mt-1 ${fontSize}`}>
                {footer}
            </div>
        </>
    )
}