import { Link } from "react-router-dom"

//components
import { ApplicationCard } from "./ApplicationCard"
import { ShowButton } from "../../Buttons/ShowButton"
import { RedirectButton } from "../../Buttons/RedirectButton"

//hoc
import withVisibleCardCount from "../../../hoc/withVisibleCardCount"

//css
import "./ApplicationList.css"
import "../List.css"

function ApplicationList({ id, cards, cardCount, isPreview, isArchived }) {

    return (
        <div className="list-container">
            <div
                className="list application-list"
                id={id}
            >
                {isArchived ?
                    cards.slice(0, cardCount).map((item, index) => (
                        <ApplicationCard
                            key={"application-card-" + index}
                            id={"application-card-" + index}
                            isArchived={true}
                        />
                    ))

                    :
                    cards.slice(0, cardCount).map((item, index) => (
                        <ApplicationCard
                            key={"application-card-" + index}
                            id={"application-card-" + index}
                        />
                    ))
                }
            </div>
            {
                isPreview ?
                    <RedirectButton link={"/all-jobs"} />
                    :
                    <ShowButton isLoading={(cardCount >= cards.length)} />
            }
        </div>
    )
}

export default withVisibleCardCount(ApplicationList)