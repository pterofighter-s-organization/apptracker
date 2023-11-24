import { useState, useContext } from "react"
import { Link } from "react-router-dom"

//components
import { StageDropdown } from "../../../../components/Dropdowns/StageDropdown"
import { ActiveOptionButtons } from "../../../../components/Buttons/OptionButtons/ActiveOptionButtons"
import { ArchivedOptionButtons } from "../../../../components/Buttons/OptionButtons/ArchivedOptionButtons"

//context-reducer
import { JobContext } from "../../../../contexts/JobContext"

//css
import "./JobPageHeader.css"
import "../../JobPage.css"

export default function JobPageHeader() {

    const { state, updateApplication } = useContext(JobContext)
    const [stage, setStage] = useState(state.data.status)

    const handleStage = (e) => {
        e.preventDefault()
        setStage(e.target.value)
        updateApplication(state.data.application_id, {
            ...state.data,
            status: e.target.value
        })
    }

    const handleRestore = (e) => {
        e.preventDefault()
        updateApplication(state.data.application_id, {
            ...state.data,
            archived: false
        })
    }

    const handleDelete = (e) => {
        e.preventDefault()
    }

    const handleArchive = (e) => {
        e.preventDefault()
        updateApplication(state.data.application_id, {
            ...state.data,
            archived: true
        })
    }

    return (
        <div className="job-page-content-bg job-page-top">
            <div style={{ flexGrow: 1 }}>
                <StageDropdown
                    id={"stage-dropdown-"+state.data.application_id}
                    stage={stage}
                    handleStage={handleStage}
                />
            </div>
            <div className="job-page-top-buttons">
                {state.data.archived ?
                    <ArchivedOptionButtons
                        handleDelete={handleDelete}
                        handleRestore={handleRestore}
                    />
                    :
                    <>
                        <Link
                            to={"/job-edit/" + state.data.application_id}
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