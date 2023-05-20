import { useState } from "react";
import { dateFormat } from "../../utils/dateTime/date/date";
import NoteCard from "../NoteCard/NoteCard";
import useNotesManager from "../../hooks/useNotesManager";


const today = dateFormat("today")

export default function NoteCardList({ appId }) {

    const {notes, updateNote, createNote} = useNotesManager(appId);

    if (!notes) {
        return <></>
    }

    return (
        <>
            {notes.map((note) => {
                return (
                    <NoteCard
                        noteText={note.text}
                        updateNote={updateNote}
                        id={note.id}
                        fontSize={"fs-6"}
                    />
                )
            })}
            <button className="btn btn-primary" onClick={(e) => {
                e.preventDefault()
                createNote(appId)
            }}>
                Add note
            </button>
            {/* <NoteCard
                noteText={""}
                updateNote={updateNote}
                id={-1}
                fontSize={"fs-6"}
            /> */}
        </>
    )
}