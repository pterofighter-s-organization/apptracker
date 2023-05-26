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

        } catch (error) {

        }
    }
}