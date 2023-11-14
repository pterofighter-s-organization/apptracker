import { Link } from "react-router-dom"

//css
import "./SectionHeader.css"

export default function SectionHeader({ icon, title, link }) {

    return (
        <h5 className="section-header">
            <div className="section-header-left">
                {icon}
                <div className="section-header-text">
                    {title}
                </div>
            </div>
            {
                link ?
                    <Link
                        to={link}
                        className="section-header-right"
                    >
                        <i className="bi bi-box-arrow-up-right" />
                    </Link>
                    :
                    null
            }
        </h5>
    )
}