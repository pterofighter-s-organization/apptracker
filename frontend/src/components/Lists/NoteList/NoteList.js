
//components
import { NoteCard } from "./NoteCard"

//css
import "./NoteList.css"

export default function NoteList() {

    return (
        <div className="note-list">
            {
                Array.from({ length: 10 }, (_, index) => index + 1).map((id) => (
                    <NoteCard key={id} id={id} />
                ))
            }
        </div>
    )
}