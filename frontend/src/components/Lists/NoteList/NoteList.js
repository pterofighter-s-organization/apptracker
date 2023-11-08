
//components
import { ArchivedNoteCard } from "./NoteCard/ArchivedNoteCard"
import { ActiveNoteCard } from "./NoteCard/ActiveNoteCard"

//css
import "./NoteList.css"

export default function NoteList() {

    return (
        <div className="note-list">
            {
                Array.from({ length: 10 }, (_, index) => index + 1).map((id) => (
                    <ActiveNoteCard key={id} id={id} />
                ))
            }
            <ArchivedNoteCard key={11} id={11}/>
        </div>
    )
}