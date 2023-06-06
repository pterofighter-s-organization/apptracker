
//components
import StatusButtons from "./components/StatusButtons"

export default function StatusField(props) {

    const {
        formData,
        setFormData,
        label,
        fontSize,
    } = props

    return (
        <>
            <div className={`${fontSize}`}>
                Application status *
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
                Select a status from dropdown
            </div>
        </>
    )
}