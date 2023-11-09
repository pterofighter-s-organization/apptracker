
//components
import { ApplicationCard } from "./ApplicationCard"

//css
import "./ApplicationList.css"

import withVisibleCardCount from "../../../hoc/withVisibleCardCount"

function ApplicationList({ id, cards, cardCount, handleClick, isPreview }) {

    console.log(cardCount)

    return (
        <div 
            className="application-list" 
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
    )
}

export default withVisibleCardCount(ApplicationList)