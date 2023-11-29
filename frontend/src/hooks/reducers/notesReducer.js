
//actions
export const NOTES_CALL_START = "NOTES_CALL_START"
export const NOTES_CALL_SUCCESS = "NOTES_CALL_SUCCESS"
export const NOTES_CALL_FAILURE = "NOTES_CALL_FAILURE"
export const NOTE_CREATE_SUCCESS = "NOTE_CREATE_SUCCESS"
export const NOTE_UPDATE_SUCCESS = "NOTE_UPDATE_SUCCESS"
export const NOTE_SUBMIT_FAILURE = "NOTE_SUBMIT_FAILURE"
export const NOTE_DELETE_SUCCESS = "NOTE_DELETE_SUCCESS"

//reducer
export const notesReducer = (notes, action) => {

    switch (action.type) {
        case NOTES_CALL_START:
            return ({
                ...notes,
                loading: true,
                errors: null
            })
        case NOTES_CALL_SUCCESS:
            return ({
                ...notes,
                loading: false,
                data: action.payload,
                errors: null
            })
        case NOTES_CALL_FAILURE:
            return ({
                ...notes,
                loading: false,
                errors: null
            })
        case NOTE_UPDATE_SUCCESS:
            return ({
                ...notes,
                loading: false,
                data: notes.data.map((note) => (
                    note.note_id === action.payload.note_id ?
                        action.payload
                        :
                        note
                )),
                errors: null
            })
        case NOTE_CREATE_SUCCESS:
            return ({
                ...notes,
                loading: false,
                data: [...notes, action.payload],
                errors: null
            })
        case NOTE_SUBMIT_FAILURE:
            return ({
                ...notes,
                loading: false,
            })
        case NOTE_DELETE_SUCCESS:
            return ({
                ...notes,
                loading: false,
                data: notes.data.filter((note) => (
                    note.note_id !== action.payload
                ))
            })
        default:
            throw new Error("Unhandled action type.")
    }
}