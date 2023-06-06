import { useState, useEffect } from "react";

//services
import api from "../services/api";

export default function useNotesManager() {

    const [notes, setNotes] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        fetchAllNotes()
    }, [])

    async function fetchAllNotes() {
        try {
            setIsLoading(true)
            const response = await api.noteAPI.getNotes()
            setNotes(response.data)
            setIsLoading(false)
        } catch (error) {
            console.log(error)
            setNotes(null)
            setIsLoading(false)
        }
    }

    function updateNote(note) {
        updateNoteHelper(note)
    }

    async function updateNoteHelper(note) {

        const { note_id } = note
        const current = notes

        // console.log(note)

        //cant use settimeout here because await has to be wrapped inside async
        try {
            //do not set loading state for this because it will keep refreshing the page
            // setIsLoading(true)
            const response = await api.noteAPI.updateNote(note_id, note)
            setNotes(current.map((item) => (item.note_id === response.data.note_id ? response.data : item)))
            // setIsLoading(false)
            return true
        } catch (error) {
            console.log(error)
            // setIsLoading(false)
            return false
        }
    }

    return {
        notes,
        updateNote,
        isLoading
    }
}