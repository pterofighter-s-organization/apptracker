import { useState } from "react";
import { dateFormat } from "../../utils/dateTime/date/date";
import NoteCard from "../NoteCard/NoteCard";
import useNotesManager from "../../hooks/useNotesManager";


export default function NoteCardList({ appId }) {

    const today = dateFormat("today")

    const { notes, updateNote, createNote } = useNotesManager(appId);

    if (!notes) {
        return <></>
    }

    console.log(notes)

    return (
        <>
            {notes.map((note) => {
                return (
                    <NoteCard
                        noteText={note.text}
                        updateNote={updateNote}
                        id={note.id}
                        fontSize={"fs-6"}
                        appId={appId}
                    />
                )
            })}
            <button
                className="btn btn-primary"
                onClick={(e) => {
                    e.preventDefault()
                    createNote(appId)
                }}
            >
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