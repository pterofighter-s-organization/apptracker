

//css
import "./SectionHeader.css"

export default function SectionHeader({ IconComponent, title, ButtonComponent }) {

    return (
        <h5 className="section-header">
            <div className="section-header-logo-title">
                <div className="section-header-logo">
                    {IconComponent}
                </div>
                <div className="section-header-text">
                    {title}
                </div>
            </div>
            {ButtonComponent}
            {/* {
                link ?
                    <Link
                        to={link}
                        className="section-header-right"
                    >
                        <i className="bi bi-box-arrow-up-right" />
                    </Link>
                    :
                    null
            } */}
        </h5>
    )
}