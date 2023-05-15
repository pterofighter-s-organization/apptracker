//components
import DescriptionBox from "./components/DescriptionBox";

export default function DescriptionField(props){

    const {
        formData,
        setFormData,
        errorMsg,
        fontSize,
        header,
        footer,
    } = props

    return (
        <div className="d-flex flex-column gap-2 ">
            <div className="">
                Job description :
            </div>
            <hr />
            <DescriptionBox
                formData={formData}
            />
        </div>
    )
}