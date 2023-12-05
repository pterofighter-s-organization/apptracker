
//css
import "./CardsHeaderLayout.css"

export default function CardsHeaderLayout({ children }) {

    const [header, filters] = children

    return (
        <div className="cards-header-layout">
            <div className="cards-header-left">
                {header}
            </div>
            <div className="cards-header-filters">
                {filters}
            </div>
        </div>
    )
}