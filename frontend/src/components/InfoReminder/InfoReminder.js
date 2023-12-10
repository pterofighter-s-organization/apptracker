



//css
import "./InfoReminder.css"

export default function InfoReminder({ text }) {

    return (
        <span className="info-reminder bi bi-info-circle-fill">
            <span className="info-reminder-text">
                {text.charAt(0).toUpperCase() + text.slice(1)}
            </span>
        </span>
    )
}