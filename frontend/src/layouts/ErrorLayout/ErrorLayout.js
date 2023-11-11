
//css
import "./ErrorLayout.css"

export default function ErrorLayout({ children }) {

    return (
        <div className="error-layout">
            <i className="bi bi-info-circle-fill"></i>
            {children}
        </div>
    )
}