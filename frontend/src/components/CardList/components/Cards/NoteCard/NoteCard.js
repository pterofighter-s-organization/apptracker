
//components
import { ActiveNoteCard } from "./ActiveNoteCard"
import { ArchivedNoteCard } from "./ArchivedNoteCard"

export default function NoteCard({ card }) {

    return (
        <>
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
        </>
    )
}