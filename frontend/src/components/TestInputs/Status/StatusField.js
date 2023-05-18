
//components
import StatusButtons from "./components/StatusButtons"

export default function StatusField(props) {

    const {
        formData,
        setFormData,
        label,
        fontSize,
        header,
        footer,
    } = props

    return (
        <>
            <div className={`${fontSize}`}>
                {header}
            </div>
            <div className="">
                <StatusButtons
                    formData={formData}
                    setFormData={setFormData}
                    label={label}
                    fontSize={fontSize}
                />
            </div>
            <div className={`blockquote-footer mt-2 ${fontSize}`}>
                {footer}
            </div>
        </>
    )
}