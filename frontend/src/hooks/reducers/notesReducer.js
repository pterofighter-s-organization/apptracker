
//actions
export const NOTES_GET_SUCCESS = "NOTES_GET_SUCCESS"
export const NOTES_GET_FAILURE = "NOTES_GET_FAILURE"
export const NOTES_CREATE_SUCCESS = "NOTE_CREATE_SUCCESS"
export const NOTES_UPDATE_SUCCESS = "NOTE_UPDATE_SUCCESS"
export const NOTES_DELETE_SUCCESS = "NOTE_DELETE_SUCCESS"

//reducer
export const notesReducer = (notes, action) => {

    switch (action.type) {
        case NOTES_GET_SUCCESS:
            return({
                ...notes,
                data: action.payload,
                errors: null,
            })
        case NOTES_GET_FAILURE:
            return({
                ...notes,
                errors: action.payload,
            })
        case NOTES_UPDATE_SUCCESS:
            return({
                ...notes,
                data: notes.data.map((note) => (
                    note.note_id === action.payload.note_id ?
                        action.payload
                        :
                        note
                )),
            })
        case NOTES_CREATE_SUCCESS:
            return({
                ...notes,
                data: [action.payload, ...notes.data],
            })
        case NOTES_DELETE_SUCCESS:
            return({
                ...notes,
                data: notes.data.filter((note) => (
                    note.note_id !== action.payload
                ))
            })
        default:
            throw new Error("Unhandled action type.")
    }
}