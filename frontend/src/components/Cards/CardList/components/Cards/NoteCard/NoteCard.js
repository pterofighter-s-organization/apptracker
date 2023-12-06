
//private-components
import { ActiveNoteCard } from "./ActiveNoteCard"
import { ArchivedNoteCard } from "./ArchivedNoteCard"

//css
import "./NoteCard.css"

export default function NoteCard({ card }) {

    return (
        <div
            className="note-card"
            key={`note-card-${card.note_id}`}
            id={`note-card-${card.note_id}`}
        >
            {
                card.archived ?
                    <ArchivedNoteCard
                        card={card}
                    />
                    :
                    <ActiveNoteCard
                        card={card}
                    />
            }
        </div>
    )
}