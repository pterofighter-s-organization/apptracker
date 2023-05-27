import { useState, useEffect } from "react"

//services
import api from "../services/api"

export default function useAppNotesManager(id) {

    const [notes, setNotes] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        fetchAppNotes(id)
    }, [id])

    async function fetchAppNotes(application_id) {

        try {
            setIsLoading(true)
            const response = await api.noteAPI.getApplicationNotes(application_id)
            setNotes(response.data)
            setIsLoading(false)
        } catch (error) {
            console.log(error)
            setIsLoading(false)
        }
    }

    async function updateNote(note) {

        const { note_id } = note
        const current = notes

        setNotes(null)

        try {
            setIsLoading(true)
            const response = await api.noteAPI.updateNote(note_id, note)
            setNotes(current.map((item) => (item.note_id === response.data.note_id ? response.data : item)))
            setIsLoading(false)
            return true
        } catch (error) {
            console.log(error)
            setNotes(current)
            setIsLoading(false)
            return false
        }
    }

    async function createNote(note) {

        const current = notes
        setNotes(null)

        try {
            setIsLoading(true)
            const response = await api.noteAPI.createNote(note)
            setNotes([...notes, ...response.data])
            setIsLoading(false)
            return true
        } catch (error) {
            console.log(error)
            setNotes(current)
            setIsLoading(false)
            return false
        }
    }

    return {
        notes,
        updateNote,
        createNote,
        isLoading
    }
}