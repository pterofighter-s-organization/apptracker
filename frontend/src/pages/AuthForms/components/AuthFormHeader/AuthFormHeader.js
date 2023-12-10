
//components
import { InfoReminder } from "../../../../components/InfoReminder"

//css
import "./AuthFormHeader.css"

export default function AuthFormHeader({ label, description }) {

    return (
        <div className="auth-form-header">
            <h1>
                {label}
            </h1>
            <h6>
                {description}
            </h6>
            <div style={{ marginLeft: "0.1rem" }}>
                <InfoReminder
                    text={"* is required."}
                />
            </div>
        </div>
    )
}