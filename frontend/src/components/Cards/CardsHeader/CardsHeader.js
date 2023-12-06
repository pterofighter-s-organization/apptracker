
//css
import "./CardsHeader.css"

export default function CardsHeader({ icon, quantity, type, header }) {

    const CARDS_HEADER_TYPE = {
        // blue
        job: "#4099ff",
        // green
        note: "#009E60",
        // red
        task: "#ff6666"
    };

    return (
        <div
            className="cards-header" 
            style={{
                color: CARDS_HEADER_TYPE[type] || "black",
            }}
        >
            <div
                className="cards-header-icon"
            >
                {icon}
            </div>
            <div className="cards-header-info">
                {quantity} {quantity > 1 ? `${type}s` : type} {header}
            </div>
        </div>
    )
}