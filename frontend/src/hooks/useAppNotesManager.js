import { useState, useEffect } from "react"

//services
import api from "../services/api"

// import axios from "axios"

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
            setNotes(null)
            setIsLoading(false)
        }
    }

    function updateNote(note) {
        //making sure the put request doesn't get spammed
        setTimeout(() => {
            updateNoteHelper(note)
        }, 500)
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

    async function createNote(note) {

        // axios.post("http://localhost:8000/api/notes", note).then(response => {
        //     console.log(response.data)
        // }).catch(error => {
        //     console.log(error)
        // })
        try {
            // setIsLoading(true)
            const response = await api.noteAPI.createNote(note)
            // console.log([...notes, response.data], response.data)
            setNotes([...notes, response.data])
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
        createNote,
        isLoading
    }
}