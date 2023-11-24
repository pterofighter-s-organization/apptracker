import { Link } from "react-router-dom"

//css
import "./HyperLinkButton.css"

export default function HyperLinkButton({ jobId, link, label }) {

    return (
        <div className="hyperlink-button">
            <b>
                <i
                    className="bi bi-link-45deg"
                    style={{ color: "black" }}
                ></i>
            </b>
            {
                link && link.length > 0 ?
                    <a
                        href={link}
                        className="hyper-link-button-label">
                        {label}
                    </a>
                    :
                    <Link
                        to={"/job-edit/" + jobId}
                        className="hyperlink-button-label"
                    >
                        add {label}
                    </Link>
            }
        </div>
    )
}