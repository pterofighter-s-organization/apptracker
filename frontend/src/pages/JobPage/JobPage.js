import { useState } from "react"
import { Link } from "react-router-dom"

//css
import { PageLayout } from "../../layouts/PageLayout"
import "./JobPage.css"
import { JobPageHeader } from "./JobPageHeader"
import { JobPageDetails } from "./JobPageDetails"
import { CardList } from "../../components/CardList"
import { TaskCard } from "../../components/Cards/TaskCard"
import { NoteCard } from "../../components/Cards/NoteCard"

export default function JobPage({ isArchived, id }) {

    const taskCards = Array.from({ length: 15 }, (_, index) => index + 1)
    const noteCards = Array.from({ length: 15 }, (_, index) => index + 1)

    const isCardsPreview = true
    const isCardsRedirect = false

    return (
        <PageLayout>
            <JobPageHeader id={1} />
            <JobPageDetails />
            <hr />
            <div className="job-page-content-bg job-page-tasks">
                <h5 className="job-page-tasks-title">
                    <i className="bi bi-view-list"></i>
                    <div style={{ textIndent: "1rem" }}>
                        All Current Tasks
                    </div>
                </h5>
            </div>
            <CardList
                type={"tasks"}
                cards={taskCards}
                CardComponent={TaskCard}
                isPreview={isCardsPreview}
                isRedirect={isCardsRedirect}
            />


        </PageLayout>
    )
}