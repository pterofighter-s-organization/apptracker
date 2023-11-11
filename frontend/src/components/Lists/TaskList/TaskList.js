
//components
import { TaskCard } from "../../Cards/TaskCard"
import { RedirectButton } from "../../Buttons/RedirectButton"
import { ShowButton } from "../../Buttons/ShowButton"

//hocs
import withVisibleCardCount from "../../../hoc/withVisibleCardCount"

//css
import "./TaskList.css"
import "../List.css"

function TaskList({ id, cards, cardCount, isPreview, status, ...props }) {

    return (
        <div className="list-container">
            <div
                className="list task-list"
                id={id}
            >
                {status === "active" ?
                    cards.slice(0, cardCount).map((item, index) => (
                        <TaskCard
                            key={"task-card-" + index}
                            id={"task-card-" + index}
                            isArchived={false}
                        />
                    ))

                    :
                    cards.slice(0, cardCount).map((item, index) => (
                        <TaskCard
                            key={"task-card-" + index}
                            id={"task-card-" + index}
                            isArchived={true}
                        />
                    ))
                }
            </div>
            {
                isPreview ?
                    <RedirectButton
                        link={"/all-tasks"}
                        text={"tasks"}
                        status={status}
                    />
                    :
                    <ShowButton
                        isLoading={(cardCount < cards.length)}
                        text={"tasks"}
                        {...props}
                    />
            }
        </div>
    )
}

export default withVisibleCardCount(TaskList)