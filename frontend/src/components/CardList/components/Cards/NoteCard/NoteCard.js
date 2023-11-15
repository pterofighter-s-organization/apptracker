
//components
import { ActiveNoteCard } from "./ActiveNoteCard"
import { ArchivedNoteCard } from "./ArchivedNoteCard"

export default function NoteCard({ id, isArchived }) {

    return (
        <>
            {
                isArchived ?
                    <ArchivedNoteCard id={id} />
                    :
                    <ActiveNoteCard id={id} />
            }
        </>
    )
}