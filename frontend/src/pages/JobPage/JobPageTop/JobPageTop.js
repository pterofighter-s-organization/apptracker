import { Link } from "react-router-dom"

//constants
import { ARCHIVED_BIN_ICON } from "../../../constants/components"

//components
import { StageDropdown } from "../../../components/Dropdowns/StageDropdown"

//css
import "./JobPageTop.css"
import "../JobPage.css"

export default function JobPageTop({ isArchived, id }) {

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
                />
            </div>
            <div className="job-page-top-buttons">
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
                    <>
                        <Link
                            to={"/job-edit/" + id}
                            className="onclick-bw-button"
                        >
                            <i className="bi bi-pencil-fill"></i>
                        </Link>
                        <button
                            type="button"
                            className="onclick-bw-button"
                            onClick={(e) => handleArchive(e)}
                        >
                            <i className={`${ARCHIVED_BIN_ICON}`}></i>
                        </button>
                    </>
                }
            </div>
        </div>
    )
}