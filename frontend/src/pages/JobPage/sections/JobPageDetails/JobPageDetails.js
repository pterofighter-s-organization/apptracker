import { useContext } from "react"

//private-components
import { HyperLinkButton } from "../../components/HyperLinkButton"

//context-providers
import { JobContext } from "../../../../hooks/contexts/JobContext"

//utils
import { dateTimeFormatter } from "../../../../utils/formatUtils"

//css
import "./JobPageDetails.css"
import "../../JobPage.css"

export default function JobPageDetails() {

    const { job } = useContext(JobContext)

    return (
        <>
            <div className="job-page-divider">
                <div className="job-page-content-bg job-page-divider-content job-page-infos">
                    <h5 style={{ color: "#808080" }}>
                        - {job.data.company}
                    </h5>
                    <h1>
                        {job.data.position}
                    </h1>
                    <h5 style={{ color: "#009E60", textTransform: "initial", marginBottom: 0 }}>
                        ${job.data.salary} /{job.data.salary_rate}
                    </h5>
                </div>
                <div className="job-page-content-bg job-page-divider-content job-page-dates">
                    <h6>
                        <b>Updated:</b> {dateTimeFormatter(job.data.date_edited)}
                    </h6>
                    <h6>
                        <b>Created:</b> {dateTimeFormatter(job.data.date_created)}
                    </h6>
                    <h6 style={{ marginBottom: 0 }}>
                        <b>Applied: </b>
                        {
                            job.data.status !== "interested" ?
                                job.data.date_applied?.length > 0 ?
                                    dateTimeFormatter(job.data.date_applied)
                                    :
                                    "Not given at the moment."
                                :
                                "Unavailble in interested"
                        }
                    </h6>
                </div>
            </div>
            <div className="job-page-content-bg job-page-links">
                <HyperLinkButton
                    jobId={job.data.application_id}
                    link={job.data.application_link}
                    label={"related site"}
                />
                <HyperLinkButton
                    jobId={job.data.application_id}
                    link={job.data.resume_link}
                    label={"resume doc"}
                />
                <HyperLinkButton
                    jobId={job.data.application_id}
                    link={job.data.cover_letter_link}
                    label={"cover letter"}
                />
            </div>
            <div className="job-page-content-bg job-page-description-container">
                <h5>Description:</h5>
                <pre className="job-page-description">
                    {
                        job.data.description && job.data.description.length > 0 ?
                            job.data.description
                            :
                            "No description at the moment."
                    }
                </pre>
            </div>
        </>
    )
}