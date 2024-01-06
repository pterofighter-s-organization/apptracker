

//css
import "./AuthFormLayout.css"

export default function AuthFormLayout({ children, handleSubmit }) {

    //form components
    const [header, fields] = children

    return (
        <div className="auth-form-layout">
            <div className="auth-form-layout-section auth-form-layout-header">
                {header}
            </div>
            <form
                id="auth-form"
                className="auth-form-layout-section auth-form-layout-fields"
                onSubmit={handleSubmit}
            >
                {fields}
            </form>
        </div>
    )
}