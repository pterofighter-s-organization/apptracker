
//components
import { ArchivedNoteCard } from "../../Cards/NoteCard/ArchivedNoteCard"
import { ActiveNoteCard } from "../../Cards/NoteCard/ActiveNoteCard"
import { RedirectButton } from "../../Buttons/RedirectButton"
import { ShowButton } from "../../Buttons/ShowButton"

//hocs
import withVisibleCardCount from "../../../hoc/withVisibleCardCount"

//css
import "./NoteList.css"
import "../List.css"

function NoteList({ id, cards, cardCount, isPreview, status, ...props }) {

    return (
        <div className="list-container">
            <div
                className="list note-list"
                id={id}
            >
                {status === "active" ?
                    cards.slice(0, cardCount).map((item, index) => (
                        <ActiveNoteCard
                            key={"note-card-" + index}
                            id={"note-card-" + index}
                        />
                    ))

                    :
                    cards.slice(0, cardCount).map((item, index) => (
                        <ArchivedNoteCard
                            key={"note-card-" + index}
                            id={"note-card-" + index}
                        />
                    ))
                }
            </div>
            {
                isPreview ?
                    <RedirectButton
                        link={"/all-notes"}
                        text={"notes"}
                        status={status}
                    />
                    :
                    <ShowButton
                        isLoading={(cardCount < cards.length)}
                        text={"notes"}
                        {...props}
                    />
            }
        </div>
    )
}

export default withVisibleCardCount(NoteList)