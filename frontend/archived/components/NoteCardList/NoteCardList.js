
//utils
import useNotesManager from "../../hooks/useNotesManager";
import NoteCard from "./NoteCard/NoteCard";

//css
import "./NoteCardList.css"

export default function NoteCardList({ applicationId }) {

    const { notes, updateNote, createNote } = useNotesManager(applicationId);

    if (!notes) {
        return <></>
    }

    return (
        <>
            {notes.map((note) => {
                return (
                    <NoteCard
                        note={note}
                        updateNote={updateNote}
                        fontSize={"fs-6"}
                    />
                )
            })}
            <button
                className="btn btn-primary d-flex flex-column justify-content-center align-items-center p-4"
                onClick={(e) => {
                    e.preventDefault()
                    createNote(applicationId)
                }}
                id="addButton"
                style={{height: "300px"}}
            >
                <div className="fs-5">
                    Add Note
                </div>
            </button>
        </>
    )
}