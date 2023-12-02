



//css
import "./FormLayout.css"

export default function FormLayout({ children }) {

    //form components
    const [header, fields] = children

    return (
        <div className="form-layout">
            <div className="form-layout-section form-layout-header">
                {header}
            </div>
            <div className="form-layout-section form-layout-fields">
                {fields}
            </div>
        </div>
    )
}