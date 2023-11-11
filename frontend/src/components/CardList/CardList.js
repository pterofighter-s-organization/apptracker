
//components
import { ShowButton } from "./ShowButton"
import { RedirectButton } from "../Buttons/RedirectButton"

//layouts
import { ErrorLayout } from "../../layouts/ErrorLayout"

//hocs
import withVisibleCardCount from "../../hoc/withVisibleCardCount"

//css
import "./CardList.css"

function CardList({ cards, cardCount, CardComponent, status, isPreview, label, ...props }) {

    const CARDS_WIDTH = {
        "jobs": 17.5,
        "tasks": 35,
        "notes": 17.5
    }

    return (
        <div className="card-list-container">
            <div
                id={"card-list-" + label}
                className="card-list"
                style={{ gridTemplateColumns: `repeat(auto-fill, minmax(${CARDS_WIDTH[label]}rem, 1fr))` }}
            >
                {
                    cards.slice(0, cardCount).map((card, index) => (
                        <CardComponent
                            id={index}
                            isArchived={status}
                        />
                    ))
                }
            </div>
            {
                cards.length > 0 ?
                    isPreview ?
                        <RedirectButton link={"/all-" + label + "/" + status}>
                            show all {label}
                        </RedirectButton>
                        :
                        <ShowButton
                            isShow={(cardCount < cards.length)}
                            label={label}
                            {...props}
                        />
                    :
                    <ErrorLayout>
                        <>
                            no {label} at the moment.
                            <RedirectButton link={"/new-job"}>
                                track new job
                            </RedirectButton>
                        </>
                    </ErrorLayout>
            }
        </div>
    )
}

export default withVisibleCardCount(CardList, 20)