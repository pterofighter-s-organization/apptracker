import { useState } from "react"
import { Link } from "react-router-dom"

//components
import { ArchivedOptionButtons } from "../../../../Buttons/OptionButtons/ArchivedOptionButtons"
import { ActiveOptionButtons } from "../../../../Buttons/OptionButtons/ActiveOptionButtons"
import { StageDropdown } from "../../../../Dropdowns/StageDropdown"

//css
import "./JobCard.css"

export default function JobCard({ isArchived, id }) {

    const jobCardId = "job-card-" + id
    const [stage, setStage] = useState("interviewing")

    //event.preventdefault is to prevent the button from accidentally re-directing to the link.
    const handleStage = (e) => {
        //use this card to handle all the reducer functions
        e.preventDefault()
        setStage(e.target.value)
    }

    const handleArchive = (e) => {
        e.preventDefault()
    }

    const handleDelete = (e) => {
        e.preventDefault()
    }

    const handleRestore = (e) => {
        e.preventDefault()
    }

    return (
        <Link
            to={"/job/" + id}
            id={jobCardId}
            key={jobCardId}
            className="job-card"
        >
            <div className="job-card-top">
                <div style={{ flexGrow: 1 }}>
                    <StageDropdown
                        key={id}
                        id={jobCardId}
                        stage={stage}
                        handleStage={handleStage}
                    />
                </div>
                <div className="job-card-top-buttons">
                    {isArchived ?
                        <ArchivedOptionButtons
                            handleDelete={handleDelete}
                            handleRestore={handleRestore}
                        />
                        :
                        <>
                            <Link
                                to={"/job-edit/" + id}
                                className="onclick-bw-button"
                            >
                                <i className="bi bi-pencil-fill"></i>
                            </Link>
                            <ActiveOptionButtons
                                handleArchive={handleArchive}
                            />
                        </>
                    }
                </div>
            </div>
            <div className="job-card-details">
                <h6 className="job-card-details-text" style={{ color: "gray" }}>
                    Google
                </h6>
                <h3
                    className="job-card-details-text job-card-title"
                    style={{ marginLeft: "-0.05em" }}
                >
                    UX/UI Designer
                </h3>
                <h5 style={{ textTransform: "initial", color: "#009E60" }}>
                    $100 /hr
                </h5>
            </div>
            <div className="job-card-date">
                Updated: 2/12/2022 10:38am
            </div>
        </Link>
    )
}