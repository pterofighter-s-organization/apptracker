import { useState } from "react"

//components
import { CardList } from "../../../../components/CardList"
import { CreateButton } from "../../../../components/Buttons/CreateButton"
import { SectionHeader } from "../../../../components/SectionHeader"

//css
import "./JobPageNotes.css"
import "../../JobPage.css"

export default function JobPageNotes() {

    const noteCards = Array.from({ length: 0 }, (_, index) => index + 1)
    const [notes, setNotes] = useState(noteCards)

    const handleCreate = (e) => {
        e.preventDefault()
        setNotes([...notes, notes.length])
    }

    //here going to fetch notes

    return (
        <>
            <SectionHeader
                IconComponent={<i className="bi bi-stickies-fill" />}
                title={`${notes.length} notes taken`}
            />
            <CardList
                type={"notes"}
                cards={notes}
                status={"active"}
                isPreview={true}
                isShow={true}
            />
            <CreateButton
                handleCreate={handleCreate}
                label={"note"}
            />
        </>
    )
}