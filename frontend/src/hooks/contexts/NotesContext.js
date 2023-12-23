import { createContext, useCallback, useReducer } from "react";

//utils
import { findTodayUTCDate } from "../../utils/dateTime";

//services
import APIs from "../../services/api";

//helpers
import { sortDataByLatest } from "../../helpers/helpers";

//actions
import {
    NOTES_GET_SUCCESS, NOTES_GET_FAILURE, NOTES_CREATE_SUCCESS,
    NOTES_UPDATE_SUCCESS, NOTES_DELETE_SUCCESS
} from "../reducers/notesReducer";

//reducer
import { notesReducer } from "../reducers/notesReducer";

const initialState = {
    data: [],
    errors: null
}

export const NotesContext = createContext({
    //interface
    notes: initialState,
    getNotes: async () => { },
    getJobNotes: async (application_id) => { },
    updateJobNote: async (note_id, note) => { },
    createJobNote: async (application_id, note) => { },
    deleteJobNote: async (note_id) => { }
})

export const NotesProvider = ({ children }) => {
    const [notes, dispatch] = useReducer(notesReducer, initialState)

    const getNotes = useCallback(async () => {
        try {
            const response = await APIs.noteAPI.getNotes()
            dispatch({ type: NOTES_GET_SUCCESS, payload: sortDataByLatest(response.data) })
            return response.data
        } catch (errors) {
            console.log(errors)
            dispatch({ type: NOTES_GET_FAILURE, payload: errors })
            throw errors
        }
    }, [dispatch])

    const getJobNotes = useCallback(async (application_id) => {
        try {
            const response = await APIs.noteAPI.getApplicationNotes(application_id)
            dispatch({ type: NOTES_GET_SUCCESS, payload: sortDataByLatest(response.data) })
            return response.data
        } catch (errors) {
            console.log(errors)
            dispatch({ type: NOTES_GET_FAILURE, payload: errors })
            throw errors
        }
    }, [dispatch])

    const updateJobNote = async (note_id, note) => {
        try {
            const response = await APIs.noteAPI.updateNote(note_id, {
                ...note,
                date_edited: findTodayUTCDate(),
                last_archived: note.archived
            })
            dispatch({ type: NOTES_UPDATE_SUCCESS, payload: response.data })
            return response.data
        } catch (errors) {
            console.log(errors)
            throw errors
        }
    }

    const createJobNote = async (application_id, note) => {
        try {
            const response = await APIs.noteAPI.createNote({
                ...note,
                application_id: application_id,
                date_edited: findTodayUTCDate(),
                date_created: findTodayUTCDate(),
            })
            dispatch({ type: NOTES_CREATE_SUCCESS, payload: response.data })
            return response.data
        } catch (errors) {
            console.log(errors)
            throw errors
        }
    }

    const deleteJobNote = async (note_id) => {
        try {
            await APIs.noteAPI.deleteNote(note_id)
            dispatch({ type: NOTES_DELETE_SUCCESS, payload: note_id })
            return note_id
        } catch (errors) {
            console.log(errors)
            throw errors
        }
    }

    return (
        <NotesContext.Provider value={{
            notes,
            getNotes,
            getJobNotes,
            updateJobNote,
            createJobNote,
            deleteJobNote
        }}>
            {children}
        </NotesContext.Provider>
    )
}