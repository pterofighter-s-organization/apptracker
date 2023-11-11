
//components
import { ApplicationCard } from "../../Cards/ApplicationCard"
import { ShowButton } from "../../Buttons/ShowButton"
import { RedirectButton } from "../../Buttons/RedirectButton"

//hoc
import withVisibleCardCount from "../../../hoc/withVisibleCardCount"

//css
import "./ApplicationList.css"
import "../List.css"

function ApplicationList({ id, cards, cardCount, isPreview, status, ...props }) {

    return (
        <div className="list-container">
            {cards.length > 0 ?
                <>
                    <div
                        className="list application-list"
                        id={id}
                    >
                        {status === "active" ?
                            cards.slice(0, cardCount).map((item, index) => (
                                <ApplicationCard
                                    key={"application-card-" + index}
                                    id={"application-card-" + index}
                                    isArchived={false}
                                />
                            ))
                            :
                            cards.slice(0, cardCount).map((item, index) => (
                                <ApplicationCard
                                    key={"application-card-" + index}
                                    id={"application-card-" + index}
                                    isArchived={true}
                                />
                            ))
                        }
                    </div>
                    {
                        isPreview ?
                            <RedirectButton link={"/all-jobs/"+status}>
                                show all jobs
                            </RedirectButton>
                            :
                            <ShowButton
                                isLoading={(cardCount < cards.length)}
                                text={"jobs"}
                                {...props}
                            />
                    }
                </>
                :
                <div className="empty-error-msg" id={id}>
                    <div className="empty-error-msg-content">
                        <i className="bi bi-info-circle-fill"></i>
                        no jobs at the moment.
                        <RedirectButton link={"/new-job"}>
                            track new job
                        </RedirectButton>
                    </div>
                </div>
            }
        </div>
    )
}

export default withVisibleCardCount(ApplicationList)