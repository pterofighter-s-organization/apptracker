

//css
import "./InfoLayout.css"

export default function InfoLayout({ text, children }) {

    //for important reminders and space to add buttons as children components for users to make decisions.

    return (
        <div className="info-layout">
            <div className="info-layout-reminder">
                <i className="bi bi-info-circle-fill">
                </i>
                <span className="info-layout-text">
                    {text}
                </span>
            </div>
            <div className="info-layout-buttons">
                {children}
            </div>
        </div>
    )
}