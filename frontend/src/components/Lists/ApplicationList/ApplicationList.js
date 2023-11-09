import { Link } from "react-router-dom"

//components
import { ApplicationCard } from "./ApplicationCard"

//hoc
import withVisibleCardCount from "../../../hoc/withVisibleCardCount"

//css
import "./ApplicationList.css"
import "../List.css"

function ApplicationList({ id, cards, cardCount, isPreview }) {

    return (
        <div className="list-container">
            <div
                className="list application-list"
                id={id}
            >
                {
                    cards.map((item, index) => {
                        const count = index + 1
                        if (count <= cardCount) {
                            return (
                                <ApplicationCard
                                    key={index}
                                    id={index}
                                />
                            )
                        }
                        return <></>
                    })
                }
                {/* <ApplicationCard
                key={11}
                id={11}
                isArchived={true}
            /> */}
            </div>
            {
                isPreview ?
                    <Link
                        to="/"
                        className="redirect-button"
                    >
                        Go to site
                    </Link>
                    :
                    <div className="show-button">
                        {(cardCount >= cards.length) ? "that's all the content" : "scroll to load more"}
                    </div>
            }
        </div>
    )
}

export default withVisibleCardCount(ApplicationList)