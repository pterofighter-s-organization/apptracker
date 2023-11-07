import { Link } from "react-router-dom"

//components
import { StatusButton } from "../../../Buttons/StatusButton"

//constants
import { ARCHIVED_BIN_ICON } from "../../../../constants/components"

//css
import "./ApplicationCard.css"

export default function ApplicationCard({ application, id }) {

    return (
        <Link
            to="/all-tasks"
            className="application-card"
        >
            <div className="application-card-top">
                <div style={{ flexGrow: 1 }}>
                    <StatusButton key={id} id={id} />
                </div>
                <button
                    type="button"
                    className="application-card-top-button"
                    onClick={(e) =>{
                        e.preventDefault() /*use preventdefault to not activate the link */
                    }}
                >
                    <i className={`${ARCHIVED_BIN_ICON}`}></i>
                </button>
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
                <div style={{ fontSize: "0.85em" }}>
                    Updated: 2/12/2022 10:38am
                </div>
            </div>
        </Link>
    )
}