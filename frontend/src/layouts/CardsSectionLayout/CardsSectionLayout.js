


//css
import "./CardsSectionLayout.css"

export default function CardsSectionLayout({ children, isPreview }) {

    const [header, filters, list, listComponent] = children
    return (
        <div
            className={`cards-section-layout ${isPreview ? "cards-section-layout-preview" : ""}`}
        >
            <div className="cards-section-header-layout">
                <div className="cards-section-header-left">
                    {header}
                </div>
                <div className="cards-section-header-filters">
                    {filters}
                </div>
            </div>
            {list}
            {listComponent || null}
        </div>
    )
}