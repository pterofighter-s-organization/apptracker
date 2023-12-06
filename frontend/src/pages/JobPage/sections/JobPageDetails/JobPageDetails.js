import { useContext } from "react"

//private-components
import { HyperLink } from "../../components/HyperLink"

//utils
import { dateTimeFormatter } from "../../../../utils/format"

//contexts
import { JobContext } from "../../../../hooks/contexts/JobContext"

//css
import "./JobPageDetails.css"
import "../styles/JobPageSection.css"

export default function JobPageDetails() {

    const { job } = useContext(JobContext)

    return (
        <div className="job-page-details-layout">
            <div className="job-page-section job-page-details-section job-page-infos">
                <h5 style={{ color: "#808080", textTransform: "capitalize" }}>
                    - {job.data.company}
                </h5>
                <h1 style={{ textTransform: "capitalize" }}>
                    {job.data.position}
                </h1>
                <h5 style={{ color: "#009E60", textTransform: "initial" }}>
                    ${job.data.salary} /{job.data.salary_rate}
                </h5>
            </div>
            <div className="job-page-section job-page-details-section job-page-datetimes">
                <h6>
                    Updated: {dateTimeFormatter(job.data.date_edited)}
                </h6>
                <h6>
                    Created: {dateTimeFormatter(job.data.date_created)}
                </h6>
                <h6>
                    {`Applied: `}
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
            <div className="job-page-section job-page-details-section job-page-links">
                <HyperLink
                    id={job.data.application_id}
                    link={job.data.related_link}
                    label={"related link"}
                />
                <HyperLink
                    id={job.data.application_id}
                    link={job.data.resume_link}
                    label={"resume link"}
                />
                <HyperLink
                    id={job.data.application_id}
                    link={job.data.cover_letter_link}
                    label={"cover letter link"}
                />
            </div>
        </div>
    )
}