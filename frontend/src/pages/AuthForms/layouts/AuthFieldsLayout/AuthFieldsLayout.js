

//css
import "./AuthFieldsLayout.css"

export default function AuthFieldsLayout({ children, handleSubmit }) {

    return (
        <form 
            className="auth-form-fields"
            onSubmit={handleSubmit}
        >
            {children}
        </form>
    )
}