import { useContext } from "react"

//private-components
import { HyperLinkButton } from "../../components/HyperLinkButton"

//context-reducer
import { JobContext } from "../../../../contexts/JobContext"

//utils
import { dateTimeFormatter } from "../../../../utils/formatters"

//css
import "./JobPageDetails.css"
import "../../JobPage.css"

export default function JobPageDetails() {

    const { state } = useContext(JobContext)

    return (
        <>
            <div className="job-page-divider">
                <div className="job-page-content-bg job-page-divider-content job-page-infos">
                    <h5 style={{ color: "#808080" }}>
                        - {state.data.company}
                    </h5>
                    <h1>
                        {state.data.position}
                    </h1>
                    <h5 style={{ color: "#009E60" }}>
                        ${state.data.salary} /Hr
                    </h5>
                </div>
                <div className="job-page-content-bg job-page-divider-content job-page-dates">
                    <h6>
                        <b>Updated:</b> {dateTimeFormatter(state.data.date_edited)}
                    </h6>
                    <h6>
                        <b>Created:</b> {dateTimeFormatter(state.data.date_created)}
                    </h6>
                    <h6>
                        <b>Applied: </b>
                        {
                            state.data.status !== "interested" ?
                                state.data.date_applied?.length > 0 ?
                                    dateTimeFormatter(state.data.date_applied)
                                    :
                                    "Not given at the moment."
                                :
                                "Not at interested"
                        }
                    </h6>
                </div>
            </div>
            <div className="job-page-content-bg job-page-links">
                <HyperLinkButton
                    jobId={state.data.application_id}
                    link={state.data.application_link}
                    label={"related site"}
                />
                <HyperLinkButton
                    jobId={state.data.application_id}
                    link={state.data.resume_link}
                    label={"resume doc"}
                />
                <HyperLinkButton
                    jobId={state.data.application_id}
                    link={state.data.cover_letter_link}
                    label={"cover letter"}
                />
            </div>
            <div className="job-page-content-bg job-page-description-container">
                <h5>Description:</h5>
                <pre className="job-page-description">
                    {
                        state.data.description && state.data.description.length > 0 ?
                            state.data.description
                            :
                            "No description at the moment."
                    }
                </pre>
            </div>
        </>
    )
}