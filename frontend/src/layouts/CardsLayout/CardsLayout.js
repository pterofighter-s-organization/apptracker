

//css
import "./CardsLayout.css"

export default function CardsLayout({ children }) {

    //how each cards section should be layout in a page
    return (
        <div className="cards-layout">
            {children}
        </div>
    )
}