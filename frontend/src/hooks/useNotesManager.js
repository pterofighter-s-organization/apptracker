import { useEffect, useState } from "react";

//backend
import { getAppNotes, updateAppNote, createAppNote } from "../data/mimicBackendStatic";


export default function useNotesManager(appId) {

    const [notes, setNotes] = useState([])

    useEffect(() => {

        let notesFromApp = []
        try {
            notesFromApp = getAppNotes(appId)
        } catch (error) {
            console.log(error)
        }

        setNotes(notesFromApp.notes)
    }, [appId])

    function updateNote(newNote, id) {

        newNote["appId"] = appId
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