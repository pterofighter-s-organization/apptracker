
//components
import { ShowButton } from "./ShowButton"
import { RedirectButton } from "../Buttons/RedirectButton"

//layouts
import { ErrorLayout } from "../../layouts/ErrorLayout"

//hocs
import withDynamicCardCount from "../../hocs/withDynamicCardCount"

//css
import "./CardList.css"

function CardList({ cards, initialCount, cardCount, CardComponent, status, isRedirect, type, ...props }) {

    const CARD_WIDTHS = {
        "jobs": "17.5rem",
        "tasks": "35rem",
        "notes": "17.5rem"
    }

    return (
        <div className="card-list-container">
            <div
                id={"card-list-" + type}
                className={`card-list ${cards.length <= 0 ? "card-list-empty" : ""}`}
                style={{ gridTemplateColumns: `repeat(auto-fill, minmax(${CARD_WIDTHS[type]}, 1fr))` }}
            >
                {
                    cards.slice(0, cardCount).map((card, index) => (
                        <CardComponent
                            id={index}
                            isArchived={card.isArchived}
                        />
                    ))
                }
            </div>
            {
                cards.length > 0 ?
                    isRedirect ?
                        <RedirectButton link={"/all-" + type + "/" + status}>
                            Click here for {type}
                        </RedirectButton>
                        :
                        <ShowButton
                            isShow={(cardCount < cards.length)}
                            isInitial={(cardCount === initialCount)}
                            isLess={(cards.length < initialCount)}
                            type={type}
                            {...props}
                        />
                    :
                    <ErrorLayout>
                        <>
                            <div>
                                no {status} {type} at the moment!
                            </div>
                            {type === "jobs" ?
                                <RedirectButton link={"/new-job"}>
                                    track new {type}
                                </RedirectButton>
                                :
                                null
                            }
                        </>
                    </ErrorLayout>
            }
        </div>
    )
}

export default withDynamicCardCount(CardList, "card-list")