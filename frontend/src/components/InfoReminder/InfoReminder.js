



//css
import "./InfoReminder.css"

export default function InfoReminder({ text }) {

    return (
        <span className="info-reminder bi bi-info-circle-fill">
            <span className="info-reminder-text">
                {text}
            </span>
        </span>
    )
}