
//components
import { InfoReminder } from "../../../../../../components/InfoReminder"

//css
import "./JobFormHeader.css"
import "../styles/JobFormSections.css"

export default function JobFormHeader({ isEdit }) {

    return (
        <div className="job-form-header">
            <h1>
                {
                    isEdit ?
                        "Editing Job"
                        :
                        "New Job Form"
                }
            </h1>
            <h6>
                - {
                    isEdit ?
                        "Edit the information to better track this."
                        :
                        "Fill this form to start tracking your desired job!"
                }
            </h6>
            <hr />
            <InfoReminder
                text={"Changes won't save until successfully submitted."}
            />
        </div>
    )
}
