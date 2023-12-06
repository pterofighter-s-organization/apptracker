



//css
import "./AuthFormLayout.css"

export default function AuthFormLayout({ children }) {

    //form components
    const [header, fields] = children

    return (
        <div className="auth-form-layout">
            <div className="auth-form-layout-section auth-form-layout-header">
                {header}
            </div>
            <div className="auth-form-layout-section auth-form-layout-fields">
                {fields}
            </div>
        </div>
    )
}