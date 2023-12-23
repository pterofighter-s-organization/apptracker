



//css
import "./InfoReminder.css"

export default function InfoReminder({ text, isError }) {

    return (
        <span className={`info-reminder ${isError ? "info-reminder-error" : "info-reminder-idle"} bi bi-info-circle-fill`}>
            <span className={`info-reminder-text`}>
                {text.charAt(0).toUpperCase() + text.slice(1)}
            </span>
        </span>
    )
}