import { useState } from "react"

//css
import { PageLayout } from "../../layouts/PageLayout"
import "./JobPage.css"
import { JobPageHeader } from "./JobPageHeader"
import { JobPageDetails } from "./JobPageDetails"
import { CardList } from "../../components/CardList"
import { TaskCard } from "../../components/CardList/components/Cards/TaskCard"
import { NoteCard } from "../../components/CardList/components/Cards/NoteCard"
import { SectionHeader } from "../../components/SectionHeader"
import { TaskForm } from "./TaskForm"
import { CreateButton } from "../../components/Buttons/CreateButton"

export default function JobPage({ isArchived, id }) {

    const taskCards = Array.from({ length: 15 }, (_, index) => index + 1)
    const noteCards = Array.from({ length: 0 }, (_, index) => index + 1)

    const [notes, setNotes] = useState(noteCards)

    const isCardsPreview = true
    const isCardsRedirect = false
    const isCardsArchived = false

    const handleCreateNote = (e) => {
        e.preventDefault()
        setNotes([...notes, notes.length])
    }

    return (
        <PageLayout>
            <JobPageHeader id={1} />
            <JobPageDetails />
            <SectionHeader
                IconComponent={<i className="bi bi-view-list"></i>}
                title={`${taskCards.length} tasks for this job`}
            />
            <CardList
                type={"tasks"}
                cards={taskCards}
                CardComponent={TaskCard}
                isPreview={isCardsPreview}
                isRedirect={isCardsRedirect}
                isArchived={isCardsArchived}
            />
            <TaskForm />
            <div />
            <SectionHeader
                IconComponent={<i className="bi bi-stickies-fill" />}
                title={`${noteCards.length} notes taken`}
            />
            <CardList
                type={"notes"}
                cards={notes}
                CardComponent={NoteCard}
                isPreview={isCardsPreview}
                isRedirect={isCardsRedirect}
                isArchived={isCardsArchived}
            />
            <CreateButton
                handleCreate={handleCreateNote}
                label={"note"}
            />
        </PageLayout>
    )
}