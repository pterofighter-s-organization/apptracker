//components
import DescriptionBox from "./components/DescriptionBox";

export default function DescriptionField(props) {

    const {
        formData,
        setFormData,
        errorMsg,
        fontSize,
        header,
        footer,
    } = props

    return (
        <div className="d-flex flex-column bg-body-secondary w-100 p-4">
            <div className="d-flex flex-column gap-2 ">
                <div className="">
                    Job description :
                </div>
                <hr />
                <DescriptionBox
                    formData={formData}
                    setFormData={setFormData}
                    fontSize={fontSize}
                />
            </div>
        </div>
    )
}