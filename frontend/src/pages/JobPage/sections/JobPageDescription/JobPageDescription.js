import { useContext } from "react"

//contexts
import { JobContext } from "../../../../hooks/contexts/JobContext"

//css
import "./JobPageDescription.css"
import "../styles/JobPageSection.css"

export default function JobPageDescription() {

    const { job } = useContext(JobContext)

    return (
        <div className="job-page-section job-page-description-layout">
            <h5>
                Description:
            </h5>
            <pre className="job-page-description">
                {
                    job.data.description.length <= 0 ?
                        "No description available"
                        :
                        job.data.description
                }
            </pre>
        </div>
    )
}