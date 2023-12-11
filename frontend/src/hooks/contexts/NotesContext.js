import { createContext, useCallback, useReducer } from "react";

//utils
import { findTodayUTCDate } from "../../utils/dateTime";

//services
import APIs from "../../services/api";

//helpers
import { sortDataByLatest } from "../../helpers/helpers";

//actions
import {
    NOTES_CALL_START, NOTES_CALL_FAILURE, NOTES_CALL_SUCCESS,
    NOTE_CREATE_SUCCESS, NOTE_DELETE_SUCCESS, NOTE_SUBMIT_FAILURE, NOTE_UPDATE_SUCCESS
} from "../reducers/notesReducer";

//reducer
import { notesReducer } from "../reducers/notesReducer";

const initialState = {
    data: [],
    loading: false,
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
        dispatch({ type: NOTES_CALL_START })

        try {
            const response = await APIs.noteAPI.getNotes()
            dispatch({ type: NOTES_CALL_SUCCESS, payload: sortDataByLatest(response.data) })
            return ({
                success: true,
                data: response.data
            })
        } catch (errors) {
            console.log(errors)
            dispatch({ type: NOTES_CALL_FAILURE, payload: errors })
            return ({
                success: false,
                errors: errors
            })
        }
    }, [dispatch])

    const getJobNotes = useCallback(async (application_id) => {
        dispatch({ type: NOTES_CALL_START })

        try {
            const response = await APIs.noteAPI.getApplicationNotes(application_id)
            dispatch({ type: NOTES_CALL_SUCCESS, payload: sortDataByLatest(response.data) })
            return ({
                success: true,
                data: response.data
            })
        } catch (errors) {
            console.log(errors)
            dispatch({ type: NOTES_CALL_FAILURE, payload: errors })
            return ({
                success: false,
                errors: errors
            })
        }
    }, [dispatch])

    const updateJobNote = async (note_id, note) => {
        
        try {
            const response = await APIs.noteAPI.updateNote(note_id, {
                ...note,
                date_edited: findTodayUTCDate()
            })
            dispatch({ type: NOTE_UPDATE_SUCCESS, payload: response.data })
            return ({
                success: true,
                data: response.data
            })
        } catch (errors) {
            console.log(errors)
            dispatch({ type: NOTE_SUBMIT_FAILURE })
            return ({
                success: false,
                errors: errors
            })
        }
    }

    const createJobNote = async (application_id, note) => {

        try {
            const response = await APIs.noteAPI.createNote({
                ...note,
                application_id: application_id,
                date_edited: findTodayUTCDate(),
                date_created: findTodayUTCDate(),
                archived: false
            })
            dispatch({ type: NOTE_CREATE_SUCCESS, payload: response.data })
            return ({
                success: true,
                data: response.data
            })
        } catch (errors) {
            console.log(errors)
            dispatch({ type: NOTE_SUBMIT_FAILURE })
            return ({
                success: false,
                errors: errors
            })
        }
    }

    const deleteJobNote = async (note_id) => {

        try {
            const response = await APIs.noteAPI.deleteNote(note_id)
            dispatch({ type: NOTE_DELETE_SUCCESS, payload: note_id })
            return ({
                success: true,
                data: response.data
            })
        } catch (errors) {
            console.log(errors)
            dispatch({ type: NOTE_SUBMIT_FAILURE })
            return ({
                success: false,
                errors: errors
            })
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