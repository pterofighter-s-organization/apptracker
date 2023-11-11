


//css
import withDynamicCardCount from "../../../hoc/withDynamicCardCount"
import { ApplicationCard } from "../../Cards/ApplicationCard"
import "./JobList.css"

function JobList({ cards, cardCount, status, isPreview, ...props }) {

    return (
        <div className="card-list-container">
            <div 
                className="card-list" 
                style={{ gridTemplateColumns: `repeat(auto-fill, minmax(${17.5}rem, 1fr))` }}
            >
                {
                    cards.slice(0, cardCount).map((card, index) => (
                        <ApplicationCard
                            id={index}
                            isArchived={status}
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default withDynamicCardCount(JobList, "application-list")