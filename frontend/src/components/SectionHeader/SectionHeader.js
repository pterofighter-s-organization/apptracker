


//css
import "./SectionHeader.css"

export default function SectionHeader({ icon, title }) {

    return (
        <h5 className="section-header">
            {icon}
            <div style={{ textIndent: "1rem" }}>
                {title}
            </div>
        </h5>
    )
}