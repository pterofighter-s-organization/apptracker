

//css
import "./CardListHeader.css"

export default function CardListHeader({ isArchived, quantity, type }) {

    const CARD_LIST_HEADER_TYPE = {
        // blue
        job: {
            icon: <i className="bi bi-file-post-fill" />,
            color: "#4099ff",
            archivedText: "to remove",
            activeText: "to track"
        },
        // green
        note: {
            icon: <i className="bi bi-stickies-fill" />,
            color: "#009E60",
            archivedText: "to peel off",
            activeText: "to record"
        },
        // red
        task: {
            icon: <i className="bi bi-card-checklist"></i>,
            color: "#ff6666",
            archivedText: "to delete",
            activeText: "to finish"
        }
    }

    return (
        <div
            className="card-list-header"
            style={{
                color: CARD_LIST_HEADER_TYPE[type].color || "black",
            }}
        >
            <div
                className="card-list-header-icon"
            >
                {CARD_LIST_HEADER_TYPE[type].icon}
            </div>
            <div className="card-list-header-info">
                {quantity} {quantity > 1 ? `${type}s` : type} {isArchived ? CARD_LIST_HEADER_TYPE[type].archivedText : CARD_LIST_HEADER_TYPE[type].activeText}
            </div>
        </div>
    )
}