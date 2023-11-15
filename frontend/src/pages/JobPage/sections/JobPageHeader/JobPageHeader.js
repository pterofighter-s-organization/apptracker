import { useState } from "react"
import { Link } from "react-router-dom"

//components
import { StageDropdown } from "../../../../components/Dropdowns/StageDropdown"
import { ActiveOptionButtons } from "../../../../components/Buttons/OptionButtons/ActiveOptionButtons"
import { ArchivedOptionButtons } from "../../../../components/Buttons/OptionButtons/ArchivedOptionButtons"

//css
import "./JobPageHeader.css"
import "../../JobPage.css"

export default function JobPageHeader({ isArchived, id }) {

    const [stage, setStage] = useState("interviewing")

    const handleStage = (e) => {
        e.preventDefault()
        setStage(e.target.value)
    }

    const handleRestore = (e) => {
        e.preventDefault()
    }

    const handleDelete = (e) => {
        e.preventDefault()
    }

    const handleArchive = (e) => {
        e.preventDefault()
    }

    return (
        <div className="job-page-content-bg job-page-top">
            <div style={{ flexGrow: 1 }}>
                <StageDropdown
                    id={id}
                    stage={stage}
                    handleStage={handleStage}
                />
            </div>
            <div className="job-page-top-buttons">
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
    )
}