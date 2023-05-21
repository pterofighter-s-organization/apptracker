import { useEffect, useState } from "react";

//backend
import { getAppNotes, updateAppNote, createAppNote } from "../data/mimicBackendStatic";


export default function useNotesManager(appId) {

    const [notes, setNotes] = useState([])

    useEffect(() => {

        let notesFromApp = []
        try {
            notesFromApp = getAppNotes(appId)
            setNotes(notesFromApp.notes)
        } catch (error) {
            console.log(error)
            setNotes([])
        }

        console.log("testr")

    }, [appId])

    function updateNote(newNote, id) {

        // newNote["appId"] = appId
        console.log("test")
        const res = updateAppNote(newNote, id)
        setNotes(prev => prev.map(item => (item.id === res.id ? res : item)))
    }

    function createNote(appId) {

        const res = createAppNote(appId)
        setNotes(prev => ([...prev, res.note]))

        return res.status
    }

    return {
        notes,
        updateNote,
        createNote
    }
}