
//private-components
import { ShowButton } from "./components/ShowButton"
import { ErrorDisplay } from "./components/ErrorDisplay"
import { JobCard } from "./components/Cards/JobCard"
import { TaskCard } from "./components/Cards/TaskCard"
import { NoteCard } from "./components/Cards/NoteCard"

//hocs
import { withDynamicCardCount } from "../../hocs/withDynamicCardCount"

//css
import "./CardList.css"

function CardList({ cards, initialCount, cardCount, isShow, type, ...props }) {

    const CARDS = {
        jobs: {
            width: "17.5rem",
            Component: JobCard
        },
        tasks: {
            width: "25rem",
            Component: TaskCard
        },
        notes: {
            width: "17.5rem",
            Component: NoteCard
        }
    };

    return (
        <div className="card-list-container">
            <div
                id={"card-list-" + type}
                className={`card-list ${cards.length <= 0 ? "card-list-empty" : ""}`}
                style={{ gridTemplateColumns: `repeat(auto-fill, minmax(${CARDS[type].width}, 1fr))` }}
            >
                {
                    cards.slice(0, cardCount).map((card, index) => {
                        const CardComponent = CARDS[type].Component
                        return (
                            <CardComponent
                                id={index}
                                card={card}
                            />
                        )
                    })
                }
            </div>
            {
                cards.length > 0 ?
                    isShow ?
                        <ShowButton
                            isShow={(cardCount < cards.length)}
                            isInitial={(cardCount === initialCount)}
                            isLess={(cards.length < initialCount)}
                            type={type}
                            {...props}
                        />
                        :
                        null
                    :
                    <ErrorDisplay
                        type={type}
                    />
            }
        </div>
    )
}

export default withDynamicCardCount(CardList, "card-list")