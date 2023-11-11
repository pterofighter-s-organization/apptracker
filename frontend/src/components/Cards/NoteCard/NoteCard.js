
//components
import { ActiveNoteCard } from "./ActiveNoteCard"
import { ArchivedNoteCard } from "./ArchivedNoteCard"

export default function NoteCard({ id, isArchived }) {

    const noteCardId = "note-card-" + id
    return (
        <>
            {
                !isArchived ?
                    <ActiveNoteCard id={noteCardId} />
                    :
                    <ArchivedNoteCard id={noteCardId} />
            }
        </>
    )
}