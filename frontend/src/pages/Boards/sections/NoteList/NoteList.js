
//components
import { NoteCard } from "../../../../components/Cards/NoteCard";

//layouts
import { PreviewCollapseLayout } from "../../../../layouts/PreviewCollapseLayout"

//hooks
import useNotesManager from "../../../../hooks/useNotesManager";

export default function NoteList({ isArchived }) {

    const { notes, updateNote, isLoading } = useNotesManager()
    // const categorizedNotes = (notes) ? notes.sort((note1, note2) => note2.note_id - note1.note_id).filter(note => note.archived === isArchived) : null
    const categorizedNotes = (notes) ? notes.filter(note => note.archived === isArchived) : null

    if (isLoading) {
        return <>Loading...</>
    }

    if (!categorizedNotes) {
        return <>Notes cannot be fetched! Mostly backend not connected.</>
    }

    return (
        <div className="d-flex flex-column gap-3">
            {categorizedNotes.length > 0 ?
                <PreviewCollapseLayout
                    id={"app-notes"}
                    text={"Notes"}
                    previewVh={60}
                    dependency={categorizedNotes}
                >
                    <div className="d-flex flex-wrap gap-3 gap-md-4 gap-xl-5">
                        {categorizedNotes.map((note) => {
                            return (
                                <NoteCard
                                    note={note}
                                    updateNote={updateNote}
                                />
                            )
                        })}
                    </div>
                </PreviewCollapseLayout>
                :
                <div className="fs-5">
                    {!isArchived ?
                        "No notes at this moment. Make one inside an application"
                        :
                        "No archived notes found."
                    }
                </div>
            }
        </div>
    )
}