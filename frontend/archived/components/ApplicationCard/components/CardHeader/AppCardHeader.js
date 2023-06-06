//components
import StatusButtons from "../../../Inputs/Status/components/StatusButtons"

export default function AppCardHeader(props) {

    const {
        formData,
        setFormData,
    } = props

    return (
        <div className="card-header p-4 d-flex flex-wrap gap-3 border border-0">
            <StatusButtons
                formData={formData}
                setFormData={setFormData}
                label={""}
                fontSize={"fs-6"}
            />
        </div>
    )
}