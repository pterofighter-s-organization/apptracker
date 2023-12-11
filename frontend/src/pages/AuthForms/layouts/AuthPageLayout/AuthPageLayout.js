

//css
import "./AuthPageLayout.css"

export default function AuthPageayout({ children }) {

    return (
        <div className="auth-page-layout">
            <div className="auth-page-restriction">
                {children}
            </div>
        </div>
    )
}