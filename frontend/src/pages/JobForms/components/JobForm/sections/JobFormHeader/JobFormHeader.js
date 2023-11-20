
//components
import { InfoReminder } from "../../../../../../components/InfoReminder"

//layouts
import { HeaderLayout } from "../../../../../../layouts/HeaderLayout"

//css
import "./JobFormHeader.css"
import "../../JobForm.css"

export default function JobFormHeader({ isEdit }) {

    return (
        <div className="job-form-header job-form-section">
            {
                isEdit ?
                    <HeaderLayout
                        title={"editing information"}
                    >
                        perform your desired edits on the application you created.
                    </HeaderLayout>
                    :
                    <HeaderLayout
                        title={"job tracking form"}
                    >
                        fill the form to provide information on the job you want to track.
                    </HeaderLayout>
            }
            <hr />
            <InfoReminder
                text={"information won't save until successfully submitted."}
            />
        </div>
    )
}