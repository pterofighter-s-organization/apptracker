//components
import MultiLineTextField from "../../../../../components/Inputs/MultiLineText/MultiLineTextField"

export default function DescriptionEdit(props) {

    const {
        formData,
        setFormData,
        fontSize,
    } = props

    return (
        <div className="d-flex flex-column bg-body-secondary gap-2 w-100 p-4">
            {/* title */}
            <div className="d-flex flex-column gap-0">
                <div className='h5 text-nowrap'>
                    Job description :
                </div>
                <hr className='w-100' />
            </div>

            <div className="d-flex flex-column gap-3" style={{minHeight: "50vh"}}>
                <MultiLineTextField
                    formData={formData}
                    setFormData={setFormData}
                    label={"description"}
                    footer={"Paragraph of details about the app."}
                    fontSize={fontSize}
                />
            </div>
        </div>
    )
}