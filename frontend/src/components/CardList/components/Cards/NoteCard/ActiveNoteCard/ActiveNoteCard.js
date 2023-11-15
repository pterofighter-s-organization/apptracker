import { useState } from "react"
import { Link } from "react-router-dom"

//constants
import { ARCHIVED_BIN_ICON } from "../../../../../../constants/components"

//css
import "../NoteCard.css"

export default function ActiveNoteCard({ id }) {

    const [value, setValue] = useState(``)
    const [isEdit, setIsEdit] = useState(false)
    const noteCardId = "note-card-" + id

    const handleArchive = (e) => {
        e.preventDefault()
    }

    const handleSave = (e) => {
        e.preventDefault()
        setIsEdit(false)
        //add a method to save it to backend
    }

    const handleEdit = (e) => {
        e.preventDefault()
        setIsEdit(true)
    }

    return (
        <div
            className="note-card"
            key={noteCardId}
            id={noteCardId}
        >
            <div className="note-card-header">
                <Link
                    to={"/job/" + id}
                    className="note-card-title"
                >
                    UX/UI Designer/ Google
                </Link>
                {
                    isEdit ?
                        <button
                            type="button"
                            className="onclick-bw-button"
                            onClick={(e) => handleSave(e)}
                        >
                            <i className="bi bi-save-fill"></i>
                        </button>
                        :
                        <button
                            type="button"
                            className="onclick-bw-button"
                            onClick={(e) => handleEdit(e)}
                        >
                            <i className="bi bi-pencil-fill"></i>
                        </button>
                }
                <button
                    type="button"
                    className="onclick-bw-button"
                    onClick={(e) => handleArchive(e)}
                >
                    <i className={`${ARCHIVED_BIN_ICON}`} />
                </button>
            </div>
            {
                isEdit ?
                    <textarea
                        id={"textarea-" + id}
                        className="note-card-textarea"
                        value={value}
                        placeholder="Remember to save above after edit."
                        onChange={(e) => {
                            e.preventDefault()
                            setValue(e.target.value)
                        }}
                    >
                    </textarea>
                    :
                    <div className="note-card-content">
                        {
                            value.length > 0 ?
                                <>
                                    <pre className="note-card-content-text">
                                        {value}
                                    </pre>
                                    <button
                                        type="button"
                                        className="note-card-starter note-card-content-hover"
                                        onClick={(e) => handleEdit(e)}
                                    >
                                        click to continue editing
                                    </button>
                                </>
                                :
                                <button
                                    type="button"
                                    className="note-card-starter"
                                    onClick={(e) => handleEdit(e)}
                                >
                                    click to start editing
                                </button>
                        }
                    </div>
            }
        </div>
    )
}