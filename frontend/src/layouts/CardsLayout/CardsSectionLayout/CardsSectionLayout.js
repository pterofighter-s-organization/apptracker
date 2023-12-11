


//css
import "./CardsSectionLayout.css"

export default function CardsSectionLayout({ children, isPreview }) {

    return (
        <div
            className={`cards-section-layout ${isPreview ? "cards-section-layout-preview" : ""}`}
        >
            {children}
        </div>
    )
}