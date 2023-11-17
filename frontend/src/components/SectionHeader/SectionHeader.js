

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
        </h5>
    )
}