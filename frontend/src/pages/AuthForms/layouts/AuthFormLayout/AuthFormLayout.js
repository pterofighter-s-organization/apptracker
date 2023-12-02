

//css
import "./AuthFormLayout.css"

export default function AuthFormLayout({ children }) {

    return (
        <div className="auth-form-layout">
            <div className="auth-form-restriction">
                {children}
            </div>
        </div>
    )
}