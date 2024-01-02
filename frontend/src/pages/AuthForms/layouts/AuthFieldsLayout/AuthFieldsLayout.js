

//css
import "./AuthFieldsLayout.css"

export default function AuthFieldsLayout({ children, handleSubmit }) {

    return (
        <form 
            id="auth-form-fields"
            className="auth-form-fields"
            onSubmit={handleSubmit}
        >
            {children}
        </form>
    )
}