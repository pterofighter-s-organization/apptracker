import { Link } from "react-router-dom"

//components
import { StatusButton } from "../../../Buttons/StatusButton"

//constants
import { ARCHIVED_BIN_ICON } from "../../../../constants/components"

//css
import "./ApplicationCard.css"

export default function ApplicationCard({ isArchived, id }) {

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
            to="/all-tasks"
            className="application-card"
        >
            <div className="application-card-top">
                <div style={{ flexGrow: 1 }}>
                    <StatusButton key={id} id={id} />
                </div>
                <div className="application-card-top-buttons">
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
            <div className="application-card-details">
                <h6 className="application-card-details-text">
                    Google
                </h6>
                <h3 className="application-card-details-text" style={{ marginLeft: "-0.05em" }}>
                    UX/UI DesignerUX/UI Designer
                </h3>
                <h5 style={{ textTransform: "initial" }}>
                    $100 /hr
                </h5>
            </div>
            <div className="application-card-date">
                Updated: 2/12/2022 10:38am
            </div>
        </Link>
    )
}