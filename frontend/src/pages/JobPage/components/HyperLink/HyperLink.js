import { Link } from "react-router-dom"

//css
import "./HyperLink.css"

export default function HyperLink({ id, link, label }) {

    console.log(link)
    return (
        <div className="hyper-link">
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
                        className="hyper-link-label">
                        {label}
                    </a>
                    :
                    <Link
                        to={"/job-edit/" + id}
                        className="hyper-link-label"
                    >
                        add {label}
                    </Link>
            }
        </div>
    )
}