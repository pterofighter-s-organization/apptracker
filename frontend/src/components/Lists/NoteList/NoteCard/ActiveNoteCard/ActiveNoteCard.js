import { useState } from "react"
import { Link } from "react-router-dom"

//constants
import { ARCHIVED_BIN_ICON } from "../../../../../constants/components"

//css
import "../NoteCard.css"

export default function ActiveNoteCard({ id }) {

    const [isEdit, setIsEdit] = useState(false)
    const [value, setValue] = useState(``)

    const handleSave = (e) => {
        e.preventDefault()
        setIsEdit(false)
        //add a method to save it to backend
    }

    const handleArchive = (e) => {
        e.preventDefault()
    }

    return (
        <div className="note-card">
            <div className="note-card-header">
                <Link
                    to={"/all-jobs"}
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
                            onClick={(e) => {
                                e.preventDefault()
                                setIsEdit(true)
                            }}
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
                        {value.length > 0 ?
                            <>
                                <pre className="note-card-content-text">
                                    {value}
                                </pre>
                                <button
                                    type="button"
                                    className="note-card-starter note-card-content-hover"
                                    onClick={(e) => {
                                        e.preventDefault()
                                        setIsEdit(true)
                                    }}
                                >
                                    click to continue editing
                                </button>
                            </>
                            :
                            <button
                                type="button"
                                className="note-card-starter"
                                onClick={(e) => {
                                    e.preventDefault()
                                    setIsEdit(true)
                                }}
                            >
                                click to start editing
                            </button>
                        }
                    </div>
            }
        </div>
    )
}