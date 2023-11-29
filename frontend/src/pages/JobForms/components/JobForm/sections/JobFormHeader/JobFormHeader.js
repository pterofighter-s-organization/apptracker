
//components
import { InfoReminder } from "../../../../../../components/InfoReminder"

//layouts
import { HeaderLayout } from "../../../../../../layouts/HeaderLayout"

//css
import "./JobFormHeader.css"
import "../../JobForm.css"

export default function JobFormHeader({ isEdit }) {

    return (
        <div className="job-form-header">
            <HeaderLayout
                title={
                    isEdit ?
                        "editing information"
                        :
                        "job tracking form"
                }
                text={
                    isEdit ?
                        "perform your desired edits on the application you created."
                        :
                        "fill the form to provide information on the job you want to track."
                }
            >
                <hr />
                <InfoReminder
                    text={"information won't save until successfully submitted."}
                />
            </HeaderLayout>
            {/* <div className="job-form-header-bottom">
                <hr />
                <InfoReminder
                    text={"information won't save until successfully submitted."}
                />
            </div> */}
        </div>
    )
}