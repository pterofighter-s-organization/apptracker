


//layouts
import { InfoLayout } from "../../layouts/InfoLayout";
import { PageLayout } from "../../layouts/PageLayout";

//css
import "./JobForm.css"

export default function JobForm() {

    //in the hoc, i will put "new" as the 2nd param to make sure the hoc knows what to do.
    return (
        <PageLayout>
            <div className="job-form-header job-form-content-bg">
                <h2 className="job-form-header-title">
                    tracking a new job!
                </h2>
                <h6 className="job-form-header-text">
                    fill the form to provide information on the job you want to track.
                </h6>
                <InfoLayout
                    text={"information won't save unless successfully submited."}
                />
            </div>
        </PageLayout>
    )
}