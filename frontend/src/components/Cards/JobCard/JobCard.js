import { useState } from "react"
import { Link } from "react-router-dom"

//components
import { StageDropdown } from "../../Dropdowns/StageDropdown"

//constants
import { ARCHIVED_BIN_ICON } from "../../../constants/components"

//css
import "./JobCard.css"

export default function JobCard({ isArchived, id }) {

    const jobCardId = "job-card-" + id
    const [stage, setStage] = useState("interviewing")

    //event.preventdefault is to prevent the button from accidentally re-directing to the link.
    const handleStage = (e) => {
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
                        <>
                            <button
                                type="button"
                                className="onclick-bw-button"
                                onClick={(e) => handleRestore(e)}
                            >
                                <i className="bi bi-arrow-counterclockwise"></i>
                            </button>
                            <button
                                type="button"
                                className="onclick-bw-button"
                                onClick={(e) => handleDelete(e)}
                            >
                                <i className="bi bi-trash3-fill"></i>
                            </button>
                        </>
                        :
                        <button
                            type="button"
                            className="onclick-bw-button"
                            onClick={(e) => handleArchive(e)}
                        >
                            <i className={`${ARCHIVED_BIN_ICON}`}></i>
                        </button>
                    }
                </div>
            </div>
            <div className="job-card-details">
                <h6 className="job-card-details-text" style={{ color: "gray" }}>
                    Google
                </h6>
                <h3 className="job-card-details-text" style={{ marginLeft: "-0.05em" }}>
                    UX/UI DesignerUX/UI Designer
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